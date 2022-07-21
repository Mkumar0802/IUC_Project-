import React from 'react'
import { Link } from "react-router-dom";

function J2EE() {
    return (
        <div>
              <div className='bg-gradient-to-r from-indigo-900 to-blue-500 text-white'>
                <div className='relative  text-9xl'>

                </div>
                <div className='flex justify-center p-44 '>
                    <div className=''>
                        <h1 className='text-4xl font-semibold '><span className='text-white  text-6xl font-extrabold font-popins '>J</span>ava Training</h1>
                       
                       <ul className='flex'>
                        <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100'><Link to="/home">Home</Link></button> <span className='py-1 px-4'>J2EE Training</span></li>
                        <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/java">CoreJava Training</Link></button></li>
                       </ul>
                    </div>

                </div>
            </div>
            <div className='bg-sky-50'>
                <div>
                    <h1 className='text-2xl font-popins p-5 '>
                        <span className='text-indigo-900  text-3xl font-extrabold '>J</span>2EE Training
                    </h1>
                    <div className='px-5 text-2xl font-semibold font-popins flex justify-center'>
                        J2EE Training in Chennai
                    </div>

                    <ul className='space-y-3 px-28 mt-4'>
                        <li className='text-slate-500 font-radio'> IUC provides you clear view of the computer languages and makes expert in java, languages training in Chennai. Also we are fully concentrating on theory, practical and interview point of view so we can give you nice feature.</li>
                        <li className='text-slate-500 font-radio'>Java was originally developed by James Gosling at Sun Microsystems and released in 1995 as a core component of Sun Microsystems Java platform. Java is fast, secure, and reliable. The Java programming language is a high-level language.java is class based object-oriented programming language.</li>
                        <h1 className=' mt-10 text-xl font-semibold font-popins '>
                            INTRODUCTION OF J2EE
                        </h1>
                        <li className='text-slate-500 font-radio'>J2EE is a platform-independent, Java-centric environment from Sun for developing, building and deploying Web-based enterprise applications online. The J2EE platform consists of a set of services, APIs, and protocols that provide the functionality for developing multitier, Web-based applications. Some of the key features and services of J2EE:   </li>
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
                                    <li>Introduction to JEE</li>
                                    <li>Overview of Dynamic web applications</li>
                                    <li>Introduction to Servlet</li>
                                    <li>Servlet life cycle</li>
                                    <li>Annotations and their use in Servlet development</li>
                                    <li>Difference b/w web server & application server</li>
                                    <li>Installing and configuring web & application server</li>
                                    <li>Web Application formats</li>
                                    <li>Deployment modes supported by servers</li>
                                    <li>Creating and deploying a simple web application</li>
                                    <li>Understanding the role of Servlet Request & Servlet Response</li>
                                    <li>Different b/w parameters and attributes</li>
                                    <li>Using different content type for response</li>

                                </ul>
                            </div>
                            <div>

                                <ul className='space-y-5 mb-5 mt-5'>

                                    <li>Using Request Dispatcher for Include & Forward</li>
                                    <li>Initialization Parameters and their use</li>
                                    <li>Servlet Config & ServletContext</li>
                                    <li>Inter application collaboration</li>
                                    <li>State Management and use of Http Session& Cookies</li>
                                    <li>Hidden Form fields and URL Rewriting</li>
                                    <li>Using Http only Cookies</li>
                                    <li>Listeners and web application events</li>
                                    <li>Applying Filters to servlets</li>
                                    <li>Asynchronous request processing</li>
                                    <li>File Uploading & downloading</li>
                                    <li>Security</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

                <div>
                    <h1 className='px-28 mt-10 text-xl font-semibold font-popins '>
                        Java Server pages (JSP)
                    </h1>
                    <div className='px-28 grid grid-cols-2 w-2/3 text-slate-500 font-radio'>
                        <div >
                            <ul className='space-y-5 mb-5 mt-5  '>
                                <li>Advantages of JSP over Servlet</li>
                                <li>JSP Architecture</li>
                                <li>Integration of JSP & Servlet API</li>
                                <li>JSP implicit objects</li>
                                <li>Use of JSP Tags, Actions and Directives</li>
                                <li>Error Handling in JSP</li>
                                <li>Using Java Beans in JSP</li>
                                <li>Defining Custom Tags</li>

                            </ul>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default J2EE