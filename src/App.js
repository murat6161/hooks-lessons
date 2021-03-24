import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Topic from './Pages/Topic';
import NotFound from './Pages/NotFound';
import React, {useContext} from 'react'



export const NewContext = React.createContext()



function App() {
  return (

    <NewContext.Provider value="React">
    <div className="App">

      <BrowserRouter>

    <nav>
      <ul>
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/about">About</Link>
        </li>
        <li>
          <Link to = "/contact">Contact</Link>
        </li>
        <li>
          <Link to = "/topics">Topics</Link>
        </li>
       
      </ul>
    </nav>
    <hr/>

    <Switch>


      <Route exact path="/" component={Home}/>

      <Route path="/about">
        <About/>
        </Route>

        <Route path="/contact">
        <Contact/>

        </Route>

        

        <Route path="/topics">
        <Topic/>

        </Route>

        <Route component={NotFound}/>

        </Switch>

        
      
      
      
      </BrowserRouter>
      
      
    </div>
    </NewContext.Provider>
  );
}

export default App;
