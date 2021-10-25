import React from 'react';
// import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './pages/Home'
// import About from './pages/About';
// import Register from './pages/Register';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import './Styles/Styles.scss'
import About from './Component/About'
import Features from './Component/Features';
import Services from './Component/Services';





function App() {
  return (  

<>
<Navbar />
<Hero />
<About />
<Features />
<Services />




</>



    // <Router>
    //   <Navbar />
    //   <Hero/>
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/Register" component={Register} />
    //     <Route path="/about" component={About} />
    //   </Switch>
    // </Router>
  
    




  
  );
}

export default App;
 