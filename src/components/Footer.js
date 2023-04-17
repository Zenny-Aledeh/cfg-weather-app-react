import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" class="menu-section">
      <nav id="social-menu" class="social-menu" role="navigation">
        <ul>
          <li>
            <a href="http://instagram.com" target="blank">
              <span class="screen-reader-text"> Instagram</span>
            </a>
          </li>
          <li>
            <a href="http://facebook.com" target="blank">
              <span class="screen-reader-text"> Facebook</span>
            </a>
          </li>
          <li>
            <a href="http://twitter.com" target="blank">
              <span class="screen-reader-text"> Twitter</span>
            </a>
          </li>
          <li>
            <a href="http://linkedin.com" target="blank">
              <span class="screen-reader-text"> LinkedIn</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
