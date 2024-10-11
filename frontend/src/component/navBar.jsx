import { useState } from "react";
import "./navBar.css";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { TiSocialInstagramCircular } from "react-icons/ti"; // Importing Instagram icon
import { PiFacebookLogoBold } from "react-icons/pi"; // Importing Facebook icon
import { TiSocialLinkedinCircular } from "react-icons/ti"; // Importing LinkedIn icon
import { NavbarButton } from "./navbarButton";
import { LanguageButton } from "../changeLang";
import { useTranslation } from "react-i18next";

// Navebar
const Navbar = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // set isMenuOpen
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  //  set isDropdownOpen
  return (
    //    isDropdownOpen
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          style={{
            display: "flex",
            alignItems: "end",
          }}
        >
          <img src="/image2.png" alt=""  className="logo" />
          <p className="doy-pack-text">Doypack</p>
        </Link>
        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-item">
          {t("Home.label")}
          </Link>
          <div className="navbar-item dropdown" onClick={toggleDropdown}>
          {t("About.label")}
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/about" className="dropdown-item">
                {t("aboutTheCompany.label")}
                </Link>
                {/* <Link to="/Certificate" className="dropdown-item">
                  Certificate
                </Link>*/}
              </div>
            )}
          </div>
          <div className="navbar-item dropdown" onClick={toggleDropdown}>
          {t("Product.label")}
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/service1" className="dropdown-item">
                {t("StandUpPouch.label")}
                </Link>
                <Link to="/service2" className="dropdown-item">
                {t("SpoutPouch.label")}
                </Link>
                <Link to="/service3" className="dropdown-item">
                {t("GussetedPouch.label")}
                </Link>
                <Link to="/service4" className="dropdown-item">
                {t("RollFilm.label")}
                </Link>
                <Link to="/service5" className="dropdown-item">
                {t("ShapedAndTransparent.label")}
                </Link>
              </div>
            )}
          </div>
          <Link to="/Contact" className="navbar-item">
          {t("Contact.label")}
          </Link>
        </div>
        <div className="iconsMedia">
          {/* Instagram icon with a link */}
          <a href="https://www.instagram.com/doypack2023" target="_blank">
            <TiSocialInstagramCircular size={30} />
          </a>
          {/* Facebook icon with a link */}
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiFacebookLogoBold size={30} />
          </Link>
          {/* LinkedIn icon with a link */}
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedinCircular size={35} />
          </Link>
          {/* The Icons */}
          <Link to="/Contact" className="phone-icone">
            <NavbarButton title={t("Contact.label")} />
          </Link>

          < LanguageButton/>
        </div>

        <button className="navbar-toggler" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close-icon">
              <IoMdClose />
            </span>
          ) : (
            <span className="hamburger-icon">
              <IoIosMenu />
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
