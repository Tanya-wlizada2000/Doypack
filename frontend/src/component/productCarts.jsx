import "./product.css"; // Importing the CSS file for styling the ProductCarts component
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation
import { useTranslation } from "react-i18next";

// ProductCarts component for displaying individual product cards
const ProductCarts = ({ heading, pragh, image, id, img1,img2,img3 }) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Link to navigate to the detailed view of the product */}
      <Link to={`/detailes/${id}`}>
        <div className="productCardsItem">
          {/* Container for the text content of the product card */}
          <div className="cartsText">
            {/* heading for the product */}
            <h2>{t(heading)}</h2>
            {/* Description of the product */}
            <p>{t(pragh)}</p>
          </div>
          {/* Container for the product image */}
          <div className="cartsImg">
            {/* Image of the product */}
            <img src={image} alt="imagecarts" />
          </div>
        </div>
      </Link>
    </>
  );
};

export { ProductCarts }; // Exporting the ProductCarts component for use in other parts of the application
