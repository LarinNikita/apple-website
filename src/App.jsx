import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Modal from './components/Modal'
import Features from './components/Features'
import { HowItWorks } from './components/HowItWorks'

const App = () => {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <Highlights />
            <Modal />
            <Features />
            <HowItWorks />
        </main>
    )
}

export default App
