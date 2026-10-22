import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>CaptiOCR - Free Live Caption Transcriber for Windows &amp; macOS</title>
                <meta
                    name="description"
                    content="Free, open-source app for Windows and macOS that turns live captions from Teams, Zoom and Google Meet into private transcripts. 100% local OCR: no cloud, no bot, no account."
                />
                <link rel="canonical" href="https://www.captiocr.com/" />
            </Helmet>
            
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
        </>
    );
}