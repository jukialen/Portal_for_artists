module.exports = ({ env }) => ({
  email: {
    provider: env('EMAIL_PROVIDER'),
    providerOptions: {
      host: ('EMAIL_SMTP_HOST'),
      port: env('EMAIL_SMTP_PORT'),
      //secure: true,
      username: env('EMAIL_SMTP_USER'),
      password: env('EMAIL_SMTP_PASS'),
      //rejectUnauthorized: false,
      //requireTLS: false,
      connectionTimeout: 3,
    },
    settings: {
      from: env('EMAIL_ADDRESS_FROM'),
      replyTo: env('EMAIL_ADDRESS_REPLY'),
    },
  },
  // ...
});
