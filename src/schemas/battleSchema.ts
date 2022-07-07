import Joi from "joi";

const battleSchema = Joi.object({
  firstUser: Joi.string().required().messages({
    "string.empty": "⚠ 'firstUser' is required!",
  }),

  secondUser: Joi.string().required().messages({
    "string.empty": "⚠ 'secondUser' is required!",
  }),
});

export default battleSchema;
