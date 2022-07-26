import React from 'react'
import { Link } from "react-router-dom";

function ManualTesting() {
    return (
        <div className='bg-sky-50'>

            <div class="
		bg-[url('https://cdn.pixabay.com/photo/2015/08/24/12/53/banner-904884_960_720.jpg')]  h-96 w-full bg-cover bg-center">
                <div className='relative  text-9xl'>

                </div>
                <div className='flex justify-center p-44'>
                    <div className=''>
                        <h1 className='text-4xl font-semibold'><span className=' text-6xl font-extrabold font-popins '>S</span>oftware Testing Training</h1>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-indigo-900 to-blue-500 flex justify-center text-white'>
                <ul className='flex'>
                    <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100'><Link to="/home">Home</Link></button></li>
                    <li className='flex py-5 px-3 cursor-not-allowed'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4  cursor-not-allowed  '>Manual Testing</button></li>
                    <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/selenium">SELENIUM® Testing</Link></button></li>
                    <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/soapui">SoapUI Training</Link></button></li>
                </ul>
            </div>

            <div>
                <h1 className='text-2xl font-popins p-5  px-28  '>
                    <span className='text-indigo-900  text-3xl font-extrabold opacity-75'>M</span>anual Testing Training/Online Training
                </h1>
                <div className=' px-28  text-2xl font-semibold font-popins flex '>
                    Manual Testing Training Syllabus
                </div>



                <div>
                    <div className='flex  px-28 '>
                        <div className=' grid grid-cols-2  '>
                            <div>
                                <ul className='space-y-5 mb-5 mt-5  font-radio text-slate-500'>
                                    <li className='mt-10 text-xl font-semibold font-popins  text-black'>Fundamentals of Testing</li>
                                    <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base '><ion-icon name="caret-forward-outline"></ion-icon> </div>Why is testing necessary? What is testing?  </li>
                                    <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Testing principles </li>
                                    <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Fundamental test process </li>
                                    <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>The psychology of testing </li>
                                </ul>
                            </div>

                            <div>

                                <ul className='space-y-5 mb-5 mt-5  text-slate-500 font-radio'>
                                    <li className=' mt-10 text-xl font-semibold font-popins text-black'>Testing throughout the software life cycle</li>
                                    <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Software development models </li>
                                    <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Test levels</li>
                                    <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Test types: the targets of testing </li>
                                    <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Maintenance testing </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>



                <div className='flex  px-28 '>
                    <div className=' grid grid-cols-2 '>
                        <div>
                            <ul className='space-y-5 mb-5 mt-5  font-radio text-slate-500'>
                                <li className='mt-10 text-xl font-semibold font-popins  text-black'>Static techniques</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Reviews and the test process</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Review process</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Static analysis by tools</li>
                            </ul>
                        </div>

                        <div>

                            <ul className='space-y-5 mb-5 mt-5  text-slate-500 font-radio'>
                                <li className='mt-10 text-xl font-semibold font-popins  text-black'>Test design techniques</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Identifying test conditions and designing test cases</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Categories of test design techniques</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Specification-based or black-box techniques</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Structure-based or white-box techniques</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Experience-based techniques</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Choosing a test technique</li>
                            </ul>



                        </div>
                        <div>
                            <ul className='space-y-5 mb-5 mt-5  font-radio text-slate-500'>
                                <li className='mt-10 text-xl font-semibold font-popins  text-black'>Test management</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Test organization</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Test plans, estimates, and strategies</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Test progress monitoring and control</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Configuration management</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Risk and testing</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Incident management</li>
                            </ul>
                        </div>

                        <div>

                            <ul className='space-y-5 mb-5 mt-5  text-slate-500 font-radio'>
                                <li className='mt-10 text-xl font-semibold font-popins  text-black'>Tool support for testing</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Types of test tool</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Effective use of tools: Potential benefits and risks</li>
                                <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Introducing a tool into an organization</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManualTesting