import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const isEmpty = (value) => value !== "";

  const {
    reset: resetFirstName,
    inputValueClasses: inputFirstNameClasses,
    valueBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangeHandler,
    inputValueIsValid: inputFirstNameIsValid,
    valueIsValid: firstNameIsValid,
    enteredValue: enteredFirstName,
  } = useInput(isEmpty);
  const {
    reset: resetLastName,
    inputValueClasses: inputLastNameClasses,
    valueBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    inputValueIsValid: inputLastNameIsValid,
    valueIsValid: lastNameIsValid,
    enteredValue: enteredLastName,
  } = useInput(isEmpty);
  const {
    reset: resetEmail,
    inputValueClasses: inputEmailClasses,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    inputValueIsValid: inputEmailIsValid,
    valueIsValid: emailIsValid,
    enteredValue: enteredEmail,
  } = useInput((value) => emailRegex.test(value));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={inputFirstNameClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        {!inputFirstNameIsValid && (
          <p className="error-text">Enter not empty first name</p>
        )}

        <div className={inputLastNameClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      {!inputLastNameIsValid && (
        <p className="error-text">Enter not empty last name</p>
      )}

      <div className={inputEmailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {!inputEmailIsValid && <p className="error-text">Enter valid email</p>}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
