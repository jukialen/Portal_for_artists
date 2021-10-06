module.exports = {
  index: async ctx => {
    await strapi.plugins['email'].services.email.send({
      to: process.env.EMAIL_FORM_TO,
      from: process.env.EMAIL_FORM_TO,
      replyTo: process.env.EMAIL_FORM_TO,
      subject: 'Welcome to Portal for artists! Confirm Your Email',
      text: 'Hello world!',
      html: 'Hello world!',
    });
    ctx.send('E-mail sent');
  }
}
