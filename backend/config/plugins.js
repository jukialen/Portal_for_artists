module.exports = ({ env }) => ({
  email: {
    provider: process.env.EMAIL_PROVIDER,
    providerOptions: {
      host: process.env.EMAIL_SMTP_HOST,
      port: process.env.EMAIL_SMTP_PORT,
      //secure: true,
      username: process.env.EMAIL_SMTP_USER,
      password: process.env.EMAIL_SMTP_PASS,
      //rejectUnauthorized: false,
      //requireTLS: false,
      connectionTimeout: 3,
    },
    settings: {
      from: process.env.EMAIL_ADDRESS_FROM,
      replyTo: process.env.EMAIL_ADDRESS_REPLY,
    },
  },
  // ...
});
