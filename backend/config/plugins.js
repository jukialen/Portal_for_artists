module.exports = ({ env }) => ({
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('EMAIL_FORM_TO'),
        defaultReplyTo: env('EMAIL_FORM_TO'),
        testAddress: env('EMAIL_FORM_TO'),
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
