import { NavbarButton } from "./component/navbarButton"; // Importing a custom button component
import { Footer } from "./footer"; // Importing the Footer component
import { Header } from "./header"; // Importing the Header component
import "./about.css"; // Importing the CSS stylesheet for this component
import { Link } from "react-router-dom"; // Importing Link component for navigation
import { FaArrowUp } from "react-icons/fa"; // Importing FaArrowUp icon for scroll-to-top button
import { IoCallOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const IncomPage = () => {
  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  // Title for the NavbarButton
 
  
   const { t } = useTranslation();
   const mainabout = t('mainabouttext.label');
   const mainabout2 = t('mainabouttext2.label');
   const mainabout3 = t('mainabouttext3.label');
   const mainabout4 = t('mainabouttext4.label');
   const mainabout5 = t('mainabouttext5_1.label');

  return (
    <>
      <Header /> {/* Render the Header component */}
      <div className="container">
        <div className="itemsContainer">
          {/* Scroll-to-top button */}
          <a onClick={scrollToTop}>
            <FaArrowUp
              size={50}
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: 99,
                cursor: "pointer",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
                background:
                  "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 9, 121, 1) 0%, rgba(0, 212, 255, 1) 100%)",
              }}
            />
          </a>

          <Link to="/Contact">
            <IoCallOutline
              size={50}
              style={{
                position: "fixed",
                bottom: "80px",
                right: "20px",
                zIndex: 99,
                cursor: "pointer",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
                background: "  #e5750f",
              }}
            />
          </Link>

          {/* Main content section */}
          <div className="about">
            {/* Section for introductory text */}
            <div className="aboutText">
            <p dangerouslySetInnerHTML={{ __html:mainabout.replace(/\n/g, '<br />') }} >
                
              </p>

              <p dangerouslySetInnerHTML={{ __html:mainabout2.replace(/\n/g, '<br />') }} >
             
              </p>
            </div>

            {/* Section for alternating image and text */}
            <div className="aboutImgText">
              <div className="aboutImg">
                <img src="aboutimg.jpg" alt="aboutimg.jpg" />{" "}
                {/* Image with alt text */}
              </div>
              <div className="Text">
                <h2>{t('mainheading1.label')}</h2>
                <p dangerouslySetInnerHTML={{ __html:mainabout3.replace(/\n/g, '<br />') }} >
                 
                </p>
              </div>
            </div>

            {/* Repeated sections for consistency */}
            <div className="aboutImgText">
              <div className="Text">
                <h2>{t('mainheading2.label')}</h2>
                <p dangerouslySetInnerHTML={{ __html:mainabout4.replace(/\n/g, '<br />') }} >
                  
                </p>
              </div>

              <div className="aboutImg">
                <img src="teamimg.jpg" alt="teamimg.jpg" />{" "}
                {/* Image with alt text */}
              </div>
            </div>

            {/* Further repeated sections */}
            <div className="aboutImgText">
              <div className="aboutImg">
                <img src="devimg.jpg" alt="aboutimg.jpg" />{" "}
                {/* Image with alt text */}
              </div>
              <div className="Text">
                <h2>{t('mainheading3.label')}</h2>
                  
                  <p dangerouslySetInnerHTML={{ __html:mainabout5.replace(/\n/g, '<br />') }}>
                  
                  </p>
                  <p>
                  <div className="line"></div>
                  {t('mainabouttext5_2.label')}
                  <br />
                  <div className="line"></div>
                  {t('mainabouttext5_3.label')}
                   <br />
                  <div className="line"></div>
                  {t('mainabouttext5_4.label')}
                  <br />
                  <div className="line"></div>
                  {t('mainabouttext5_5.label')}
                  <br />
                  <div className="line"></div>
                  {t('mainabouttext5_6.label')}
                  <br />
                  <div className="line"></div>
                  {t('mainabouttext5_7.label')}
                  </p>
                
              </div>
            </div>

            {/* Repeated sections for consistency */}
            <div className="aboutImgText">
              <div className="Text">
                <h2>{t('mainheading4.label')}</h2>
              
                  <p>
                  {t('mainabouttext6_1.label')}  
                  </p>
                  <p>
                  <div className="line"></div>
                  {t('mainabouttext6_2.label')}  
                  <br />
                  <div className="line"></div> 
                  {t('mainabouttext6_3.label')}  
                  <br />
                  <div className="line"></div>
                  {t('mainabouttext6_4.label')}  
                   <br />
                  <br />
                  <div className="line"></div> 
                  {t('mainabouttext6_5.label')}  
                   <br />
                  <div className="line"></div>
                  {t('mainabouttext6_6.label')}  
                  <br />
                  <div className="line"></div> {t('mainabouttext6_7.label')}  <br />
                  <div className="line"></div>
                  {t('mainabouttext6_8.label')}  
                  <br />
                  <div className="line"></div>
                  {t('mainabouttext6_9.label')}  
                  </p>
                   <p>
                   {t('mainabouttext6_10.label')}  
                   </p>
                  
                
              </div>

              <div className="aboutImg">
                <img src="susimg.jpg" alt="teamimg.jpg" height={400} />{" "}
                {/* Image with alt text */}
              </div>
            </div>

            {/* Section for downloading company presentation */}
            <div className="lastAbout">
              <div className="lastimg">
                <img src="" alt="download-cover.png" />{" "}
                {/* Image with alt text */}
              </div>

              <div className="textlast">
                <Link to="/" className="navbar-logo">
                  <img src="image2.png" alt="image.png" width={80} />
                </Link>{" "}
                {/* Navigation link */}
                <p>{t('mainabouttext7.label')}  </p>
                <a href="/path-to-your-file-1" download>
                  <NavbarButton title={t('mainaboutbutton.label')} /> {/* Custom button component */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export { IncomPage }; // Export the IncomPage component for use in other parts of the application
