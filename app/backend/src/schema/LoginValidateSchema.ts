import * as Joi from 'joi';

const fildsError = 'All fields must be filled';

const loginSchema = Joi.object({
  email: Joi
    .string()
    .email()
    .required()
    .messages({
      'string.email': 'Invalid email',
      'any.required': fildsError,
      'string.empty': fildsError,
    }),
  password: Joi
    .string()
    .min(6)
    .required()
    .empty()
    .messages({
      'any.required': fildsError,
      'string.min': 'Password must be at least 6 characters long',
      'string.empty': fildsError,
    }),
});

export default loginSchema;
