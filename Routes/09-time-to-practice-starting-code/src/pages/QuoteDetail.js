import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  return <Comments />;
};

export default QuoteDetail;
