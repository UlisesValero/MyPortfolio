import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Hero from './components/pages/Hero';
import Welcome from './components/pages/Welcome';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/pages/Footer';
import Cards from './components/pages/Cards';
import AnimationForPages from './lib/AnimationForPages';

function App() {
    const location = useLocation();

    useEffect(() => {
        let sectionId = 'hero';
        if (location.pathname === '/about') sectionId = 'about';
        else if (location.pathname === '/contact') sectionId = 'contact';
                else if (location.pathname === '/') sectionId = 'app';


        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.pathname]);

    return (
        <main className='h-full' id='app'>
            <div id="hero" className='bg-theme'>
                <Hero />
                <AnimationForPages>
                    <Welcome />
                </AnimationForPages>
            </div>

            <div id="about" className='bg-bgL dark:bg-bgD transition-all duration-300'>
                <AnimationForPages>
                    <About />
                </AnimationForPages>
                <AnimationForPages>
                    <Cards />
                </AnimationForPages>
            </div>

            <div id="contact" className='bg-theme'>
                <AnimationForPages>
                    <Contact />
                </AnimationForPages>
                <div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}

export default App;
