import {Link} from 'react-router-dom'
import Login from '../Login'
import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      src="https://onezeroeight.in/wp-content/uploads/2022/05/eteva-2.png"
      alt="website-log"
      className="logo-modification"
    />
    <ul className="header-card-container">
      <Link to="/" className="header-link">
        <li className="orderer-header-list">Home</li>
      </Link>
      <Link to="/products" className="header-link">
        <li className="orderer-header-list">Products</li>
      </Link>
      <Link to="/cart" className="header-link">
        <li className="orderer-header-list">Cart</li>
      </Link>
      <Login />
    </ul>
  </div>
)

export default Header
