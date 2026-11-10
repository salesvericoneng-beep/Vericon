import React from 'react';
import SEO from '../components/SEO';
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
      <SEO 
        title="MEP Contractors in Hyderabad | Turnkey HVAC, Fire &amp; Electrical | VERICON"
        description="VERICON Engineering is a premier turnkey MEP contracting firm serving Telangana &amp; Andhra Pradesh. Turnkey HVAC, Electrical, Fire Protection, PHE, AMC &amp; Energy Audits."
        keywords="MEP contractors Hyderabad, MEP contracting company Hyderabad, MEP services Hyderabad, MEP turnkey contractors, Commercial refrigeration equipment, MEP & interior turnkey execution, Industrial plant fabrication and erection, Chemical and pharmaceutical plant engineering, Commercial MEP contractors, Industrial MEP contractors, MEP design and build contractors, MEP installation services, MEP maintenance services, Building services engineering, Turnkey engineering solutions, MEP contractors Madhapur, MEP contractors HITEC City, MEP contractors Gachibowli, MEP contractors Telangana, MEP contractors Andhra Pradesh, MEP contractors Visakhapatnam, MEP contractors Vijayawada"
        canonical="https://www.vericon.in/"
      />
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
