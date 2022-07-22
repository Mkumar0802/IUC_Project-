import React from 'react'
import office from './Assets/fqa1.png'
import training from './Assets/training.jpg'
import job from './Assets/job.jpg'
import project from './Assets/project.jpg'
import work from './Assets/work.jpg'
import resume from './Assets/resume.jpg'
import placement from './Assets/placement.jpg'
import hrs from './Assets/24.jpg'


// import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            {/* <div className='bg-gradient-to-r from-indigo-900 to-blue-500 text-white '>
                <div className='relative  text-9xl'>

                </div>
                <div className='flex justify-center p-44 '>
                    <div className=''>
                        <h1 className='text-4xl font-semibold '><span className='text-white  text-6xl font-extrabold font-popins '>A</span>bout Us</h1>
                        <div className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100'> <Link to="/home">Home</Link></button> <span className='py-1 px-4'>-About Us</span></div>

                    </div>

                </div>
            </div> */}


            <div className='flex  font-popins  mt-10'>
                <div className='w-full h-4/6 lg:h-5/6 flex flex-col lg:flex-row justify-center'>

                    <div data-aos="fade-right" className='md:pr-24 md:py-10  px-10 my-11 '>
                        <img src={office} alt='pic' />
                    </div>
                    <div data-aos="fade-left" className='md:w-2/6 px-5'>
                        <ul>
                            <li className='text-slate-500 font-radio p-4 max-w-sm bg-white rounded-lg border shadow-2xl '>
                                <h1 className='text-black  md:text-2xl text-xl font-popins font-semibold'>
                                    Who We Are
                                </h1 >
                                IUC computers is the best computer education institute in Chennai. Established in the year 1997,We are pioneer in Software and Hardware training. We strive for the betterment of our trainees. We know the real time work would be very different and challenging, we try our best to bridge the gap between training and the real time world. We constantly upgrade ourselves, implement new ideas, revise curriculum and constantly work on the feedback.
                            </li>
                            <br />
                            <li className='text-slate-500 font-radio  p-4 max-w-sm bg-white rounded-lg border shadow-2xl'>
                                <h1 className='text-black md:text-2xl text-xl   font-popins font-semibold'>
                                    Our Vision
                                </h1>
                                We also focus on developing the soft skills of the students which is a key differentiator in the IT industry today. Soft skills training include interview facing, resume drafting, client interaction, email etiquette, cross cultural interaction. Handling classes over years, we have identified and incorporatedBest Practices for effective knowledge transfer. Mentoring to students even after they are in the job. Sophisticated lab facilities for simulating real time performance testing scenarios, which is open to practice all through the day
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className='mb-10 mt-10'>
                <div className='grid grid-cols-3 md:px-40 gap-4'>
                    <div className=' bg-white rounded-lg border   p-2  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 shadow-lg hover:shadow-2xl'>
                        <div className=''>
                            <div className='flex justify-center'>
                                <img className='object-scale-down w-1/2 h-1/2' src={training} alt='training' />
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins text-3xl font-extrabold'>T</span>RAINING</h1>
                            <p className=' text-center  text-slate-800 font-radio '>Training delivered by real time software experts having more than 10 years of experience.</p>
                        </div>
                    </div>

                    <div className=' bg-white rounded-lg border   p-2  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 shadow-lg hover:shadow-2xl'>
                        <div className=''>
                            <div className='flex justify-center'>
                                <img className='object-scale-down w-2/4 h-4/5' src={job} alt='job' />
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins text-3xl font-extrabold'>I</span>NTERVIEW</h1>
                            <p className=' text-center  text-slate-800 font-radio '>Interview questions and real time scenarios discussion on topics covered for the day.</p>
                        </div>
                    </div>
                    <div className=' bg-white rounded-lg border   p-2  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 shadow-lg hover:shadow-2xl'>
                        <div className=''>
                            <div className='flex justify-center'>
                                <img className='object-scale-down w-1/2 h-1/2' src={project} alt='project' />
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins text-3xl font-extrabold'>R</span>EALTIME PROJECT</h1>
                            <p className=' text-center  text-slate-800 font-radio '>Realtime projects discussion relating to the possible interview questions.</p>
                        </div>
                    </div>
                    <div className=' bg-white rounded-lg border   p-2  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 shadow-lg hover:shadow-2xl'>
                        <div className=''>
                            <div className='flex justify-center'>
                                <img className='object-scale-down w-1/2 h-1/2' src={work} alt='job' />
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins text-3xl font-extrabold'>J</span>ob</h1>
                            <p className=' text-center  text-slate-800 font-radio '>Trainees can attend training and use lab untill you get a job.</p>
                        </div>
                    </div>

                    <div className=' bg-white rounded-lg border   p-2  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 shadow-lg hover:shadow-2xl'>
                        <div className=''>
                            <div className='flex justify-center'>
                                <img className='object-scale-down w-1/2 h-1/2' src={resume} alt='job' />
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins text-3xl font-extrabold'>R</span>esume</h1>
                            <p className=' text-center  text-slate-800 font-radio '>Resume preperation and mock interviews.</p>
                        </div>
                    </div>
                    <div className=' bg-white rounded-lg border   p-2  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 shadow-lg hover:shadow-2xl'>
                        <div className=''>
                            <div className='flex justify-center'>
                                <img className='object-scale-down w-1/2 h-1/2' src={placement} alt='job' />
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins text-3xl font-extrabold'>P</span>lacement </h1>
                            <p className=' text-center  text-slate-800 font-radio '>100% placement assistance.</p>
                        </div>
                    </div>
                    <div className=' bg-white rounded-lg border   p-2  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 shadow-lg hover:shadow-2xl'>
                        <div className=''>
                            <div className='flex justify-center'>
                                <img className='object-scale-down w-1/2 h-1/2' src={hrs} alt='job' />
                            </div>
                            <h1 className='text-center font-popins text-xl'> <span className='text-indigo-900 font-popins text-3xl font-extrabold'>L</span>ab</h1>
                            <p className=' text-center  text-slate-800 font-radio '>24 hours lab facility..</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About