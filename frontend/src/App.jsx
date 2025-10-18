import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import ServicesSection from './Components/ServiceSection'
import ExperienceSection from './Components/ExperienceSection'
import Footer from './Components/Footer'
import ContactSection from './Components/Contact'
import OperatingHours from './Components/OperatingHours '
import Preloader from './Components/PreLoader'

function App() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate loading time (you can replace this with real data loading)
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);

    if(loading) return <Preloader/>


  return (
    <>
    {/* <Preloader/> */}
      <div className="main-container">
        <Navbar />

        {/* Sections with IDs for scrolling */}
        <section id="home">
          <Home />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="about">
          <ExperienceSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <section id="hours">
          <OperatingHours />
        </section>

        <Footer />
      </div>
 
    
    </>
  )
}

export default App
