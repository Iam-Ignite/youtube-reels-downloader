import Image from "next/image";
import React from 'react';
import Banner from './components/Banner';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Banner />
      <HowItWorks />
      <Features />
      <FAQ />
      <Footer />
    </>
  );
}
