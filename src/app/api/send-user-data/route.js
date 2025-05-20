// app/api/send-user-data/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { recipientEmail, userData, actionType, timestamp } = body;
    
    // Format userData for email content
    const formatUserData = (data) => {
      return Object.entries(data)
        .map(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
            return `${key}: ${JSON.stringify(value)}`;
          }
          return `${key}: ${value}`;
        })
        .join('<br>');
    };
    
    // Prepare email content
    const formattedData = formatUserData(userData);
    
    // Set email subject based on action type
    let subject = 'User Data Notification';
    switch (actionType) {
      case 'login_attempt':
        subject = 'Login Attempt - Sycom App';
        break;
      case 'login_success':
        subject = 'Successful Login - Sycom App';
        break;
      case 'login_failure':
        subject = 'Failed Login Attempt - Sycom App';
        break;
      case 'oauth_initiated':
        subject = 'OAuth Login Initiated - Sycom App';
        break;
      case 'oauth_success':
        subject = 'Successful OAuth Login - Sycom App';
        break;
      case 'oauth_failure':
        subject = 'Failed OAuth Attempt - Sycom App';
        break;
      default:
        subject = `User Action (${actionType}) - Sycom App`;
    }
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Sycom App <onboarding@resend.dev>',
      to: recipientEmail,
      subject: subject,
      html: `
        <h2>Action Type: ${actionType}</h2>
        <p><strong>Timestamp:</strong> ${timestamp}</p>
        <h3>User Data:</h3>
        <pre style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${formattedData}</pre>
      `,
    });
    
    if (error) {
      throw new Error(error.message);
    }
    
    // Return success response
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    
    // Return error response
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}