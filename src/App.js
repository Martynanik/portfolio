import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import FadingScreen from "./components/FadingScreen";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import FAQ from "./pages/FAQ";
import './i18n';
function App() {
    const [showFadingScreen, setShowFadingScreen] = useState(true);
    const handleSplashFinish = () => {
        setShowFadingScreen(false)
    };
    return (
        <div >
            <BrowserRouter >
                {showFadingScreen ? (
                    <FadingScreen onFinish={handleSplashFinish}/>
                ) : (
                    <div className="back  ">
                        <div className="border-wrapper">
                            <div className="gif">
                                <Logo></Logo>
                                <div className="d-flex gap-2">
                                    <Toolbar />
                                    <Routes >
                                        <Route path="/about" element={<About/>}/>
                                        <Route path="/contact" element={<Contact/>}/>
                                        <Route path="/work" element={<Work/>}/>
                                        <Route path="/" element={<Home/>}/>
                                        <Route path="/faq" element={<FAQ/>}/>
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
