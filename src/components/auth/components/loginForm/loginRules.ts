import { FormRules } from "element-plus";

const trigger = "blur";

const loginRules = {
  username: [
    {
      required: true,
      message: "Username is required",
      trigger,
    },
  ],
  password: [
    { required: true, message: "Password is required", trigger },
    {
      min: 2, // TODO - Change to 8 (setted to one just for testing)
      message: "Password must be greater than 8 characters",
      trigger,
    },
  ],
} as FormRules;

export default loginRules;
