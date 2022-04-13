// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', ErrMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = response.json()
    console.log(data)
    if (username === '') {
      this.setState({ErrMsg: '*Username is not Found'})
    } else if (password === '') {
      this.setState({ErrMsg: '*Password is not Found'})
    } else if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({ErrMsg: '*Username and Password didnt Match'})
    }
  }

  render() {
    const {ErrMsg} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />
          <div className="login-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-logo"
            />
            <form onSubmit={this.onSubmitForm} className="form">
              <div className="input-container">
                <label htmlFor="username" className="label">
                  USERNAME
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                  className="input"
                  id="username"
                />
              </div>
              <div className="input-container">
                <label htmlFor="password" className="label">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.onChangePassword}
                  className="input"
                />
              </div>
              <button type="submit" className="button">
                Login
              </button>
              <p className="err-msg">{ErrMsg}</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginForm
