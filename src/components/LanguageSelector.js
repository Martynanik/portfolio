import React from "react";
import {useTranslation} from "react-i18next";

const LanguageSelector = ()=> {
    const {i18n} = useTranslation()
    const languages = [
        {code: "en", lang: "EN"},
        {code: "lt", lang: "LT"},
        {code: "se", lang: "SE"},
    ];
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return(
    <div className="d-flex flex-column gap-2">
        {languages.map((lng) => {
            return <div className={lng.code === i18n.language ? "selected toolbar-text" : "toolbar-text"} key={lng.code} onClick={()=> changeLanguage(lng.code)}>{lng.lang}</div>

        })}

    </div>
    )
}

export default LanguageSelector