import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.css";
import logo from './images/logo.png';
import logotext from './images/logotext.png';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <div className="App-header">
          <img src= {logo} className="App-logo" alt="logo" />
          <img src= {logotext} className= "logo-text" alt = "Rain or shine? Cloudy or fine?" />
       </div>
      </Link>
      <ul>
        <CustomLink to="/WeatherApp">WeatherApp</CustomLink>
        <CustomLink to="/About">About Us</CustomLink>
        <CustomLink to="/Contact">Contact Us</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
