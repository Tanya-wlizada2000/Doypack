import "./productheader.css";
import { useTranslation } from "react-i18next";
const DetailsHeader = () =>{
    const { t } = useTranslation();
    return(<>
    
     <div className="container">
        <div className="itemsContainer">
            <div className="headerText">
                <div className="detailsText">
                <h1>{t("StandUpPouch.label")}</h1>
                </div>
             
            </div>
        </div>
     </div>
    
    </>)
}

export {DetailsHeader};

const DetailsecHeader = () =>{
    const { t } = useTranslation();
    return(<>
    
     <div className="container">
        <div className="itemsContainer">
            <div className="headerText">
                <div className="detailsText">
                <h1>{t("SpoutPouch.label")}</h1>
                </div>
               
                
            </div>
        </div>
     </div>
    
    </>)
}

export {DetailsecHeader};

const DetailthirdHeader = () =>{
    const { t } = useTranslation();
    return(<>
    
     <div className="container">
        <div className="itemsContainer">
            <div className="headerText">
                <div className="detailsText">
                <h1>{t("GussetedPouch.label")}</h1>
                </div>
                
                
            </div>
        </div>
     </div>
    
    </>)
}

export {DetailthirdHeader};

const DetailfourHeader = () =>{
    const { t } = useTranslation();
    return(<>
    
     <div className="container">
        <div className="itemsContainer">
            <div className="headerText">
                <div className="detailsText">
                <h1>{t("RollFilm.label")}</h1>
                </div>
                
                
            </div>
        </div>
     </div>
    
    </>)
}

export {DetailfourHeader};


const DetailfiveHeader = () =>{
    const { t } = useTranslation();
    return(<>
    
     <div className="container">
        <div className="itemsContainer">
            <div className="headerText">
                <div className="detailsText">
                <h1>{t("ShapedAndTransparent.label")}</h1>
                </div>
               
                
            </div>
        </div>
     </div>
    
    </>)
}

export {DetailfiveHeader};