import React from "react";
import Header from "../../../layout/Header";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import SocialProofSection from "../components/SocialProofSection";
import CallToActionSection from "../components/CallToActionSection";
import ContactSection from "../components/ContactSection";
import Footer from "../../../layout/Footer";

import "../styles/landing.css";

function LandingPage() {
  return (
    <div className="landingContainer">
      <Header landing={true} />
      <HeroSection />
      <BenefitsSection />
      <SocialProofSection />
      <CallToActionSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
