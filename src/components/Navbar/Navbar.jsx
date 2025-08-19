// src/components/Navbar/Navbar.jsx
import './Navbar.css';
import logo from '../../assets/logo.png';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

function BellIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="40"
      height="40"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6V9a6 6 0 1 0-12 0v7l-2 2v1h16v-1l-2-2z"/>
    </svg>
  );
}

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <p className="children">Children</p>
        <BellIcon className="bell" />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className="profile smiley" />
          <img src={caret_icon} alt="Open menu" />
          <div className="dropdown">
            <p>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}
