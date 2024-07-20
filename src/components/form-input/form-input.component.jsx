import "./form-input.style.scss";
const FormInput = ({ label, ...otherProps }) => {
  // console.log("otherProps");
  // console.log(otherProps);
  // const { type, id, required, value, onChange } = otherProps;

  return (
    <div className="group">
      <input {...otherProps} className="form-input" />
      {label && (
        <label
          htmlFor={otherProps.id}
          className={`${
            otherProps.value.length > 0 ? "shrink" : ""
          }  form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
