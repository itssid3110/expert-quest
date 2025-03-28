
interface QuoteRequestData {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  deadline: string;
  message: string;
}

// Map service types to their respective email addresses
const SERVICE_EMAIL_MAP: Record<string, string> = {
  assignment: "assignments@expertquest.com",
  exam: "exams@expertquest.com",
  project: "projects@expertquest.com",
  website: "websites@expertquest.com",
  math: "mathhelp@expertquest.com",
  homework: "homework@expertquest.com",
  // Default fallback email
  default: "support@expertquest.com"
};

/**
 * Sends a quote request to the appropriate email based on service type
 */
export const sendQuoteRequest = async (data: QuoteRequestData): Promise<void> => {
  // Get the appropriate recipient email based on service type
  const recipientEmail = SERVICE_EMAIL_MAP[data.serviceType] || SERVICE_EMAIL_MAP.default;
  
  // In a real application, this would connect to a backend API
  // For demonstration purposes, we'll simulate the email sending
  
  // Format the message for email
  const emailSubject = `New Quote Request: ${data.serviceType} - ${data.deadline}`;
  const emailBody = `
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone || 'Not provided'}
    Service: ${data.serviceType}
    Deadline: ${data.deadline}
    Message: ${data.message}
  `;
  
  console.log('Sending email with the following details:');
  console.log('To:', recipientEmail);
  console.log('Subject:', emailSubject);
  console.log('Body:', emailBody);
  
  // Simulate API call to backend service
  // In a real application, you would use fetch() or axios to send this to your backend
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate 95% success rate for demonstration
      if (Math.random() > 0.05) {
        console.log('Email sent successfully!');
        resolve();
      } else {
        console.error('Error sending email');
        reject(new Error('Failed to send email'));
      }
    }, 1500);
  });
};
