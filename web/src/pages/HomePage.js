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
                <title>CaptiOCR - Meeting Transcription & Minutes Software | Free Audio to Text</title>
                <meta name="description" content="Best software for meeting transcription and minutes. Generate automated meeting notes, call transcription, and webinar transcription with CaptiOCR. Free audio to text converter with complete privacy." />
                <meta name="keywords" content="meeting transcription, meeting minutes, call transcription, webinar transcription, audio to text, automated meeting notes, meeting notes generator, real-time captions, automatic meeting minutes generator for Zoom Teams, secure call transcription for business" />
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