import './intro.css';

export default function Intro() {
    return (
        <section id="intro">
            <div id="overlay">
                <div className="main flex">
                    <div className="text-container mt-40 lg:mt-60 xl:mt-0">
                        <div className="flex flex-row space-x-4 w-[90%] pb-4 lg:pb-10 mx-auto items-center lg:space-x-6">
                            <div id="bar" className="bg-background h-1 rounded-sm mt-20 mb-[2vh] w-[15%] lg:w-[8%]"></div>
                            <div className="subtitle mt-20 mb-[2vh] text-background md:text-lg uppercase font-bold">
                                Connect with Industry Professionals
                            </div>
                        </div>
                        <div className="w-[90%] mx-auto flex items-center">
                            <div className="xl:w-[50%] flex items-center">
                                <h1 className='text-background text-3xl md:text-5xl lg:text-6xl font-serif tracking-wide leading-relaxed'>
                                    Tech Networking Night
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}