import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <span className={classes.logo}>Great Quotes</span>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <NavLink
              to="/quotes/new-quote"
              className={classes.a}
              activeClassName={classes.active}
            >
              New quote
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink
              to="/quotes"
              className={classes.a}
              activeClassName={classes.active}
              exact
            >
              Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
