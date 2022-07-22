import React from 'react'
import { Link } from "react-router-dom";

function Jquery() {
    return (
        <div className='bg-sky-50'>
             <div className='bg-gradient-to-r from-indigo-900 to-blue-500 text-white'>
                <div className='relative  text-9xl'>

                </div>
                <div className='flex justify-center p-44'>
                    <div className=''>
                        <h1 className='text-4xl font-semibold '><span className='text-white  text-6xl font-extrabold font-popins '>S</span>oftware Testing Training</h1>

                        <ul className='flex'>
                            <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100'><Link to="/home">Home</Link></button></li>
                            <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/htmltraining">HTMLTraining </Link></button></li>
                            <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/css"> CSS Training</Link></button></li>
                            <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/js">JavaScript Training </Link></button></li>
                            <li className='flex py-5 px-3 cursor-not-allowed'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4  cursor-not-allowed  '>JQuery Training</button></li>
                            <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/php">PHP Training</Link></button></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div>
                <h1 className='text-2xl font-popins p-5  px-28'>
                    <span className='text-indigo-900  text-3xl font-extrabold opacity-75  '>J</span>Query Training/Online
                </h1>
                <div>
                    <h1 className='text-2xl font-popins p-5  px-28'>
                        <span className='text-indigo-900  text-3xl font-extrabold opacity-75 '>J</span>Query Training Course Prerequisite
                    </h1>
                    <ul className='space-y-3 px-28 mt-4'>
                        <li className='text-slate-500 font-radio'>Web developers who need to get to grips with key jQuery functionality in order to develop rich interactive web applications.</li>
                    </ul>
                    <ul className='space-y-3 px-28 mt-4 font-radio'>
                        <li className='mt-10 text-xl font-semibold font-popins  text-black'>Working knowledge in</li>
                        <li className='hover:text-black  flex gap-1 hover:underline text-slate-500' ><div className='text-indigo-900 text-base '><ion-icon name="caret-forward-outline"></ion-icon> </div>HTML</li>
                        <li className='hover:text-black  flex gap-1 hover:underline text-slate-500' ><div className='text-indigo-900 text-base '><ion-icon name="caret-forward-outline"></ion-icon> </div>CSS</li>
                        <li className='hover:text-black  flex gap-1 hover:underline  text-slate-500' ><div className='text-indigo-900 text-base '><ion-icon name="caret-forward-outline"></ion-icon> </div>JavaScript</li>
                    </ul>

                </div>

            </div>
            <div className='flex justify-start'>
                <div className='px-28'>
                    <div className='text-2xl font-popins mt-5   '>
                        <span className='text-indigo-900  text-3xl font-extrabold opacity-75 '>J</span>Query Training Course Overview
                    </div>
                    <ul className='space-y-5 mb-5 mt-5  font-radio text-slate-500'>
                        <li className='mt-10 text-xl font-semibold font-popins  text-black'>Introduction</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base '><ion-icon name="caret-forward-outline"></ion-icon> </div>What You Should Already Know</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>What is jQuery ? Adding the jQuery Library to Your Pages</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Basic jQuery Example</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Downloading jQuery and Alternatives to Downloading</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery Syntax</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>The Document Ready Function</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>How to use Custom Scripts?</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Using Multiple Libraries</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery – noConflict() Method</li>


                        <li className='text-xl font-semibold font-popins  text-black'>jQuery – Basics</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>String</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Numbers</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Boolean</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Objects</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Arrays</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Functions</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Arguments</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Scope</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Built-in Functions</li>
                        <li className='text-xl font-semibold font-popins  text-black'>jQuery – Selectors</li>
                        <li className='text-xl font-semibold font-popins  text-black px-7'>How to use Selectors?</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery – CSS Element Selector</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery – CSS Element ID Selector</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery – CSS Element Class Selector</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery – CSS Universal Selectorh</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery – CSS Multiple Elements E, F, G Selector</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery Callback Functions</li>

                        <li className='text-xl font-semibold font-popins  text-black'>jQuery – DOM Attributes</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Get Attribute Value</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Set Attribute Value</li>


                        <li className='text-xl font-semibold font-popins  text-black'>jQuery – DOM Traversing</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Associative Arrays</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Find Elements by index</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Filtering out Elements</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Locating Descendent Elements</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>JQuery DOM Traversing Methods</li>
                        <li className='text-xl font-semibold font-popins  text-black'>jQuery – CSS Methods</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Apply CSS Properties</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Apply Multiple CSS Properties</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Setting Element Width & Height</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>JQuery CSS Methods</li>
                        <li className='text-xl font-semibold font-popins  text-black'>jQuery – DOM Manipulation Methods</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Content Manipulation</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>DOM Element Replacement</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Removing DOM Elements</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Inserting DOM elements</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>DOM Manipulation Methods</li>
                        <li className='text-xl font-semibold font-popins  text-black'>jQuery – Events Handling</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Binding event handlers</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Removing event handlers</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Event Typess</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>The Event Object</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>The Event Attributes</li>
                        <li className='text-xl font-semibold font-popins  text-black'>jQuery – Effects</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>JQuery Effect Methods</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery Hide and Show</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery Toggle</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery Slide – slideDown, slideUp, slideToggle</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery Fade – fadeIn, fadeOut, fadeTo</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>jQuery Custom Animations</li>
                        <li className='text-xl font-semibold font-popins  text-black'>jQuery – AJAX</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>load()</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>get()</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>post()</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>ajax()</li>
                        <li className='text-xl font-semibold font-popins  text-black'>jQuery – JSON</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>getJSON()</li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Jquery