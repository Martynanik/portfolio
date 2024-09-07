import React, {useState} from "react";
import {useTranslation} from "react-i18next";

const Work = () =>{
    const { t } = useTranslation('work');

    return(
        <div className="d-flex flex-column align-items-end grow-3 gap-5 mt-4">
            <a style={{color: 'white', textDecoration: "none"}} href="https://chatify-front-ecru.vercel.app/"
               target="_blank" rel="noopener noreferrer" className="d-flex justify-content-end">
                <h1 className="hover">{t('chat')}</h1>
            </a>
            <a style={{color: 'white', textDecoration: "none"}} href="https://martynanik.github.io/Ticket-booking-app/"
               target="_blank" rel="noopener noreferrer" className="d-flex justify-content-end">
                <h1 className="hover">{t('ticket')}</h1>
            </a>

            <a style={{color: 'white', textDecoration: "none"}} href="https://martynanik.github.io/tamagotchi-game/"
               target="_blank" rel="noopener noreferrer" className="d-flex justify-content-end">
                <h1 className="hover">{t('tamagotchi')} </h1>
            </a>

            <a style={{color: 'white', textDecoration: "none"}} href="https://github.com/Martynanik/plant-game"
               target="_blank" rel="noopener noreferrer" className="d-flex justify-content-end">
                <h1 className="hover">{t('plant')}</h1>
            </a>

            <a style={{color: 'white', textDecoration: "none"}} href="https://github.com/Martynanik/recipe-fetching-app"
               target="_blank" rel="noopener noreferrer" className="d-flex justify-content-end">
                <h1 className="hover">{t('recipe')}</h1>
            </a>
        </div>
    )
}

export default Work
