import { CompanyCards } from "./companyCards"; // Import the CompanyCards component
import "./mainCompany.css"; // Import the CSS file for styling
import { NavbarButton } from "./navbarButton"; // Import the NavbarButton component
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Sample data for the first set of company cards
const cardsData = [
  {
    id: 1,
    img: "hourglass.svg", // Image file for the card
    head: "cards1heading.label", // Heading for the card
    pragh: "cards1text.label", // Paragraph text for the card
  },
  {
    id: 2,
    img: "team.svg", // Image file for the card
    head: "cards3heading.label", // Heading for the card
    pragh:
      "cards3text.label", // Paragraph text for the card
  },
];

// Sample data for the second set of company cards
const data = [
  {
    id: 3,
    img: "product-development.svg", // Image file for the card
    head: "cards2heading.label", // Heading for the card
    pragh: "cards2text.label", // Paragraph text for the card
  },
  {
    id: 4,
    img: "growth.svg", // Image file for the card
    head: "cards4heading.label", // Heading for the card
    pragh: "cards4heading.label", // Paragraph text for the card
  },
];

// Define the MainCompany component
const MainCompany = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Container for the main section of the company */}
      <div className="itemsContainer mainItem">
        <div className="mainText">
          {/* Main heading for the company section */}
          <h2>{t("Company.label")}</h2>
          {/* Subheading describing the company's leadership in packaging */}
          <h3>{t("companyHeading.label")}</h3>
          {/* Paragraph describing the company's products and commitment */}
          <p>
          {t("companytext.label")}
            <br />
            <br />
            {t("Companytext2.label")}
            <br />
            <br />
            {/* Render NavbarButton with the title prop */}
            <Link to="/about">
              <NavbarButton title={t("button.label")} />
            </Link>
          </p>
        </div>
        <div className="companyCards">
          {/* Render the first set of company cards */}
          <div className="cardsItem">
            {cardsData.map((card) => (
              <CompanyCards
                key={card.id} // Unique key for each card
                img={card.img} // Image for the card
                head={card.head} // Heading for the card
                pragh={card.pragh} // Paragraph text for the card
              />
            ))}
          </div>
          {/* Render the second set of company cards */}
          <div className="cardsItem">
            {data.map((item) => (
              <CompanyCards
                key={item.id} // Unique key for each card
                img={item.img} // Image for the card
                head={item.head} // Heading for the card
                pragh={item.pragh} // Paragraph text for the card
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Export the MainCompany component for use in other parts of the application
export { MainCompany };
