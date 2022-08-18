import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
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

export default CustomInput;
