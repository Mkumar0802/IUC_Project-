import React, { useEffect } from 'react'
import office from '../components/Assets/fqa1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutPage() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div>



            <div className='flex  font-popins md:my-10'>
                <div className='w-full h-4/6 lg:h-5/6 flex flex-col lg:flex-row justify-center'>

                    <div data-aos="fade-right" className='md:pr-24 md:py-10  px-10 my-11 '>
                        <img src={office} alt='pic' />
                    </div>
                    <div data-aos="fade-left" className='md:w-2/6 px-5'>
                        <ul>
                            <li className='text-slate-500 font-radio '>
                                <h1 className='text-black  md:text-2xl text-xl font-popins font-semibold'>
                                    Who We Are
                                </h1 >
                                IUC computers is the best computer education institute in Chennai. Established in the year 1997,We are pioneer in Software and Hardware training. We strive for the betterment of our trainees. We know the real time work would be very different and challenging, we try our best to bridge the gap between training and the real time world. We constantly upgrade ourselves, implement new ideas, revise curriculum and constantly work on the feedback.
                            </li>
                            <br />
                            <li className='text-slate-500 font-radio '>
                                <h1 className='text-black md:text-2xl text-xl   font-popins font-semibold'>
                                    Our Vision
                                </h1>
                                We also focus on developing the soft skills of the students which is a key differentiator in the IT industry today. Soft skills training include interview facing, resume drafting, client interaction, email etiquette, cross cultural interaction. Handling classes over years, we have identified and incorporatedBest Practices for effective knowledge transfer. Mentoring to students even after they are in the job. Sophisticated lab facilities for simulating real time performance testing scenarios, which is open to practice all through the day
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className='mt-6'>
                <div className='md:grid md:grid-cols-3 md:px-40 md:gap-4 grid  grid-cols-2 px-5 gap-5'>
                    <div className=' bg-indigo-200 md:hover:bg-indigo-300  p-2 rounded-xl hover:shadow-xl  transition ease-in-out delay-75  md:hover:-translate-y-1 md:hover:scale-110 duration-100'>
                        <div className='md:hover:animate-flip'>
                            <div className='flex justify-center  text-indigo-900 '><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10  " viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins md:text-3xl font-extrabold'>T</span>RAINING</h1>
                            <p className=' text-center  text-slate-800 font-radio text-sm'>Training delivered by real time software experts having more than 10 years of experience.</p>
                        </div>
                    </div>

                    <div className=' bg-indigo-200 md:hover:bg-indigo-300  p-2 rounded-xl hover:shadow-xl transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 '>
                        <div className='md:hover:animate-flip'>
                            <div className='flex justify-center  text-indigo-900 '><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins md:text-3xl font-extrabold'>I</span>NTERVIEW</h1>
                            <p className=' text-center  text-slate-800 font-radio text-sm'>Interview questions and real time scenarios discussion on topics covered for the day.</p>
                        </div>
                    </div>
                    <div className=' bg-indigo-200 md:hover:bg-indigo-300  p-2 rounded-xl  hover:shadow-xl transition ease-in-out delay-75  md:hover:-translate-y-1 md:hover:scale-110 duration-100 '>
                        <div className='md:hover:animate-flip'>
                            <div className='flex justify-center  text-indigo-900 text-4xl py-1 '><ion-icon name="stats-chart-outline"></ion-icon>
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins md:text-3xl font-extrabold'>R</span>EALTIME PROJECT</h1>
                            <p className=' text-center  text-slate-800 font-radio text-sm '>Realtime projects discussion relating to the possible interview questions.</p>
                        </div>
                    </div>
                    <div className=' bg-indigo-200 md:hover:bg-indigo-300  p-2 rounded-xl  hover:shadow-xl transition ease-in-out delay-75  md:hover:-translate-y-1 md:hover:scale-110 duration-100 '>
                        <div className='md:hover:animate-flip'>
                            <div className='flex justify-center  text-indigo-900 '><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins md:text-3xl font-extrabold'>J</span>OB</h1>
                            <p className=' text-center  text-slate-800 font-radio text-sm'>Trainees can attend training and use lab untill you get a job.</p>
                        </div>

                    </div>
                    <div className=' bg-indigo-200 md:hover:bg-indigo-300  p-2 rounded-xl  hover:shadow-xl  transition ease-in-out delay-75  md:hover:-translate-y-1 md:hover:scale-110 duration-100'>
                        <div className='md:hover:animate-flip'>
                            <div className='flex justify-center  text-indigo-900 '><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins md:text-3xl font-extrabold'>R</span>ESUME</h1>
                            <p className=' text-center  text-slate-800 font-radio text-sm '>Resume preperation and mock interviews.</p>
                        </div>

                    </div>
                    <div className=' bg-indigo-200 md:hover:bg-indigo-300  p-2 rounded-xl  hover:shadow-xl transition ease-in-out delay-75  md:hover:-translate-y-1 md:hover:scale-110 duration-100 '>
                        <div className='md:hover:animate-flip'>
                            <div className='flex justify-center  text-indigo-900  text-4xl'><ion-icon name="trophy-outline"></ion-icon>
                            </div>
                            <h1 className='text-center font-popins text-xl '> <span className='text-indigo-900 font-popins md:text-3xl font-extrabold'>P</span>LACEMENT</h1>
                            <p className=' text-center  text-slate-800 font-radio text-sm '>100% placement assistance</p>
                        </div>

                    </div>
                    <div className=' bg-indigo-200 md:hover:bg-indigo-300  p-2 rounded-xl  hover:shadow-xl transition ease-in-out delay-75  md:hover:-translate-y-1 md:hover:scale-110 duration-100'>
                        <div className='md:hover:animate-flip'>
                            <div className='flex justify-center  text-indigo-900  text-4xl  '><ion-icon name="time-outline"></ion-icon>
                            </div>
                            <h1 className='text-center font-popins text-xl '> <span className='text-indigo-900 font-popins md:text-3xl font-extrabold'>L</span>AB</h1>
                            <p className=' text-center  text-slate-800 font-radio text-sm '>24 hours lab facility.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage;