export default function Navbar() {
    return (
        <>
            <section id="navbar" className="bg-background h-16 top-0 w-full">
                <nav className="hidden md:flex main">
                    <div className="flex items-center justify-between w-full mx-auto h-full">
                        <div className="flex items-center font-serif w-full h-full">
                            <a href="#home" className="flex items-center text-foreground px-4 lg:px-6 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                Home
                            </a>
                            <a href="#about" className="flex items-center text-foreground px-4 lg:px-6 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                About
                            </a>
                            <a href="#schedule" className="flex items-center text-foreground px-4 lg:px-6 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                Schedule
                            </a>
                            <a href="#speakers" className="flex items-center text-foreground px-4 lg:px-6 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                Speakers
                            </a>
                            <a href="#sponsors" className="flex items-center text-foreground px-4 lg:px-6 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                Sponsors
                            </a>
                            <a href="#contact" className="flex items-center text-foreground px-4 lg:px-6 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                Contact
                            </a>
                        </div>
                        <div className="flex items-center space-x-4 h-full font-serif">
                            <a href="#rsvp" className="flex items-center text-foreground px-4 lg:px-6 font-bold h-full hover:bg-highlight-dark hover:text-background ease-in-out duration-200">
                                RSVP
                            </a>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}