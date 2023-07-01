import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscomponent from './components/Newscomponent';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apikey = process.env.REACT_APP_API_KEY

  state = {
    Progress: 0
  }
  setProgress = (progress) => {
    this.setState({ Progress: progress })
  }
  render() {
    console.log(this.apikey)
    return (
      <Router>
        <div>

          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.Progress}

          />
          <Routes>
            <Route exact path='/' element={<Newscomponent apikey={this.apikey} setprogress={this.setProgress} key={'general'} pageSize={5} country={"in"} category={"general"} />}></Route>
            <Route exact path='/business' element={<Newscomponent apikey={this.apikey} setprogress={this.setProgress} key={'business'} pageSize={5} country={"in"} category={"business"} />}></Route>
            <Route exact path='/entertainment' element={<Newscomponent apikey={this.apikey} setprogress={this.setProgress} key={'entertainment'} pageSize={5} country={"in"} category={"entertainment"} />}></Route>
            <Route exact path='/general' element={<Newscomponent apikey={this.apikey} setprogress={this.setProgress} key={'general'} pageSize={5} country={"in"} category={"general"} />}></Route>
            <Route exact path='/health' element={<Newscomponent apikey={this.apikey} setprogress={this.setProgress} key={'health'} pageSize={5} country={"in"} category={"health"} />}></Route>
            <Route exact path='/science' element={<Newscomponent apikey={this.apikey} setprogress={this.setProgress} key={'science'} pageSize={5} country={"in"} category={"science"} />}></Route>
            <Route exact path='/sports' element={<Newscomponent apikey={this.apikey} setprogress={this.setProgress} key={'sports'} pageSize={5} country={"in"} category={"sports"} />}></Route>
            <Route exact path='/technology' element={<Newscomponent apikey={this.apikey} setprogress={this.setProgress} key={'technology'} pageSize={5} country={"in"} category={"technology"} />}></Route>
          </Routes>
        </div>

        {/* <Navbar />
        <Newscomponent apikey={this.apikey} setprogress = {this.setProgress} pageSize={8} country={"in"} category={"general"}  /> */}

      </Router>


    )
  }
}

