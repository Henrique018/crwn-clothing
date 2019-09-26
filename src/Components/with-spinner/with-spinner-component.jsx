import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles.jsx";

const WithSpinner = Component => ({isLoading,  ...otherProps }) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <Component {...otherProps} />
  );

export default WithSpinner;
