import React from 'react';
import './App.css';
import Hero from './components/pages/Hero';
import WelcomeSection from './components/pages/WelcomeSection';
import ContactSection from './components/pages/ContactSection';
import ExperienceSection from './components/pages/ExperienceSection';
import HobbiesSection from './components/pages/HobbiesSection';
import FooterSection from './components/pages/FooterSection';

function App() {
    return (
        <section >
            <div className='bg-theme '>
                <Hero />
                <WelcomeSection />
            </div>

            <div className='bg-bgL dark:bg-bgD'>
                <ExperienceSection />
                <ContactSection />
                <HobbiesSection />
                <FooterSection />
            </div>
        </section>
    );
}

export default App;
