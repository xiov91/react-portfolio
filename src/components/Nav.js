import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';


const Nav = () => {

    return (
        <div className="hero-section home-page-hero wf-section bg-lime-200">
                <div>
                    <a href="/" element={<Home />} className="project-title text-8xl px-5 hover:text-slate-500">ZEE VIROLA</a>
                </div>
                <div className="w-container flex justify-end">
                    <nav role="navigation" className="nav-menu w-nav-menu text-4xl">
                        <a href="/about" element={<About />} className="nav-link w-nav-link hover:text-lime-500 px-4">About</a>
                        <a href="/portfolio" element={<Portfolio />} className="nav-link w-nav-link hover:text-lime-500 px-4">Portfolio</a>
                        <a href="/resume" element={<Resume />} className="nav-link w-nav-link hover:text-lime-500 px-4">Resume</a>
                        <a href="/contact" element={<Contact />} className="nav-link contact w-nav-link hover:text-lime-500 px-4">Contact</a>
                    </nav>
                </div>
        </div>
    );
};

export default Nav;