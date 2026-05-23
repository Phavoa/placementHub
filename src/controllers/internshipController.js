import InternshipApplication from "../models/InternshipApplication.js";
import InternshipProgram from "../models/InternshipProgram.js";
import * as emailService from "../utils/emailService.js";

export const applyForInternship = async (req, res, next) => {
  try {
    const { firstName, lastName, email, age, program, notes } = req.body;

    // Manual Input Validation for Traceability
    const errors = [];
    if (!firstName) errors.push("First name is required");
    if (!lastName) errors.push("Last name is required");
    if (!email) errors.push("Email is required");
    if (!age || isNaN(Number(age))) errors.push("Age must be a valid number");
    if (!program) errors.push("Program selection is required");
    if (!req.file) errors.push("CV file (PDF/DOC) is required");

    if (errors.length > 0) {
      return res.status(400).json({ error: errors[0], allErrors: errors });
    }

    const application = new InternshipApplication({
      firstName,
      lastName,
      email,
      age: Number(age),
      program,
      notes,
      cvPath: req.file.path,
    });

    await application.save();

    // Trigger Email Notifications (Non-blocking)
    emailService.sendConfirmationEmail(email, firstName, program);
    emailService.sendAdminNotification({
      firstName,
      lastName,
      email,
      age,
      program,
    });

    res.status(201).json({
      message: "Application submitted successfully",
      applicationId: application._id,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ error: messages[0], allErrors: messages });
    }
    next(error); // Pass to global error handler
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await InternshipApplication.find().sort({
      createdAt: -1,
    });
    res.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ error: "Server error while fetching applications" });
  }
};

export const getApplicationById = async (req, res) => {
  try {
    const application = await InternshipApplication.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }
    res.json(application);
  } catch (error) {
    console.error("Error fetching application details:", error);
    res.status(500).json({ error: "Server error while fetching application" });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { status, adminFeedback, interviewDate, interviewLink } = req.body;

    const updateData = {};
    if (status) {
      if (
        ![
          "pending",
          "reviewed",
          "interview_scheduled",
          "accepted",
          "rejected",
        ].includes(status)
      ) {
        return res.status(400).json({ error: "Invalid status" });
      }
      updateData.status = status;
    }

    if (adminFeedback !== undefined) {
      updateData.adminFeedback = adminFeedback;
    }

    if (interviewDate !== undefined) {
      updateData.interviewDate = interviewDate;
    }

    if (interviewLink !== undefined) {
      updateData.interviewLink = interviewLink;
    }

    const application = await InternshipApplication.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true },
    );

    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }

    // Trigger Acceptance Email if status changed to accepted
    if (status === "accepted") {
      emailService.sendAcceptanceEmail(
        application.email,
        application.firstName,
        application.program,
      );
    }

    res.json({ message: "Status updated successfully", application });
  } catch (error) {
    console.error("Error updating application status:", error);
    next(error);
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const application = await InternshipApplication.findByIdAndDelete(
      req.params.id,
    );
    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }
    res.json({ message: "Application deleted successfully" });
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({ error: "Server error while deleting application" });
  }
};

// --- Internship Program Controllers ---

export const createProgram = async (req, res, next) => {
  try {
    const { title, description, category, isActive } = req.body;
    const program = new InternshipProgram({
      title,
      description,
      category,
      isActive,
    });
    await program.save();
    res.status(201).json(program);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Program title already exists" });
    }
    next(error);
  }
};

export const getAllPrograms = async (req, res) => {
  try {
    const programs = await InternshipProgram.find().sort({ title: 1 });
    res.json(programs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching programs" });
  }
};

export const updateProgram = async (req, res) => {
  try {
    const program = await InternshipProgram.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!program) return res.status(404).json({ error: "Program not found" });
    res.json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProgram = async (req, res) => {
  try {
    const program = await InternshipProgram.findByIdAndDelete(req.params.id);
    if (!program) return res.status(404).json({ error: "Program not found" });
    res.json({ message: "Program deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting program" });
  }
};
