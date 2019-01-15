import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import LoginForm from "../forms/LoginForm"
import { login } from "../actions/auth"
import PropTypes from "prop-types"

class Loginpage extends React.Component {
  submit = data => {
    this.props.login(data).then(() => this.props.history.push("/"))
  }
  render() {
    return (
      <div>
        <h1> Loginpage</h1>
        <LoginForm submit={this.submit} />
        <Link to="/"> Home Page </Link>
      </div>
    )
  }
}

Loginpage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}
export default connect(
  null,
  { login }
)(Loginpage)
