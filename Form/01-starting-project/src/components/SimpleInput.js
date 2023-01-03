import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const nameIsValid = !(enteredName.trim() === "" && enteredNameTouched);
  const emailIsValid = !(!emailRegex.test(enteredEmail) && enteredEmailTouched);
  const formIsValid = nameIsValid && emailIsValid;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const nameBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredEmailTouched(false);
    setEnteredNameTouched(false);
  };

  const inputNameIsValid = !(!nameIsValid && enteredNameTouched);
  const inputNameClasses = inputNameIsValid
    ? "form-control"
    : "form-control invalid";

  const inputEmailIsValid = !(!emailIsValid && enteredEmailTouched);
  const inputEmailClasses = inputEmailIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      {!nameIsValid && <p className="error-text">Enter not empty name</p>}
      <div className={inputEmailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {!emailIsValid && <p className="error-text">Enter valid email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
