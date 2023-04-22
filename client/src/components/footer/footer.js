import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <a href="#" className="footer__logo-link">
            <img
              src="./images/logo.svg"
              alt="logo"
              className="footer__logo-img"
            />
          </a>
          <ul className="footer__developers-list">
            <li className="footer__item">
              <h4 className="footer__name">Name Lastname</h4>
            </li>
            <li className="footer__item">
              <h4 className="footer__name">Name Lastname</h4>
            </li>
            <li className="footer__item">
              <h4 className="footer__name">Name Lastname</h4>
            </li>
            <li className="footer__item">
              <h4 className="footer__name">Name Lastname</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
