import React from 'react'
import { Link } from "react-router-dom";

function CoreJava() {
    return (
        <div className='bg-sky-50'>
             <div className='bg-gradient-to-r from-indigo-900 to-blue-500 text-white'>
                <div className='relative  text-9xl'>

                </div>
                <div className='flex justify-center p-44 '>
                    <div className=''>
                        <h1 className='text-4xl font-semibold '><span className='text-white  text-6xl font-extrabold font-popins '>J</span>ava Training</h1>
                       
                       <ul className='flex'>
                        <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100'><Link to="/home">Home</Link></button> <span className='py-1 px-4'>CoreJava Training</span></li>
                        <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/J2EE">J2EE Training</Link></button></li>
                       </ul>
                    </div>

                </div>
            </div>
            <div>
                <h1 className='text-2xl font-popins p-5 '>
                    <span className='text-indigo-900  text-3xl font-extrabold '>C</span>ore Java Training
                </h1>
                <div className='px-5 text-2xl font-semibold font-popins flex justify-center'>
                    Core Java Training in Chennai
                </div>

                <ul className='space-y-3 px-28 mt-4'>
                    <li className='text-slate-500 font-radio'> Java is a programming language and computing platform first released by Sun Microsystems in 1995. There are handful of applications and websites that will not work unless you have Java installed, and more are created every day – the reason being Java is fast, secure, and reliable. From laptops to datacenters, game consoles to scientific supercomputers, cell phones to the Internet, Java is in the virtual world – Ubiquitous.</li>
                    <li className='text-slate-500 font-radio'>Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. A huge advantage of Java is portability, which means that programs written for the Java platform must run similarly on any combination of hardware and operating system with adequate runtime support.</li>
                    <li className='text-slate-500 font-radio'>Java Programming training in IUC Chennai, provides the students a hands on experience on the tool from the basics to advance real time project demonstration. Our practical and real time project scenarios training helps students to work better on Java programming skills. Our JAVA training program helps every student to achieve their goal in their programming career. As one of the top institutes in Chennai since 1997, we designed the course in easy and elegant for the students. The training provided here helps the students to get immediate placement after course completion.</li>
                </ul>

                <div>
                    <h1 className='px-28 mt-10 text-xl font-semibold font-popins '>
                        Features of Java
                    </h1>
                    <div className='px-28 grid grid-cols-2 w-2/3 text-slate-500 font-radio'>
                        <div>
                            <ul className='space-y-5 mb-5 mt-5 '>
                                <li>Simple</li>
                                <li>Object oriented</li>
                                <li>Distributed</li>
                                <li>Multithreaded</li>
                                <li>Dynamic</li>
                            </ul>
                        </div>

                        <div>
                            <ul className='space-y-5 mb-5 mt-5'>
                                <li>Architecture neutral</li>
                                <li>Portable</li>
                                <li>High performance</li>
                                <li>Robust</li>
                                <li>Secure</li>
                            </ul>

                        </div>
                    </div>


                </div>
                <div>
                    <h1 className='px-28 mt-10 text-xl font-semibold font-popins '>
                        Core Java Course Syllabus
                    </h1>
                    <div className='px-28 grid grid-cols-2 w-2/3 text-slate-500 font-radio'>
                        <div >
                            <ul className='space-y-5 mb-5 mt-5  '>
                                <li>Data types and operators</li>
                                <li>Control statements</li>
                                <li>Classes and objects</li>
                                <li>Constructors and methods</li>
                                <li>Interfaces and packages</li>
                                <li>Method overloading and overriding</li>
                                <li>Inheritance</li>
                                <li>Exception handling</li>
                                <li>Generics</li>
                                <li>Enumerations</li>
                                <li>Annotations</li>

                            </ul>
                        </div>
                        <div>

                            <ul className='space-y-5 mb-5 mt-5'>
                                <li>The enhanced for loop</li>
                                <li>Varargs (variable-length arguments)</li>
                                <li>Multithreading</li>
                                <li>The I/O classes</li>
                                <li>Networking</li>
                                <li>The Collections Framework</li>
                                <li>Applets</li>
                                <li>AWT and layout managers</li>
                                <li>Swing</li>
                                <li>The Concurrent API</li>
                                <li>and Much, much more</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CoreJava