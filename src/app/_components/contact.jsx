export default function Contact() {
    return (
        <section id="contact" className="lg:text-lg">
            <div className="main">
                <h1 className='text-foreground text-3xl pb-8 md:text-4xl lg:text-5xl font-serif tracking-wide leading-relaxed font-semibold'>
                    Contact Us
                </h1>
                <div className="flex flex-col justify-center text-foreground font-sans w-full lg:text-lg">
                    <p className="text-foreground">
                        PACS and USSTM are dedicated to helping students learn more about the tech industry and to help them make connections within the industry.
                        If you have any questions about the event, please feel free to reach out to us 
                        at <a href="mailto:pacs@usstm.ca" className="text-highlight-dark underline">pacs@usstm.ca</a>. For updates about the event,
                        please follow us on instagram 
                        at <a href="https://www.instagram.com/pacs_tmu/" target="_blank" className="text-highlight-dark underline">@pacs_tmu</a> and 
                        at <a href="https://www.instagram.com/usstorontomet/" target="_blank" className="text-highlight-dark underline">@usstorontomet</a>.
                        To RSVP for the event, please visit 
                        our <a href="#rsvp" className="text-highlight-dark underline">RSVP section</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}