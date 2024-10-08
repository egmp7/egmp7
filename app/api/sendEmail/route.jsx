// app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Change this as needed
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  const mailOptions = [
    {
      from: email,
      to: process.env.FORM_RECEIVER_EMAIL, // Email of the receiver
      subject: `EGSE7 Form Submission from ${name}`,
      text: `You have received a new message from the contact form:\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}\n`,
    },
    {
      from: process.env.EMAIL_USER, // Your email address
      to: email, // Customer email
      subject: `Confirmation: Your message has been received, ${name}`,
      text: `Hi ${name},\n\n` +
            `Thank you for reaching out! We have successfully received your message and will get back to you shortly. Below is a summary of what you submitted:\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}\n\n` +
            `If you have any further questions or updates, feel free to reply to this email.\n\n` +
            `Best regards,\n` +
            `Erick Gonzalez`,
    }
  ];
  
  try {
    // Send emails using Promise.all for simultaneous delivery
    await Promise.all(mailOptions.map(mail => transporter.sendMail(mail)));
    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
  }
}
