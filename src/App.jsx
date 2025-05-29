import React from 'react';
import './App.css';
import Hero from './components/pages/Hero';
import Welcome from './components/pages/Welcome';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/pages/Footer';

function App() {
    return (
        <section >
            <div className='bg-theme'>
                <Hero />
                <Welcome />
            </div>

            <div className='bg-bgL dark:bg-bgD'>
                <About />
                <Contact />
                <Footer />

            </div>
        </section>
    );
}

export default App;
