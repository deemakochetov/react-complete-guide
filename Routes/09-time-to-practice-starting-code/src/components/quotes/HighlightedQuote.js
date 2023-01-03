import { Route } from "react-router-dom";

import Comments from "../comments/Comment";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <>
      <figure className={classes.quote}>
        <p>{props.text}</p>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Route path={`/quote/:quoteId/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default HighlightedQuote;
