import Joi from "joi";
import signupSchema from "./signupSchema";
const editsUerSchema = signupSchema;
delete editsUerSchema.isBusiness;

export default editsUerSchema;
