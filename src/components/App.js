import React from "react"
import { Route } from "react-router-dom"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import SecurityPage from "./SecurityPage"

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/security" exact component={SecurityPage} />
  </div>
)

export default App
