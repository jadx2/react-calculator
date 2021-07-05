import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Calculator from './calculator/Calculator';
import Quotes from './quotes/Quotes';
import './styles/App.css';

const App = () => (
  <div
    style={{
      height: '100vh',
      backgroundImage: 'url(/images/math-magicians.jpg)',
      backgroundRepeat: 'no-repeat',
      objectFit: 'cover',
    }}
  >
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quotes" component={Quotes} />
      </Switch>
    </Router>
  </div>
);

export default App;
