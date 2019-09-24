import React from "react";

import {GroupContainer,FormInputContainer,FormInputLabel} from './input.styles.jsx'


const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />

      {label ? (
        <FormInputLabel className={otherProps.value.lenght ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default Input;
