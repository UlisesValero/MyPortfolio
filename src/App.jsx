import React from 'react';
import './App.css';
import Hero from './components/pages/Hero';
import Welcome from './components/pages/Welcome';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/pages/Footer';
import Cards from './components/pages/Cards';

function App() {
    return (
        <section className='h-full' >
            <div className='bg-theme'>
                <Hero />
                <Welcome />
            </div>

            <div className='bg-bgL dark:bg-bgD py-100 flex flex-col gap-100'>
                <Cards/>
                <About />
            </div>
            <div className='bg-theme'>
                <Contact />
                <Footer />
            </div>
        </section>
    );
}

export default App;
