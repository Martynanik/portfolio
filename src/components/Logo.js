import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Logo = () =>{

    const { t } = useTranslation('logo');
    const nav= useNavigate()
    return(
        <div className="d-flex  justify-content-start ">
            <div className="d-flex flex-column">
                <div onClick={()=> nav("/")} className="logo">
                    Martyna Nikšaitė
                </div>
                <div className="logo-undertext">
                    {t('position')}
                </div>
            </div>
        </div>
    )
}

export default Logo