import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CaptionTranscriberPage from './pages/CaptionTranscriberPage';
import LiveCaptionReaderPage from './pages/LiveCaptionReaderPage';
import MeetingTranscriberPage from './pages/MeetingTranscriberPage';
import DataSovereigntyPage from './pages/DataSovereigntyPage';
import './App.css';

function App() {
    // Load GitHub version script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/js/version.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <Router>
            <div className="App min-h-screen bg-gray-50">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/caption-transcriber" element={<CaptionTranscriberPage />} />
                        <Route path="/live-caption-reader" element={<LiveCaptionReaderPage />} />
                        <Route path="/meeting-transcriber" element={<MeetingTranscriberPage />} />
                        <Route path="/data-sovereignty" element={<DataSovereigntyPage />} />
                        {/* Fallback for any unmatched routes */}
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;