import React, {useState} from "react";
import {Link} from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import {useTranslation} from "react-i18next";

const Toolbar= () =>{
    const { t } = useTranslation('toolbar');

    return(
        <div className="d-flex flex-column align-items-start  grow-1  gap-2 mt-4 ">
            <Link className="toolbar-text"  to="/work">{t('work')}</Link>
            <Link className="toolbar-text" to="/about" >{t('about')}</Link>
            <Link className="toolbar-text"  to="/contact">{t('contact')}</Link>
            <Link className="toolbar-text"  to="/faq">{t('faq')}</Link>
            <LanguageSelector ></LanguageSelector>

        </div>
    )

}

export default Toolbar
