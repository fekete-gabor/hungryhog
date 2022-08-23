import { useField } from "formik";

const CustomTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <textarea
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

export default CustomTextArea;
