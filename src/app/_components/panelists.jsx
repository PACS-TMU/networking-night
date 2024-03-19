export default function Panelists() {
    return (
        <section id="panel" className="lg:text-lg">
            <div className="main mt-4">
                <h1 className='text-foreground text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide leading-relaxed font-semibold'>
                    Meet Our Panelists
                </h1>
                <div className="flex flex-wrap items-center justify-center w-[90%] my-6 lg:my-8 mx-auto">
                    <div className="flex flex-col items-center justify-center md:px-4 md:mx-4 xl:mx-6 py-4 my-6 bg-highlight-light shadow-md p-4 w-[90%] md:w-1/3 lg:w-1/4 aspect-[7/3] rounded-md">
                        <p className="text-lg lg:text-xl xl:text-2xl font-semibold mb-2">Deep Shah</p>
                        <p className="text-base xl:text-xl text-center font-light mb-2">Software Engineer at <a href="https://www.workday.com/" target="_blank" className="text-highlight-dark underline">Workday</a></p>
                    </div>
                    <div className="flex flex-col items-center justify-center md:px-4 md:mx-4 xl:mx-6 py-4 my-6 bg-highlight-light shadow-md p-4 w-[90%] md:w-1/3 lg:w-1/4 aspect-[7/3] rounded-md">
                        <p className="text-lg lg:text-xl xl:text-2xl font-semibold mb-2">Alessandro Cunsolo</p>
                        <p className="text-base xl:text-xl text-center font-light mb-2">Startup Co-Founder</p>
                    </div>
                    <div className="flex flex-col items-center justify-center md:px-4 md:mx-4 xl:mx-6 py-4 my-6 bg-highlight-light shadow-md p-4 w-[90%] md:w-1/3 lg:w-1/4 aspect-[7/3] rounded-md">
                        <p className="text-lg lg:text-xl xl:text-2xl font-semibold mb-2">Adam Staviss</p>
                        <p className="text-base xl:text-xl text-center font-light mb-2">Ex-Project Manager at <a href="https://www.amd.com" target="_blank" className="text-highlight-dark underline">AMD</a></p>
                    </div>
                    <div className="flex flex-col items-center justify-center md:px-4 md:mx-4 xl:mx-6 py-4 my-6 bg-highlight-light shadow-md p-4 w-[90%] md:w-1/3 lg:w-1/4 aspect-[7/3] rounded-md">
                        <p className="text-lg lg:text-xl xl:text-2xl font-semibold mb-2">Cindy Fang</p>
                        <p className="text-base xl:text-xl text-center font-light mb-2">President of <a href="https://www.instagram.com/tmu_cscu/" target="_blank" className="text-highlight-dark underline">CSCU</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}