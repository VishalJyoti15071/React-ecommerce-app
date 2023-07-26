import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {isLogin: true}

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="login-container">
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={this.onClickButton}
        >
          {isLogin ? 'Logout' : 'Login'}
        </button>
      </div>
    )
  }
}

// Here we can add a proper login with user details.

export default Login
