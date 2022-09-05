import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

export default validationSchema;
