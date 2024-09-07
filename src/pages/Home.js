import React, {useState} from "react";
import {useTranslation} from "react-i18next";


const Home = () =>{
    const { t } = useTranslation('home');

    return(
        <div className="d-flex  justify-content-end grow-3 mt-4 font-size-20 ">
            <div className="w-75 d-flex  flex-column gap-3 ">
                <div>
                    {t('first')}
                </div>
               <div>
                   {t('second')}
               </div>
            </div>
        </div>
    )
}

export default Home