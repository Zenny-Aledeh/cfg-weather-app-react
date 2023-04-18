import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="menu-section">
      <nav id="social-menu" className="social-menu" role="navigation">
        <ul>
          <li>
            <a href="http://instagram.com" target="blank">
              <span className="screen-reader-text"> Instagram</span>
            </a>
          </li>
          <li>
            <a href="http://facebook.com" target="blank">
              <span className="screen-reader-text"> Facebook</span>
            </a>
          </li>
          <li>
            <a href="http://twitter.com" target="blank">
              <span className="screen-reader-text"> Twitter</span>
            </a>
          </li>
          <li>
            <a href="http://linkedin.com" target="blank">
              <span className="screen-reader-text"> LinkedIn</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
