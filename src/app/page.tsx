"use client";
import 'react-toastify/dist/ReactToastify.css';

import {
  Fragment,
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ToastContainer } from 'react-toastify';

import About from './components/aboutus/About';
import Contact from './components/contactus/Contact';
import Cta from './components/cta/Cta';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import Hero from './components/herosection/Hero';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Statistics from './components/statistics/Statistics';
import Testinomials from './components/testinomials/Testinomials';
import WhyChooseUs from './components/whychooseus/WhyChooseUs';
import Loading from './loading.js';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log({ loading });

    setLoading(false);
  }, []);

  return (
    <>
      {!loading ? (
        <Fragment>
          <main>
            <Head>
              <title>Care Physio Link</title>
              <link rel="canonical" href="https://www.carephysio.in/" />
              <link rel="canonical" href="https://www.carephysio.in/founder" />
            </Head>
            <Navbar />
            <ToastContainer />
            <Hero />
            <About />
            <WhyChooseUs />
            <Statistics />
            <Services />
            <Testinomials />
            <Contact />
            <ParallaxProvider scrollAxis="vertical">
              {/* <ContactSection /> */}
              <Cta />
              <Faq />
              <Footer />
            </ParallaxProvider>
          </main>
        </Fragment>
      ) : (
        <Loading />
      )}
    </>
  );
}
