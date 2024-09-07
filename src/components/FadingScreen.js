import React, {useState} from "react";
import {animated, useSpring} from "@react-spring/web";

const FadingScreen = ({ onFinish }) =>{
    const props = useSpring({
        to: {opacity: 0},
        from: {opacity: 1},
        delay: 1000,
        onRest: () => onFinish()
    });

    return(
        <div className="d-flex align-items-center justify-content-center back">
            <animated.div style={props}>
                <h1>Welcome to My Website</h1>
            </animated.div>
        </div>
    )
}

export default FadingScreen


