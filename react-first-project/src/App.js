import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)

export default App
