import Job from "../models/Job.js";

// @desc    Create a new job
// @route   POST /api/jobs
// @access  Public (for now, might restrict to Admin later)
export const createJob = async (req, res, next) => {
  try {
    const jobData = { ...req.body };

    // Auto-generate tags based on title/type if none provided
    if (!jobData.tags || jobData.tags.length === 0) {
      jobData.tags = [jobData.type];
      if (
        jobData.title.toLowerCase().includes("engineer") ||
        jobData.title.toLowerCase().includes("developer")
      ) {
        jobData.tags.push("Engineering");
      } else if (jobData.title.toLowerCase().includes("design")) {
        jobData.tags.push("Design");
      }
    }

    const job = await Job.create(jobData);
    res.status(201).json(job);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
export const getAllJobs = async (req, res, next) => {
  try {
    const { status, category, limit, search, location, type, sort } = req.query;
    let queryOptions = {};

    if (status) {
      queryOptions.status = status;
    }

    // Text search — use $and to prevent it from overriding other filters
    if (search) {
      queryOptions.$and = [
        {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { companyName: { $regex: search, $options: "i" } },
            { tags: { $regex: search, $options: "i" } },
          ],
        },
      ];
    } else if (category) {
      // Legacy category match fallback (only when no search is active)
      queryOptions.$and = [
        {
          $or: [
            { title: { $regex: category, $options: "i" } },
            { tags: { $regex: category, $options: "i" } },
          ],
        },
      ];
    }

    if (location) {
      queryOptions.location = { $regex: location, $options: "i" };
    }

    if (type) {
      // Case-insensitive exact match using regex with anchors for robustness
      queryOptions.type = { $regex: `^${type}$`, $options: "i" };
    }

    // Sorting logic
    let sortOptions = { createdAt: -1 }; // Default: Newest First
    if (sort) {
      if (sort === "oldest") sortOptions = { createdAt: 1 };
      else if (sort === "salary_high") sortOptions = { salary: -1 };
      else if (sort === "salary_low") sortOptions = { salary: 1 };
    }

    let query = Job.find(queryOptions).sort(sortOptions);

    if (limit) {
      query = query.limit(parseInt(limit, 10));
    }

    const jobs = await query;
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single job by ID
// @route   GET /api/jobs/:id
// @access  Public
export const getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      const error = new Error("Job not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};

// @desc    Update a job
// @route   PATCH /api/jobs/:id
// @access  Public (for now)
export const updateJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!job) {
      const error = new Error("Job not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a job
// @route   DELETE /api/jobs/:id
// @access  Public (for now)
export const deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      const error = new Error("Job not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ message: "Job removed successfully" });
  } catch (error) {
    next(error);
  }
};
