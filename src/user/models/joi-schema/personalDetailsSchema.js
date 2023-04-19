import Joi from "joi";

const personalDetailsSchema = {
  first: Joi.string().min(2).max(256).required(),

  last: Joi.string().min(2).max(256).required(),

  password: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/,
    )
    .rule({
      message:
        'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
    })
    .required(),
};

export default personalDetailsSchema;
