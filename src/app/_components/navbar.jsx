export default function Navbar() {
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
            </section>
        </>
    );
}