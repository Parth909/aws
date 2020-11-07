exports.registerEmailParams = (email, token) => {
  // returning a *params* object || Creating sendEmail *params*
  // code was becoming lengthy so moved it here

  return {
    Source: process.env.EMAIL_FROM, // email sent from this adminUser
    Destination: {
      ToAddresses: [email], // to this normalUser
    },
    ReplyToAddresses: [process.env.EMAIL_TO], // reply from normalUser to this User/AdminUser
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
          <html>
          <h1>Verify Your Email Address</h1>
          <p>Please use the following link to complete your registration: </p>
          <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
          </html>`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Complete Your Registeration",
      },
    },
  };
};

exports.forgotPasswordEmailParams = (email, token) => {
  return {
    Source: process.env.EMAIL_FROM, // email sent from this adminUser
    Destination: {
      ToAddresses: [email], // to this normalUser
    },
    ReplyToAddresses: [process.env.EMAIL_TO], // reply from normalUser to this User/AdminUser
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
          <html>
          <h1>Reset Password</h1>
          <p>Please use the following link to reset your password: </p>
          <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
          </html>`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Password Reset Link",
      },
    },
  };
};
