import React from 'react';
import './App.css';
import Hero from './components/pages/Hero';
import WelcomeSection from './components/pages/WelcomeSection';
// import ContactSection from './components/pages/ContactSection';
import ExperienceCards from './components/ui/ExperienceCards'

function App() {
    return (
        <section > 
            <Hero />
            <WelcomeSection />
            {/* <ContactSection /> */}
            <ExperienceCards/>
        </section>
    );
}

export default App;
