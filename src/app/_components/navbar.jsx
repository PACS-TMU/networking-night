"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

export default function Navbar() {
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home', path: '#home' },
        { id: 2, text: 'About', path: '#about' },
        { id: 3, text: 'Agenda', path: '#agenda' },
        { id: 4, text: 'Panelists', path: '#panel' },
        { id: 5, text: 'Contact', path: '#contact' },
        { id: 6, text: 'RSVP', path: '#rsvp' }
    ];

    return (
        <>
            <section id="navbar" className="bg-background h-16 top-0 w-full">
                <nav className="hidden md:flex main">
                    <div className="flex items-center justify-between w-full mx-auto h-full">
                        <div className="flex md:text-lg lg:text-xl items-center font-sans w-full h-full">
                            <a href="#home" className="flex items-center text-foreground px-4 lg:px-8 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                Home
                            </a>
                            <a href="#about" className="flex items-center text-foreground px-4 lg:px-8 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                About
                            </a>
                            <a href="#agenda" className="flex items-center text-foreground px-4 lg:px-8 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                Agenda
                            </a>
                            <a href="#panel" className="flex items-center text-foreground px-4 lg:px-8 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                Panelists
                            </a>
                            <a href="#contact" className="flex items-center text-foreground px-4 lg:px-8 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                Contact
                            </a>
                        </div>
                        <div className="flex items-center space-x-4 h-full font-sans">
                            <a href="#rsvp" className="flex md:text-lg lg:text-xl items-center text-foreground px-4 lg:px-8 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                RSVP
                            </a>
                        </div>
                    </div>
                </nav>

                <div onClick={handleNav} className='flex justify-between items-center h-full px-4 md:hidden'>
                    <div className="flex flex-row items-center">
                        <Image
                            src="/images/usstm-logo.png"
                            alt="USSTM Logo"
                            width={200}
                            height={200}
                            className="w-[12%] h-auto"
                        />
                        <h1 className="font-sans pl-1 pr-2">
                            X
                        </h1>
                        <Image
                            src="/images/pacs-logo.png"
                            alt="PACS Logo"
                            width={200}
                            height={200}
                            className="w-[15%] h-auto"
                        />
                    </div>
                    {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[75%] h-full bg-highlight-dark ease-in-out duration-500 z-50'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='flex items-center justify-center px-4 py-8 border-b cursor-pointer text-background hover:bg-highlight-light hover:text-foreground ease-in-out duration-300'
                        >
                            <a
                                href={item.path}
                                className="text-lg w-full h-full text-center" onClick={handleNav}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}