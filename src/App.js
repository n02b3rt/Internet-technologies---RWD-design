import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import TypeOfBonsai from "./pages/TypeOfBonsai/TypeOfBonsai";
import Header from "./components/Header/HeaderPC/Header";
import HeaderMobile from "./components/Header/HeaderMobile/MobileHeader";
import Footer from "./components/Footer/Footer";
import Gallery from "./pages/Gallery/Gallery";

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1025);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Router>
            {isMobile ? <HeaderMobile /> : <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Type-Of-Bonsai" element={<TypeOfBonsai />} />
                <Route path="/Gallery" element={<Gallery />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
