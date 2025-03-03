// Import necessary components and icons
import { ProAdvan } from "./component/proAdvan";
import { ProductCarts } from "./component/productCarts";
import { Footer } from "./footer";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { Navbar } from "./component/navBar";
import { DetailfourHeader } from "./component/detailsheader";
import { database } from "./db";
import { useTranslation } from "react-i18next";



// Functional component for the Service1 page
const Service4Page = () => {

  const { t } = useTranslation();
  // Function to scroll to the top of the page with a smooth scrolling effect
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling effect
    });
  };

  const getObjects = () => {
    return database.slice(startIndex, endIndex);
  };

  let startIndex = 23;
  let endIndex = 31;
  const result = getObjects(database, startIndex, endIndex);


  return (
    <>
      {/* Render the Header component at the top of the page */}
      <Navbar />
      < DetailfourHeader/>


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
                background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 9, 121, 1) 0%, rgba(0, 212, 255, 1) 100%)",
              }}
            />
          </a>

          <Link to="/Contact"><IoCallOutline  size={50} style={{
        
        position: "fixed",
        bottom: "80px",
        right: "20px",
        zIndex: 99,
        cursor: "pointer",
        padding: "10px",
        borderRadius: "50%",
        color: "white",
        background:"  #e5750f",
        
      }}/></Link>

          {/* Container for displaying product carts */}
          <div className="cartspro">
            {result.map((cart) => (
              // Map through the carts array and render a ProductCarts component for each item
              <ProductCarts
                key={cart.id} // Use id as the unique key for each item
                id={cart.id}
                cart={cart}
                heading={cart.heading}
                image={cart.image}
                dis={cart.dis}
              />
            ))}
          </div>

          {/* Description section with inline styling */}
          <div
            style={{
              maxWidth:"1440px",
              margin: "20px auto",
              textAlign: "start",
              fontSize: "16px",
              fontWeight: "400",
              padding: "30px",
              color: "#6d6d6d",
              display:"flex",
              justifyContent:"space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <p>
            {t("proText1.label")}
              </p>
              
              <p>
              {t("proText2.label")}
            </p>
          </div>

          {/* Render the ProAdvan component */}
          <ProAdvan />
        </div>
      </div>

      {/* Render the Footer component at the bottom of the page */}
      <Footer />
    </>
  );
};

// Export the Service1Page component to be used in other parts of the application
export { Service4Page };
