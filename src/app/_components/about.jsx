import Image from "next/image";

export default function About() {
    return (
        <section id="about">
            <div className='main'>
                <h1 className='text-foreground text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide leading-relaxed font-semibold'>
                    About this Event
                </h1>
                <div className="flex flex-col items-center text-foreground font-sans w-full lg:text-lg">
                    <p className="text-foreground mt-4">
                        Tech Networking Night is an event that brings together students and industry professionals in the tech industry.
                        This event is designed to help students learn more about the tech industry and to help them network with industry
                        professionals. This event is open to all students and is a great opportunity to learn more about the tech industry
                        and to make connections with industry professionals.
                    </p>
                    <p className="text-foreground mt-4">
                        This event is hosted by the Undergraduate Science Society of Toronto Metropolitan (USSTM) and Practical Applications
                        of computer science (PACS). USSTM and PACS are student organizations at Toronto Metropolitan University that are
                        dedicated to helping students learn more about the tech industry and to help them make connections with industry.
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
                            className="ml-5 w-[22%] lg:w-[12%] h-auto"
                        />
                    </div>
                </div>
                <div className="flex flex-col py-4 lg:text-lg font-sans">
                    <h1 className="text-foreground text-xl md:text-2xl lg:text-3xl font-sans tracking-wide leading-relaxed font-semibold">
                        Event Details and Panelists
                    </h1>
                    <p className="text-foreground mt-4">
                        <span className="underline font-semibold">Date:</span> November 20th, 2021
                    </p>
                    <p className="text-foreground mt-4">
                        <span className="underline font-semibold">Time:</span> 5:30pm - 8:00pm
                    </p>
                    <p className="text-foreground mt-4">
                        <span className="underline font-semibold">Location:</span> Oakham Lounge, 35 Gould St, Toronto, ON M5B 1E9
                    </p>
                </div>
            </div>
        </section>
    );
}