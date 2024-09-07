import React, {useState} from "react";
import {useTranslation} from "react-i18next";

const FAQ = () =>{
    const { t } = useTranslation('faq');

    return(
        <div className="faq-container">
            <div className="d-flex justify-content-end text-end grow-3 mt-4 font-size-20 height overflowFAQ  ">
                <div className="d-flex flex-column gap-5 w-75 justify-content-end overflow  ">
                    <div>
                        <div className="fw-bold">
                            {t('questionOne')}
                        </div>
                        <div>
                            {t('answerOne')}
                        </div>
                    </div>

                    <div>
                        <div className="fw-bold">
                            {t('questionTwo')}
                        </div>
                        <div>
                            {t('answerTwo')}
                        </div>
                    </div>

                    <div>
                        <div className="fw-bold">
                            {t('questionThree')}
                        </div>
                        <div> {t('answerThree')} <a
                            style={{color: 'white'}}
                            href="https://github.com/Martynanik/Martynanik"
                            target="_blank"
                            rel="noopener noreferrer"> {t('link')}</a>.
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default FAQ