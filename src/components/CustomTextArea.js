import { useField } from "formik";

const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <textarea
        {...field}
        {...props}
        cols="30"
        rows="20"
        className={meta.touched && meta.error ? "input-error" : null}
      />
      {meta.touched && meta.error && (
        <div className="error-message">
          <p>{meta.error}</p>
        </div>
      )}
    </>
  );
};

export default CustomTextArea;
