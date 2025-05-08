import React from 'react';
import './App.css';
import Hero from './components/pages/Hero';
import WelcomeSection from './components/pages/WelcomeSection';
// import ContactSection from './components/pages/ContactSection';
import ExperienceSection from './components/pages/ExperienceSection';

function App() {
    return (
        <section > 
            <Hero />
            <WelcomeSection />
            {/* <ContactSection /> */}
            <ExperienceSection/>
        </section>
    );
}

export default App;
