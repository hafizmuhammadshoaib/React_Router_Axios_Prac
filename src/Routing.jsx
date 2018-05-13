import React , {Comoponent, Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  import Home from './Home.jsx';
  import Contact from './Contact.jsx';
  import About from './About.jsx';
  import Careers  from './Careers.jsx';
  import Git from './Git.jsx';

export default class Routing extends Component{
render(){
    return(
        <Router>
            <div>
                {/* <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul> */}
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/careers" component={Careers} />
                <Route path="/git/:username" component={Git} />
            </div>
            </Router>
    )
}
}