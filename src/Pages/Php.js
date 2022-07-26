import React from 'react'
import { Link } from "react-router-dom";

function Php() {
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
                    <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/htmltraining">HTMLTraining </Link></button></li>
                    <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/css"> CSS Training</Link></button></li>
                    <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/js">JavaScript Training </Link></button></li>
                    <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/jquery">JQuery Training</Link></button></li>
                    <li className='flex py-5 px-3 cursor-not-allowed'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4  cursor-not-allowed  '>PHP Training </button></li>
                </ul>
            </div>

            <div>
                <h1 className='text-2xl font-popins p-5   px-28'>
                    <span className='text-indigo-900  text-3xl font-extrabold opacity-75 '>P</span>HP Training
                </h1>

            </div>
            <div className='flex justify-start'>
                <div className='px-28'>
                    <div className='text-2xl font-popins mt-5  '>
                        <span className='text-indigo-900  text-3xl font-extrabold opacity-75'>P</span>HP Training Course content
                    </div>
                    <ul className='space-y-5 mb-5 mt-5  font-radio text-slate-500'>
                        <li className='mt-10 text-xl font-semibold font-popins  text-black'>Introduction to PHP</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base '><ion-icon name="caret-forward-outline"></ion-icon> </div>PHP Basics and Syntax</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Decisions and Loops </li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Functions</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Arrays</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>EStrings And Patterns</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Handling HTML forms with PHP</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Preserving state with query strings ,cookies and sessions</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Files and directories</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Object Oriented Programming in PHP</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Database Programming</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Elements of Object-oriented Design</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>String matching with regukar expressions</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>XML and Web Services</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Security</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Streams and Network Programming</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Php