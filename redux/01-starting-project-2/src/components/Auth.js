import { useRef } from "react";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";

const notEmptyRef = (ref) => ref.current.value.trim() !== "";

const Auth = () => {
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const dispatch = useDispatch();
  const formSubmissionhandler = (event) => {
    event.preventDefault();
    if (notEmptyRef(enteredEmail) && notEmptyRef(enteredPassword))
      dispatch(authActions.logIn());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmissionhandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={enteredEmail} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={enteredPassword} />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
