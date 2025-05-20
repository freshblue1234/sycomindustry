// File: /app/api/auth/notify/route.js

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { user, action } = await request.json();
    
    if (!user || !user.email) {
      return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
    }
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Will be sycomindustry@gmail.com
        pass: process.env.EMAIL_PASSWORD, // App password for Gmail
      },
    });
    
    // Determine email subject and content based on action
    let subject = "Sycom AI Platform - User Activity";
    let html = `<h2>User Information</h2>
                <p><strong>Name:</strong> ${user.name || 'N/A'}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>User ID:</strong> ${user.id || 'N/A'}</p>
                <p><strong>Action:</strong> ${action || 'Sign In'}</p>
                <p><strong>Date/Time:</strong> ${new Date().toLocaleString()}</p>`;
    
    if (action === "signup") {
      subject = "Sycom AI Platform - New User Registration";
    } else if (action === "login") {
      subject = "Sycom AI Platform - User Login";
    }
    
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "sycomindustry@gmail.com", // Your email address
      subject: subject,
      html: html,
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: "Notification sent successfully" });
  } catch (error) {
    console.error("Error sending email notification:", error);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }
}