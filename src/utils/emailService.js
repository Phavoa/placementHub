import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { env } from "../config/env.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Connection Error:", error);
  } else {
    console.log("SMTP Server is ready to take our messages");
  }
});

/**
 * Send Confirmation Email to Applicant
 */
export const sendConfirmationEmail = async (userEmail, firstName, program) => {
  const mailOptions = {
    from: `"Placement Hub" <${process.env.SMTP_FROM_EMAIL}>`,
    to: userEmail,
    subject: "Application Received - Placement Hub",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #2d1b4e;">Hello ${firstName}!</h2>
        <p>Thank you for applying for the <strong>${program}</strong> at Placement Hub.</p>
        <p>We have successfully received your application and CV. Our admissions team will review your profile and get back to you within 48 hours.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="color: #666; font-size: 12px;">This is an automated message, please do not reply directly to this email.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent:", info.messageId);
  } catch (error) {
    console.error("Email Error (Confirmation):", error);
  }
};

/**
 * Send Notification Email to Admin
 */
export const sendAdminNotification = async (appData) => {
  const mailOptions = {
    from: `"Placement Hub System" <${process.env.SMTP_FROM_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "New Internship Application Submitted",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #2d1b4e;">New Application Alert</h2>
        <p>A new candidate has just applied for an internship.</p>
        <ul>
          <li><strong>Name:</strong> ${appData.firstName} ${appData.lastName}</li>
          <li><strong>Email:</strong> ${appData.email}</li>
          <li><strong>Program:</strong> ${appData.program}</li>
          <li><strong>Age:</strong> ${appData.age}</li>
        </ul>
        <p><a href="${env.frontendUrl}/admin/internship" style="background: #2d1b4e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View in Dashboard</a></p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Admin notification sent:", info.messageId);
  } catch (error) {
    console.error("Email Error (Admin Alert):", error);
  }
};

/**
 * Send Acceptance Email to Applicant
 */
export const sendAcceptanceEmail = async (userEmail, firstName, program) => {
  const mailOptions = {
    from: `"Placement Hub Admissions" <${process.env.SMTP_FROM_EMAIL}>`,
    to: userEmail,
    subject: "Congratulations! Your Internship Application was Accepted",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; border-top: 10px solid #ffc12b;">
        <h2 style="color: #2d1b4e;">Congratulations ${firstName}!</h2>
        <p>We are thrilled to inform you that your application for the <strong>${program}</strong> has been <strong>ACCEPTED</strong>.</p>
        <p>Our team will reach out to you shortly with the next steps regarding your onboarding and schedule.</p>
        <p>Welcome to the team!</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="color: #666; font-size: 12px;">Placement Hub Admissions Team</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Acceptance email sent:", info.messageId);
  } catch (error) {
    console.error("Email Error (Acceptance):", error);
  }
};
