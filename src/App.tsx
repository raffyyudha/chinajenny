import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import DynamicLanding from './pages/DynamicLanding';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* PSEO ROUTES */}
                    {/* Pattern: /sg/[service-slug]/[location-slug] */}
                    <Route path="/sg/:service/:location" element={<DynamicLanding />} />

                    {/* Fallback to Home or 404 */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
};

export default App;
