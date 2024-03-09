import Form from "./form";

export default function RSVP() {
    return (
        <section id="rsvp" className="lg:text-lg">
            <div className="main">
                <h1 className='text-foreground text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide leading-relaxed font-semibold'>
                    RSVP
                </h1>
                <div className="flex flex-col justify-center text-foreground font-sans w-full lg:text-lg">
                    <p className="text-foreground mt-6">
                        Please fill out the form below to RSVP for the event. We look forward to seeing you there!
                    </p>
                    <div className="bg--light">
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    );
}