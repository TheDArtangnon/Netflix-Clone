import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import profileImg from '../../assets/profile_img.png';
import caret from '../../assets/caret_icon.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/"><img src={logo} alt="Netflix" /></Link>
        <ul className="navbar-browse">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tv">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/new">New &amp; Popular</Link></li>
          <li><Link to="/my-list">My List</Link></li>
          <li className="children"><Link to="/children">Children</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        {/* Inline SVG so hover color in your CSS turns it red */}
        <svg className="bell" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 22a2.25 2.25 0 0 0 2.2-1.75h-4.4A2.25 2.25 0 0 0 12 22Zm7-6v-4.25a7 7 0 0 0-5-6.72V4a2 2 0 1 0-4 0v1.03A7 7 0 0 0 5 11.75V16l-2 2v1h18v-1l-2-2Z"/>
        </svg>

        <div className="navbar-profile">
          <img src={profileImg} alt="Profile" className="profile" />
          <img src={caret} alt="" />
          <div className="dropdown">
            <p><Link to="/login">Sign In to Netflix</Link></p>
            <p><Link to="/account">Go to Account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

