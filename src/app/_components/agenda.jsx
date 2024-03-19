import './agenda.css';
import Image from 'next/image';

export default function Agenda() {
    return (
        <section id="agenda" className="lg:text-lg">
            <div className="main">
                <h1 className='text-foreground text-3xl pb-8 lg:pb-12 md:text-4xl lg:text-5xl font-serif tracking-wide leading-relaxed font-semibold'>
                    Agenda
                </h1>
                <ul className="timeline ml-2 lg:ml-8">
                    <li className="timeline__line"></li>
                    <li className="timeline__item">
                        <div className="info">
                            <div className="dot right-[0.5rem]">
                                <Image
                                    src="/icons/check-in.png"
                                    alt="Check-in emoji icon"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <time className="time">17:30</time>
                            <h4 className="title text-highlight-dark font-semibold">Reception and Check-ins</h4>
                        </div>
                    </li>
                    <li className="timeline__item">
                        <div className="info">
                            <div className="dot right-[0.5rem]">
                                <Image
                                    src="/icons/q&a.png"
                                    alt="Q&A emoji icon"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <time className="time">17:45</time>
                            <h4 className="speaker text-highlight-dark font-semibold">
                                Panelist Introductions and Q&A
                            </h4>
                        </div>
                        <div className="content">
                            Get to know the panelists and ask them questions. This section will begin with a short introduction of the panelists and then a few questions will be asked to them by the organizers.
                            The audience will also be given a chance to ask questions after the initial Q&A.
                        </div>
                    </li>
                    <li className="timeline__item">
                        <div className="info">
                            <div className="dot right-[0.5rem]">
                                <Image
                                    src="/icons/handshake.png"
                                    alt="Handshake emoji icon"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <time className="time">18:30</time>
                            <h4 className="speaker text-highlight-dark font-semibold">
                                Round Table Networking
                            </h4>
                        </div>
                        <div className="content">
                            Attendees will have a chance to speak to all of the panelists at round tables where they can ask more personalized questions. Through rotations, attendees will
                            have a chance to visit and talk with all of the tech panelists.
                        </div>
                    </li>
                    <li className="timeline__item break">
                        <div className="info">
                            <div className="dot right-[0.5rem] text-2xl">
                                <Image
                                    src="/icons/food.png"
                                    alt="Food emoji icon"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <time className="time">19:15</time>
                            <h4 className="title text-highlight-dark font-semibold">
                                Dinner!
                            </h4>
                        </div>
                    </li>
                    <li className="timeline__item">
                        <div className="info">
                            <div className="dot right-[0.5rem] text-2xl">
                                <Image
                                    src="/icons/insight.png"
                                    alt="Remarks and insight emoji icon - a light bulb"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <time className="time">19:45</time>
                            <h4 className="speaker text-highlight-dark font-semibold">
                                Final Remarks
                            </h4>
                        </div>
                        <div className="content">
                            Towards the end of dinner, the panelists will give their final remarks and advice to the audience. The organizers will also give their final remarks and close the event.
                        </div>
                    </li>
                    <li className="timeline__item end">
                        <div className="info">
                            <div className="dot right-[0.5rem] bottom-[0.5rem] text-2xl">
                                <Image
                                    src="/icons/thanks.png"
                                    alt="Thank you emoji icon"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <time className="time">
                                20:00
                            </time>
                            <h4 className="title text-highlight-dark font-semibold">
                                Thank You for Coming!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}