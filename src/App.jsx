import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { scroll } from './lib/utils'
import Hero from './components/pages/Hero'
import Welcome from './components/pages/Welcome'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import Footer from './components/pages/Footer'
import Cards from './components/pages/Cards'
import AnimationForPages from './lib/AnimationForPages'
import Stack from './components/pages/Stack'
import './App.css'

function App() {
    const [isFooterVisible, setIsFooterVisible] = useState(false)
    const location = useLocation()

    useEffect(() => {
        let sectionId = "hero"
        if (location.pathname === "/projects") sectionId = "projects"
        if (location.pathname === "/contact") sectionId = "contact"
        if (location.pathname === '/') {
            scroll()
        }
        const section = document.getElementById(sectionId)
        if (section) {
            scroll(sectionId)
        }
    }, [location.pathname])

    return (
        <>
            <Hero />
            <main className='h-full relative z-0' id='app'>
                <div id="hero" className='bg-theme theme-animation'>
                    <AnimationForPages>
                        <Welcome isFooterVisible={isFooterVisible} />
                    </AnimationForPages>
                </div>

                <div id="projects" className='bg-bgL dark:bg-bgD theme-animation flex flex-col gap-y-60'>
                    <AnimationForPages><Projects /></AnimationForPages>
                    <AnimationForPages><Stack /></AnimationForPages>
                    <AnimationForPages><Cards /></AnimationForPages>
                </div>

                <div id="contact" className='flex flex-col justify-between bg-theme2 theme-animation'>
                    <AnimationForPages><Contact /></AnimationForPages>
                    <Footer setIsFooterVisible={setIsFooterVisible} />
                </div>
            </main>
        </>
    )
}

export default App
