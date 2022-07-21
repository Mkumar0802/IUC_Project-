import React from 'react'
import { Link } from "react-router-dom";

function Css() {
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
                            <li className='flex py-5 px-3 cursor-not-allowed'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4  cursor-not-allowed  '>CSS Training</button></li>
                            <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/js">JavaScript Training</Link></button></li>
                            <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/jquery">JQuery Training</Link></button></li>
                            <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/php">PHP Training</Link></button></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div>
                <h1 className='text-2xl font-popins p-5  opacity-75 px-28'>
                    <span className='text-indigo-900  text-3xl font-extrabold '>C</span>SS Training
                </h1>

            </div>
            <div className='flex justify-start'>
                <div className='px-28'>
                    <div className='text-2xl font-popins mt-5  opacity-75 '>
                        <span className='text-indigo-900  text-3xl font-extrabold '>C</span>SS Training Course content
                    </div>
                    <ul className='space-y-5 mb-5 mt-5  font-radio text-slate-500'>
                        <li className='mt-10 text-xl font-semibold font-popins  text-black'>Introduction to CSS</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base '><ion-icon name="caret-forward-outline"></ion-icon> </div>What is CSS?</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Advantages of CSS </li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Why CSS?</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Syntax and Anotomy of CSS</li>
                        <li className='text-black'>Types of Stylesheets</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>External style sheet</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Internal style sheet</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Inline style</li>
                        <li className='text-black'>Types of Selectors</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Global</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Class</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Id</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Grouped</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Descendant</li>
                        <li className='text-black'>Div’s & Span tags</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Background</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>background-color</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>background-image</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>background-repeat</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>background-image</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>background-attachment</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>background-position</li>
                        <li className='text-black'>Font</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>font-family</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>color</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>font-size</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>font-style</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>font-variant</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>font-weight</li>
                        <li className='text-black'>Text</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>letter-spacing</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Word-spacing</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>line-height</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>text-decoration</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>text-transform</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>vertical-align</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Css