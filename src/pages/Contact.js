import React, {useState} from "react";
import {useTranslation} from "react-i18next";



const Contact = () =>{
    const { t } = useTranslation('contact');

    const navigateToEmail = () => {
        window.location.href = 'mailto:mniksaite@gmail.com?subject=Job%20Offer&body=Hello!%20We%20are%20interested%20in%20hiring%20you!';
    };

    return(
        <div className="d-flex  flex-column align-items-end grow-3 mt-4 gap-3 font-size-20">
            <div className="d-flex  flex-column align-items-end">
                <div className="text-end">
                    {t('contactQuestion')}
                </div>
                <div className=" d-flex align-items-sm-start justify-content-md-end "> {t('reachOut')}
                </div>
            </div>

            <div className="d-flex mt-3" onClick={navigateToEmail} style={{cursor: "pointer"}}>mniksaite@gmail.com <span
                className="d-flex align-items-center justify-content-center" style={{fontSize: "10px"}}>↗</span>
            </div>

            <a style={{color: 'white', textDecoration: "none"}} href="https://github.com/Martynanik/Martynanik"
               target="_blank" rel="noopener noreferrer" className="d-flex">
                Github
                <span className="d-flex align-items-center justify-content-center" style={{fontSize: "10px"}}>↗</span>
            </a>

            <a style={{color: 'white', textDecoration: "none"}} href="https://www.linkedin.com/in/martyna-nik%C5%A1ait%C4%97-09b324250/"
               target="_blank" rel="noopener noreferrer" className="d-flex">
                LinkedIn
                <span className="d-flex align-items-center justify-content-center" style={{fontSize: "10px"}}>↗</span>
            </a>

            <div className="text-end">+37068782339 </div>

        </div>
    )
}

export default Contact
