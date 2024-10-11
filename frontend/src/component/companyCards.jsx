import "./mainCompany.css";
import { useTranslation } from "react-i18next";
const CompanyCards =({img,head,pragh})=>{
  const { t } = useTranslation();
    return(<>
      <div className="cards">
        <div className="company-img">
          <img src={img} alt="Company"/>
        </div>
        <div className="company-details">
          <h2>{t(head)}</h2>
          <p>{t(pragh)}</p>
        </div>
      </div>

    
    </>)
}


export {CompanyCards};