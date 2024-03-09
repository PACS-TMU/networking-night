"use client";

export default function Form() {
    return (
        <form
            id="my-form"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbw7XJKNwxFh5YAMxOliZ8gbIrv-QgtciIe5F-3L3P0J3jQZDdzysHq91NrPzJl19q31/exec"
            onSubmit={e => {
                document.getElementById('submit-button').innerHTML = 'Submitting...'
                e.preventDefault();
                setTimeout(() => {
                    const form = document.getElementById('my-form');
                    const data = new FormData(form);
                    const action = e.target.action;
                    document.getElementById('my-form').reset();
                    document.getElementById('submit-button').innerHTML = 'Submitted';
                    document.getElementById('submit-button').disabled = true;
                    document.getElementById('submit-button').style.backgroundColor = '#E5E5E5';
                    fetch(action, {
                        method: 'POST',
                        body: data,
                    })
                }, 1000);
            }}
            className="flex flex-col justify-center items-center pt-4 w-[90%] lg:w-[80%] mx-auto bg-highlight-light rounded-md shadow-md p-4 my-4 lg:p-8 text-foreground font-sans lg:text-lg"
        >
            <input
                className='my-2 w-full h-9 p-4 rounded-md bg-background placeholder-gray-500'
                maxLength="60"
                name="Full Name"
                type="text"
                placeholder="Full Name"
                autoComplete="given-name"
                pattern="[A-Za-z ]+"
                required
            />

            <input
                className='my-2 w-full h-9 p-4 rounded-md bg-background placeholder-gray-500'
                name="TMU Email"
                type="email"
                placeholder="TMU Email"
                autoComplete="email"
                pattern=".+@torontomu\.ca"
                onKeyDown={(e) => { e.key === " " ? e.preventDefault() : "" }}
            />

            <div className="flex flex-col text-left w-full p-2 my-2 bg-background rounded-md">
                <p className="m-4 mb-0">Year</p>
                <div className="flex flex-col w-full text-base py-1 m-4">
                    <div className="pb-4">
                        <input type="radio" id="1st" name="Year" value="1st Year" required />
                        <label className="px-2" htmlFor="1st">1st Year</label>
                    </div>
                    <div className="pb-4">
                        <input type="radio" id="2nd" name="Year" value="2nd Year" required />
                        <label className="px-2" htmlFor="2nd">2nd Year</label>
                    </div>
                    <div className="pb-4">
                        <input type="radio" id="3rd" name="Year" value="3rd Year" required />
                        <label className="px-2" htmlFor="3rd">3rd Year</label>
                    </div>
                    <div className="pb-4">
                        <input type="radio" id="4th" name="Year" value="4th Year" required />
                        <label className="px-2" htmlFor="4th">4th Year</label>
                    </div>
                    <div className="pb-4">
                        <input type="radio" id="5th+" name="Year" value="5th+ Year" required />
                        <label className="px-2" htmlFor="5th+">5th+ Year</label>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-left w-full p-2 my-2 bg-background rounded-md">
                <p className="m-4 mb-0">Program</p>
                <div className="flex flex-col w-full text-base py-1 m-4">
                    <div className="pb-4">
                        <input type="radio" id="bio" name="Program" value="Biology" required />
                        <label className="px-2" htmlFor="bio">Biology</label>
                    </div>
                    <div className="pb-4">
                        <input type="radio" id="biomed" name="Program" value="Biomedical Sciences" required />
                        <label className="px-2" htmlFor="biomed">Biomedical Sciences</label>
                    </div>
                    <div className="pb-4">
                        <input type="radio" id="chem" name="Program" value="Chemistry" required />
                        <label className="px-2" htmlFor="chem">Chemistry</label>
                    </div>
                    <div className="pb-4">
                        <input type="radio" id="cs" name="Program" value="Computer Science" required />
                        <label className="px-2" htmlFor="cs">Computer Science</label>
                    </div>
                    <div className="pb-4">
                        <input type="radio" id="fin-math" name="Program" value="Financial Mathematics" required />
                        <label className="px-2" htmlFor="fin-math">Financial Mathematics</label>
                    </div>
                    <div className="pb-4">
                        <input type="radio" id="math-apps" name="Program" value="Mathematics and Its Applications" required />
                        <label className="px-2" htmlFor="math-apps">Mathematics and Its Applications</label>
                    </div>
                    <div className="pb-4">
                        <input type="radio" id="medphys" name="Program" value="Medical Physics" required />
                        <label className="px-2" htmlFor="medphys">Medical Physics</label>
                    </div>
                    <div className="pb-4">
                        <input type="radio" id="other" name="Program" value="Other" required />
                        <label className="px-2" htmlFor="other">Other</label>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-left w-full p-4 bg-background rounded-md m-2">
                <p className="text-gray-500">I will be attending on March 21st, 2024</p>
                <div className="flex flex-row w-full justify-evenly py-1">
                    <div>
                        <input type="radio" id="yes" name="I will be attending on March 21st, 2024" value="Yes" required />
                        <label className="px-2" htmlFor="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="I will be attending on March 21st, 2024" value="No" />
                        <label className="px-2" htmlFor="no">No</label>
                    </div>
                </div>
            </div>

            <button
                id='submit-button'
                className='my-4 bg-highlight-dark text-background w-3/4 lg:w-1/3 h-10 rounded-md shadow-md hover:scale-105'
                type="submit"
            >
                Submit Feedback
            </button>
        </form>
    );
}