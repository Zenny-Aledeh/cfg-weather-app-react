import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="menu-section">
      <nav id="social-menu" className="social-menu" role="navigation">
        <ul>
        <li>
            <a href="http://instagram.com" target="blank"> Instagram</a>
          </li>
          <li>
            <a href="http://facebook.com" target="blank"> Facebook</a>
          </li>
          <li>
            <a href="http://twitter.com" target="blank"> Twitter</a>
          </li>
          <li>
            <a href="http://linkedin.com" target="blank"> LinkedIn</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
