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
                <title>CaptiOCR - Local-First Meeting Caption Transcription</title>
                <meta
                    name="description"
                    content="Capture live meeting captions and create private transcripts directly on your device. CaptiOCR helps teams document calls without routing content through cloud transcription services."
                />
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