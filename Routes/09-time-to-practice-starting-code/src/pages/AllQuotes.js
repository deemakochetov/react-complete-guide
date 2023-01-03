import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "1", author: "Dart Wader", text: "Space is open for heroes" },
  { id: "2", author: "Dua Lipa", text: "Levitate and don't start now" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default AllQuotes;
