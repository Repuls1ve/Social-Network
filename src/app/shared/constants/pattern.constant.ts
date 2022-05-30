export const PASSWORD_PATTERN =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,30}/

export const EMAIL_PATTERN =
  /(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/

export const USERNAME_PATTERN = /^([a-zA-Z0-9_-]){3,30}$/
