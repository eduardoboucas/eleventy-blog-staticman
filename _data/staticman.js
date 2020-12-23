const isRecaptchaEnabled =
  process.env.RECAPTCHA_SITE_KEY && process.env.RECAPTCHA_SITE_SECRET;

module.exports = {
  reCaptchaSiteKey: isRecaptchaEnabled ? process.env.RECAPTCHA_SITE_KEY : null,
};
