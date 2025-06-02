import React from 'react';
import './App.css';
import Hero from './components/pages/Hero';
import Welcome from './components/pages/Welcome';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/pages/Footer';
import Cards from './components/pages/Cards';
import AnimationForPages from './lib/AnimationForPages';

function App() {
    return (
        <main className='h-full' >
            <div className='bg-theme'>
                <Hero />
                <AnimationForPages >
                    <Welcome />
                </AnimationForPages>
            </div>

            <div className='bg-bgL dark:bg-bgD transition-all duration-300'>
                <AnimationForPages >
                    <About />
                </AnimationForPages>
                <AnimationForPages>
                    <Cards />
                </AnimationForPages>
            </div>

            <div className='bg-theme '>
                <AnimationForPages>
                    <Contact />
                </AnimationForPages>
                {/* <div className=''>
                <Footer />
                </div> */}
            </div>
        </main>
    );
}

export default App;
