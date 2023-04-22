import "./footer.css";
import logo from'../../image/hydra.webp'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <a href="#" className="footer__logo-link">
            <img
              src={logo}
              alt="logo"
              className="footer__logo-img"
            />
          </a>
          <ul className="footer__developers-list">
            <li className="footer__item">
              <h4 className="footer__name">Vladyslav Kurmaz</h4>
            </li>
            <li className="footer__item">
              <h4 className="footer__name">Viacheslav Zalotnyi</h4>
            </li>
            <li className="footer__item">
              <h4 className="footer__name">Yurii Ushynskyi</h4>
            </li>
            <li className="footer__item">
              <h4 className="footer__name">Ivan Sheichuk</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
