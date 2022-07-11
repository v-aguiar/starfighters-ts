import Joi, { Schema } from "joi";

import { BattleBody } from "../controllers/battleController.js";

const battleSchema: Schema<BattleBody> = Joi.object({
  firstUser: Joi.string().required().messages({
    "string.empty": "⚠ 'firstUser' is required!",
  }),

  secondUser: Joi.string().required().messages({
    "string.empty": "⚠ 'secondUser' is required!",
  }),
});

export default battleSchema;
