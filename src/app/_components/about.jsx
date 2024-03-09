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
                                Oakham Lounge, 35 Gould St, Toronto, ON M5B 1E9
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-foreground font-sans w-full lg:text-lg">
                    <p className="text-foreground mt-4">
                        Tech Networking Night is an event that brings together students and industry professionals in the tech industry.
                        This event is designed to help students learn more about the tech industry and to help them network with industry
                        professionals. This event is open to all students and is a great opportunity to learn more about the tech industry
                        and to make connections with industry professionals.
                    </p>
                    <p className="text-foreground mt-4">
                        This event is hosted by the Undergraduate Science Society of Toronto Metropolitan (USSTM) and Practical Applications
                        of Computer Science (PACS). USSTM and PACS are student organizations at Toronto Metropolitan University that are
                        dedicated to helping students learn more about the tech industry and to help them make connections within the industry.
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