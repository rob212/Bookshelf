import { Component } from 'react'
import Navbar from './containers/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

class App extends Component {
  state = {
    books: [
      {title: 'Me'},
      {title: 'You'},
      {title: 'Us'}
    ]
  }

  render() {
    return (
    <>
    <Router>
    <div className='App'>
    <Navbar />
    </div>
    <Switch>
    <Route path='/' exact/>
    </Switch>
    </Router>
    </>  
    )
  }
}

export default App;
