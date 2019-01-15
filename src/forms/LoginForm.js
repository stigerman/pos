import React from "react"
import PropTypes from "prop-types"
import Validator from "validator"
import { Form, Button } from "semantic-ui-react"
import InlineError from "../messages/InlineError"
class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.id]: e.target.value }
    })
  }

  validate = data => {
    console.log("data", data)
    const errors = {}
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email address"

    if (!data.password) errors.password = "Can't be blank"
    console.log("errors", errors)
    return errors
  }

  onSubmit = () => {
    console.log("hi")
    const errors = this.validate(this.state.data)
    this.setState({ errors })
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data)
    }
  }

  render() {
    const { data, errors } = this.state
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={data.email}
            id="email"
            onChange={this.onChange}
            placeholder="example@example.com"
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={data.password}
            id="password"
            onChange={this.onChange}
            placeholder="********"
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>

        <Button primary>Login</Button>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm
