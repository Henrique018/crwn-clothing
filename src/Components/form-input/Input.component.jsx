import React from "react";
import "./input.styles.scss";

const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />

      {label ? (
        <label className={`${otherProps.value.lenght ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
