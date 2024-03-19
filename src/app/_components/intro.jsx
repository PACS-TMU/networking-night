'use client';
import './intro.css';
import { TimerContainer } from './timer/timeContainer';
import { useState, useEffect } from 'react';

export default function Intro() {
    const [time, setTime] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    let countDownDate = new Date("Mar 21, 2024 17:30:00").getTime();

    useEffect(() => {

        var updateTime = setInterval(() => {
            var now = new Date().getTime();

            var difference = countDownDate - now;

            var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
            var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(newDays);
            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);

            if (difference <= 0) {
                clearInterval(updateTime);
                setMessage("The Launch Has Started");
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        })

        return () => {
            clearInterval(updateTime);
        }

    }, [countDownDate]);

    return (
        <section id="intro">
            <div id="overlay">
                <div id="home" className="main flex">
                    <div className="text-container mt-4 w-full">
                        <div className="flex flex-row space-x-4 w-[90%] pb-6 mx-auto items-center lg:space-x-6">
                            <div id="bar" className="bg-background h-1 rounded-sm mt-20 mb-[2vh] w-[15%] lg:w-[8%]"></div>
                            <div className="subtitle mt-20 mb-[2vh] text-background md:text-lg uppercase font-bold">
                                Connect with Industry Professionals
                            </div>
                        </div>
                        <div className="w-[90%] mx-auto flex flex-col">
                            <div className="w-[60%] flex items-center">
                                <h1 className='text-background text-3xl md:text-5xl lg:text-6xl font-serif tracking-wide leading-relaxed'>
                                    Tech Networking Night
                                </h1>
                            </div>
                            <div className="w-[60%] flex items-center">
                                <h1 className='text-background text-lg py-6 font-semibold'>
                                    March 21, 2024  5:30-8:00 PM
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-background font-serif w-full mt-10">
                            <TimerContainer
                                days={days}
                                hours={hours}
                                minutes={minutes}
                                seconds={seconds}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}