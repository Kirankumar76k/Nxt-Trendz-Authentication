// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="login-logo"
    />
    <ul className="link-container">
      <li>
        <Link to="/" className="link-text">
          Home
        </Link>
      </li>
      <li>
        <Link to="/products" className="link-text">
          Products
        </Link>
      </li>
      <li>
        <Link to="/cart" className="link-text">
          Cart
        </Link>
      </li>
      <li>
        <button className="button" type="button">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)
export default Header
