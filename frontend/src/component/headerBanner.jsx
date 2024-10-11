import "./headerBanner.css"; // Importing CSS styles for the header banner
import { useRef } from 'react'; // Import useRef to reference the video element
import { useTranslation } from "react-i18next";

function Responsive() {
  const { t } = useTranslation();

  const videoRef = useRef(null); // Create a ref for the video element

  const handleInteraction = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute the video
    }
  };

  return (
    <div className="video-background" onClick={handleInteraction}>
      <video ref={videoRef} autoPlay muted loop className="background-video">
        <source src="headerbannerbackground.mp4" type="video/mp4" className="video" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>{t("With13YearsExperienceinFlexiblePackaging.label")}</h1>
        <h1>{t("DOYPACKYourReliablePackagingSupplier.label")}</h1>
      </div>
    </div>
  );
}

export { Responsive }; // Exporting the Responsive component
