const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "benardogutu65@gmail.com",
    subject: "Thanks for joining in",
    text: `Welcome to the app ${name},let me know how you get along with the app`,
  });
};
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "benardogutu65@gmail.com",
    subject: "Good Bye",
    text: `We are sad that you are leaving us ${name}. let us know what made you leave?`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
