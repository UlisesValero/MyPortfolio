import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/pages/Hero';
import Welcome from './components/pages/Welcome';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Footer from './components/pages/Footer';
import Cards from './components/pages/Cards';
import AnimationForPages from './lib/AnimationForPages';
import Stack from './components/pages/Stack';

function App() {
    const [isFooterVisible, setIsFooterVisible] = useState(false)

    useEffect(() => {
        let sectionId = window.location.href.split('#')[1]
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    })
    return (
        <main className='h-full' id='app'>
            <div id="hero" className='bg-theme'>
                <Hero />
                <AnimationForPages>
                    <Welcome isFooterVisible={isFooterVisible} />
                </AnimationForPages>
            </div>

            <div id="projects" className='bg-bgL dark:bg-bgD transition-all duration-300 flex flex-col gap-y-60'>
                <AnimationForPages><Projects /></AnimationForPages>
                <AnimationForPages><Stack /></AnimationForPages>
                <AnimationForPages><Cards /></AnimationForPages>
            </div>

            <div id="contact" className='flex flex-col justify-between bg-theme2'>
                <AnimationForPages><Contact /></AnimationForPages>
                <div>
                    <Footer setIsFooterVisible={setIsFooterVisible} />
                </div>
            </div>
        </main>
    )
}

export default App
