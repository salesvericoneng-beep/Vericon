import React from 'react';
import Hero from '../components/home/Hero';
import Ticker from '../components/home/Ticker';
import About from '../components/home/About';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Industries from '../components/home/Industries';
import Workflow from '../components/home/Workflow';
import BottomSection from '../components/home/BottomSection';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Ticker />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Workflow />
      <BottomSection />
      <CTA />
    </div>
  );
}
