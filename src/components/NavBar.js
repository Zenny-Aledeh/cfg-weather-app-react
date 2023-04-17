import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.css";
import logo from "./images/cfg-weatherapp-logo.gif";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} className="logo" alt="Logo" />
      </Link>
      <ul>
        <CustomLink to="/WeatherApp">WeatherApp</CustomLink>
        <CustomLink to="/About">About Us</CustomLink>
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
