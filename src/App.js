import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscomponent from './components/Newscomponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (

        <Router>
          <div>  
            <Navbar />
             <Routes>
            <Route exact path='/' element={<Newscomponent key={'general'} pageSize={5} country={"in"} category={"general"} />}></Route>
            <Route exact path='/business' element={<Newscomponent key={'business'} pageSize={5} country={"in"} category={"business"} />}></Route>
            <Route exact path='/entertainment' element={<Newscomponent key={'entertainment'} pageSize={5} country={"in"} category={"entertainment"} />}></Route>
            <Route exact path='/general' element={<Newscomponent key={'general'} pageSize={5} country={"in"} category={"general"} />}></Route>
            <Route exact path='/health' element={<Newscomponent key={'health'} pageSize={5} country={"in"} category={"health"} />}></Route>
            <Route exact path='/science' element={<Newscomponent key={'science'} pageSize={5} country={"in"} category={"science"} />}></Route>
            <Route exact path='/sports' element={<Newscomponent key={'sports'} pageSize={5} country={"in"} category={"sports"} />}></Route>
            <Route exact path='/technology' element={<Newscomponent key={'technology'} pageSize={5} country={"in"} category={"technology"} />}></Route>
            </Routes>
          </div>

         {/* <Navbar />
        <Newscomponent pageSize={8} country={"in"} category={"general"}  /> */}
         
        </Router>
     

    )
  }
}

