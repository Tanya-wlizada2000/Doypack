import "./footer.css"; // Import the CSS stylesheet for styling the footer
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import { useTranslation } from "react-i18next";

const Footer = () => {
   
  const { t } = useTranslation();

  const footerText = t('footerheading.label');
  const footerpra = t('footerpar.label');
  

  return (
    <>
      <div className="container"> {/* Container for the overall footer layout */}
        <div className="itemsContainer"> {/* Container for footer items */}
          <div className="footerItem"> {/* Flexbox container for footer sections */}
            {/* First section: Logo and company description */}
            <div className="logoText">
              <Link to="/" className="navbar-logo"> {/* Link to home with logo class */}
              <img src="/image2.png" alt="" width={80}/>
              </Link>
              <h4 dangerouslySetInnerHTML={{ __html: footerText.replace(/\n/g, '<br />') }} />
              
              
              <p dangerouslySetInnerHTML={{ __html:footerpra.replace(/\n/g, '<br />') }} >
               
              </p>
            </div>

            {/* Second section: Product links */}
            <div className="logoText">
              <h2>{t("Product.label")}</h2>
              <ul>
                <li>
                  <Link to="/service1" className="links"> {t("StandUpPouch.label")}</Link> {/* Link to roll packaging */}
                </li>
                <li>
                  <Link to="/service2" className="links">{t("SpoutPouch.label")}</Link> {/* Link to ready-made packaging */}
                </li>
                <li>
                  <Link to="/service3" className="links">{t("GussetedPouch.label")}</Link> {/* Link to ready-made packaging */}
                </li>
                <li>
                  <Link to="/service4" className="links">{t("RollFilm.label")}</Link> {/* Link to ready-made packaging */}
                </li>
                <li>
                  <Link to="/service5" className="links">{t("ShapedAndTransparent.label")}</Link> {/* Link to ready-made packaging */}
                </li>
              </ul>
            </div>

            {/* Third section: Contact information */}
            <div className="logoText">
              <h2>{t("Contact.label")}</h2>
              <div className="contact">
                <h3>{t("tel.label")}</h3>
                <Link to="/" className="links"> Tel: +8617 813 089921 </Link> 
                <br />
                <Link to="/" className="links"> Whatsapp/WeChat: +8617 813 089921</Link> {/* Contact phone number */}
              </div>
              <div className="contact">
                <h3>{t("email.label")}</h3>
                <Link to="/" className="links"> info@doypack.org</Link> {/* Email address */}
              </div>
              <div className="contact">
                <h3>{t("address.label")}</h3>
                <p>Dongguang Country, Cangzhou<br/> City, Hebel Province, China</p> {/* Office address */}
              </div>
            </div>

          </div>

          {/* Last part: Footer bottom section */}
          <div className="lastpart">
            <div className="lastpartcon">
            <p style={{
              fontWeight: 'bold',
            }}>DOYPACK PLASTIC PACKAGING CO LTD</p> {/* Copyright notice */}
            <Link to="/">{t("lasttext.label")}</Link> {/* Link to privacy policy */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
