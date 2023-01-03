import { useState } from "react";

const useInput = (validationFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  const inputValueIsValid = !(!valueIsValid && enteredValueTouched);
  const inputValueClasses = inputValueIsValid
    ? "form-control"
    : "form-control invalid";

  return {
    reset,
    inputValueClasses,
    valueBlurHandler,
    valueChangeHandler,
    inputValueIsValid,
    valueIsValid,
    enteredValue,
  };
};

export default useInput;
