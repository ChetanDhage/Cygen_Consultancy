export const sendConsultantWelcomeEmail = async (email, name) => {
  // Implementation using Nodemailer or other email service
  console.log(`Sending welcome email to ${email}`);
  return true;
};

export const sendQueryNotification = async (consultantEmail, clientName) => {
  console.log(
    `Notifying ${consultantEmail} about new query from ${clientName}`
  );
  return true;
};

export const sendSessionReminder = async (email, sessionDetails) => {
  console.log(`Sending session reminder to ${email}`);
  return true;
};
