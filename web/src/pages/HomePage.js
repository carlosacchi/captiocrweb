import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>CaptiOCR - Real-Time Screen Live Captions Saving Tool</title>
                <meta name="description" content="Generate real-time captions and automatic transcripts with CaptiOCR. Boost productivity while protecting your privacy." />
                <link rel="canonical" href="https://www.captiocr.com/" />
            </Helmet>
            
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <CTASection />
        </>
    );
}