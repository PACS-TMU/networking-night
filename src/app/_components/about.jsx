import Image from "next/image";

export default function About() {
    return (
        <section id="about">
            <div className='main'>
                <h1 className='text-foreground text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide leading-relaxed font-semibold'>
                    About this Event
                </h1>
                <div className="flex flex-col py-4 lg:text-lg font-sans">
                    <div id="detail-box" className="mt-4 lg:mt-8 items-center justify-center mx-auto rounded-md shadow-md text-background bg-highlight-dark w-[80%] grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-[28%_28%_43%]">
                        <div id="date" className="h-full w-full flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-background">
                            <h1 className="font-serif text-2xl lg:text-4xl py-4 tracking-wide">
                                Date
                            </h1>
                            <p className="pb-4 text-center">
                                March 21st, 2024
                            </p>
                        </div>
                        <div id="date" className="h-full w-full flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-background">
                            <h1 className="font-serif text-2xl lg:text-4xl py-4 tracking-wide">
                                Time
                            </h1>
                            <p className="pb-4 text-center">
                                5:30pm - 8:00pm
                            </p>
                        </div>
                        <div id="date" className="h-full w-full flex flex-col items-center justify-center">
                            <h1 className="font-serif text-2xl lg:text-4xl py-4 tracking-wide">
                                Location
                            </h1>
                            <p className="pb-4 text-center">
                                <a
                                    href="https://www.google.com/maps/place/35+Gould+St,+Toronto,+ON+M5B+1E9/@43.6579294,-79.3809976,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb35646082c1:0x8b7186b250df3ed3!8m2!3d43.6579294!4d-79.3784227!16s%2Fg%2F11c5pmd37h?entry=ttu"
                                    target="_blank"
                                    className="text-highlight-light underline hover:text-background transition duration-300 ease-in-out"
                                >
                                    Oakham Lounge, 35 Gould St, Toronto, ON M5B 1E9
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-foreground font-sans w-full lg:text-lg">
                    <p className="text-foreground mt-4">
                        Do you want to learn more about the tech industry? Are you interested in meeting professionals in the field?
                        Join us for Tech Networking Night—an event where students connect with industry professionals, gaining insights and building valuable
                        relationships. Hosted by USSTM and PACS, two student organizations at Toronto Metropolitan University, this is your chance
                        to dive into the tech scene and expand your network. Don&apos;t miss out on this opportunity to kickstart your journey in the world
                        of technology. Save the date and come ready to mingle and learn!
                    </p>
                    <p className="text-foreground mt-4">
                        <span className="text-lg lg:text-xl font-semibold underline">About the Hosts:</span><br /><br /><b>USSTM</b> aims to enhance the student experience 
                        within the Faculty of Science. USSTM is dedicated to fostering a supportive community that prioritizes academic excellence, social 
                        engagement, and professional development.<br /><br /><b>PACS</b> is focused on elevating the academic and career prospects of students 
                        interested in the tech industry. PACS aims to bridge the gap between theoretical knowledge and practical application, ensuring students 
                        are well-equipped for the challenges of the evolving tech industry.
                    </p>
                    <div className="flex flex-row w-full h-full items-center justify-center py-4">
                        <Image
                            src="/images/usstm-logo.png"
                            width={750}
                            height={750}
                            alt="USSTM Logo"
                            className="mt-4 w-[20%] lg:w-[10%] h-auto"
                        />
                        <h1 className="font-sans px-10 text-2xl lg:text-4xl">
                            X
                        </h1>
                        <Image
                            src="/images/pacs-logo.png"
                            width={750}
                            height={750}
                            alt="PACS Logo"
                            className="ml-2 lg:ml-5 w-[22%] lg:w-[12%] h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}