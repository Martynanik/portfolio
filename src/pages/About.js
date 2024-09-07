import React, {useState} from "react";
import {useTranslation} from "react-i18next";



const About = () =>{
    const { t } = useTranslation('about');

    return(
        <div className="d-flex justify-content-end grow-3 mt-4 height  overflow ">

            <div className="timeline-responsive">
                <div className="timeline">
                    <div className="container left">
                        <div className="content d-flex flex-column align-items-start ">
                            <div>{t('institutionOne')}</div>
                            <div className="font-family-2" style={{fontSize: "10px", color: "grey"}}>{t('positionOne')}</div>
                            <p className="font-family-2" style={{fontSize: "10px", color: "grey"}}> 2019-2023</p>
                            <div className="font-family-2" style={{fontSize: "10px"}}>
                                ▪ {t('universityOne')} <br/>
                                ▪ {t('universityTwo')}
                            </div>
                        </div>
                    </div>
                    <div className="container left">
                        <div className="content d-flex flex-column align-items-start ">
                            <div>{t('institutionTwo')}</div>
                            <div className="font-family-2" style={{fontSize: "10px", color: "grey"}}>{t('positionTwo')}</div>
                            <p className="font-family-2" style={{fontSize: "10px", color: "grey"}}> 2021-2022</p>
                            <div className="font-family-2" style={{fontSize: "10px"}}>
                                • {t('girileOne')} <br/>
                                • {t('girileTwo')} <br/>
                                • {t('girileThree')}
                            </div>
                        </div>
                    </div>
                    <div className="container left">
                        <div className="content d-flex flex-column align-items-start ">
                            <div>{t('institutionThree')}</div>
                            <div className="font-family-2" style={{fontSize: "10px", color: "grey"}}>
                                {t('positionThree')}
                            </div>
                            <p className="font-family-2" style={{fontSize: "10px", color: "grey"}}>2022-2023</p>
                            <div className="font-family-2" style={{fontSize: "10px"}}>
                                • {t('swedbankOne')} <br/>
                                • {t('swedbankTwo')}<br/>
                                • {t('swedbankThree')}<br/>
                                • {t('swedbankFour')}<br/>
                                • {t('swedbankFive')}<br/>
                                • {t('swedbankSix')}
                            </div>
                        </div>
                    </div>
                    <div className="container left">
                        <div className="content d-flex flex-column align-items-start ">
                            <div>Code Academy</div>
                            <div className="font-family-2" style={{fontSize: "10px", color: "grey"}}>
                                Junior front-end developer course
                            </div>
                            <p className="font-family-2" style={{fontSize: "10px", color: "grey"}}>2023/02-2023/09</p>
                            <div className="font-family-2" style={{fontSize: "10px"}}>
                                • {t('courseOne')} <br/>
                                • {t('courseTwo')} <br/>
                                • {t('courseThree')}  <br/>
                                • {t('courseFour')} <br/>
                                • {t('courseFive')} <br/>
                                • {t('courseSix')}  <br/>
                                • {t('courseSeven')}  <br/>
                                • {t('courseEight')}  <br/>
                                • {t('courseNine')}   <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
