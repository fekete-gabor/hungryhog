import { useField } from "formik";

const CustomInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        {...field}
        {...props}
        className={`${
          meta.error && meta.touched
            ? "invalid-border form-input"
            : "form-input"
        }`}
      />
      <span className={`${meta.error ? "invalid" : "valid"}`}></span>
    </>
  );
};

export default CustomInput;
