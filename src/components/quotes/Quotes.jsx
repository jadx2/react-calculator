import quotes from './quotes';
import '../styles/quotes.css';

const Quotes = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="quotes">
      <h2 className="quotes__quote">{randomQuote.quote}</h2>
      <p className="quotes__author">
        -
        {randomQuote.author}
      </p>
    </div>
  );
};

export default Quotes;
