"use client";
import React from "react";
import Topbar from "./components/topbar/TopBar";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Publishing from "./components/publishing/Publishing";
import IntroExperience from "./components/intro/IntroExperience";
import Skills from "./components/skill/Skills";

const ClientApp: React.FC = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <Topbar />
      <main className="flex-1 flex flex-col p-8">
        {/* Sezione introduttiva personale */}
        <Intro />

        {/* Sezioni Tirocini + Collaborazioni affiancate */}
        <section className="py-12">
          <div className="container mx-auto flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <IntroExperience type="internships" />
            </div>
            <div className="flex-1">
              <IntroExperience type="collaborations" />
            </div>
          </div>
        </section>
        <Publishing />

        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ClientApp;
