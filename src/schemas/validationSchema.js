import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Kötelező mező!"),
  email: yup.string().email("Érvénytelen email cím").required("Kötelező mező!"),
  message: yup.string().required("Kötelező mező!"),
});

export default validationSchema;
