import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';
import Details from './components/Details';
import Contact from './components/Contact';
import Products from './components/Products';

function App() {
  return (
    <Router>
    <div className="App">
        {/* Navbar */}
        <Navbar/>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/products" component={Products}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/about" component={About}/>
          <Route path="/details/:id" component={Details}/>
          <Route path="/contact" component={Contact}/>




        
        </Switch>
       
    </div>
     
    </Router>
  );
}

export default App;
