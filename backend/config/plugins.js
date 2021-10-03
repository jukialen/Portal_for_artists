module.exports = () => ({
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

  upload: {
    breakpoints: {
      xlarge: 1920,
      large: 1000,
      medium: 750,
      small: 500,
      xsmall: 64
    }
  }
});
