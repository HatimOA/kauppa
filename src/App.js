import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Jackets from './pages/jackets';
import Shirts from './pages/shirts';
import Accessories from './pages/accessories';
import Contact from './pages/contact';
import Alennuspäivät from './pages/alennuspäivät';
import Ourpartner from './pages/ourpartner';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/jackets' component={Jackets} />
        <Route path='/shirts' component={Shirts} />
        <Route path='/accessories' component={Accessories} />
        <Route path='/contact' component={Contact} />
        <Route path='/alennuspäivät' component={Alennuspäivät} />
        <Route path='/ourpartner' component={Ourpartner} />
      </Switch>
    </Router>
  );
}

export default App;

