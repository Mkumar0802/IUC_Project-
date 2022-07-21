import React from 'react'
import { Link } from "react-router-dom";

function SoapUI() {
    return (
        <div className='bg-sky-50'>
            <div className='bg-gradient-to-r from-indigo-900 to-blue-500 text-white'>
                <div className='relative  text-9xl'>

                </div>
                <div className='flex justify-center p-44 '>
                    <div className=''>
                        <h1 className='text-4xl font-semibold '><span className='text-white  text-6xl font-extrabold font-popins '>S</span>oftware Testing Training</h1>

                        <ul className='flex'>
                            <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100'><Link to="/home">Home</Link></button></li>
                            <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify  hover:ring-4 ring-4 ring-white transition ease-in-out duration-100'><Link to="/manualtesting">ManualTesting</Link></button></li>
                            <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify ring-4 ring-white transition ease-in-out duration-100'><Link to="/selenium">SELENIUM® Testing</Link></button></li>
                            <li className='flex py-5 px-3 cursor-not-allowed'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4  cursor-not-allowed   '>SoapUI Training</button></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div>
                <h1 className='text-2xl font-popins p-5  opacity-75 px-28'>
                    <span className='text-indigo-900  text-3xl font-extrabold '>S</span>oapUI Training
                </h1>
                <ul className='space-y-3 px-28 mt-4'>
                    <li className='text-slate-500 font-radio'>SoapUI is one of the most widely used Web API (Application Programming Interface) testing tools. Using SoapUI, you can perform functional testing and automatic scenario-based testing. It also supports security testing and service simulation. LoadUI is an integrated component of SoapUI that is used to perform load testing.</li>
                    <li className='text-slate-500 font-radio'>SoapUI provides support for testing databases and other rich internet applications and so on.SoapUI is a desktop application that is written using Java Swings. It supports Groovy and JavaScript scripting languages. SoapUI supports all major operating system that include Windows, Linux and MacOS. We give an understanding about all the protocols and API supported by SoapUI. Our professional trainers guide you on how to perform web service testing, functional testing, performance testing and regressing testing using SoapUI testing tool.</li>
                </ul>
            </div>
            <div className='flex justify-start'>
                <div className='px-28'>
                    <ul className='space-y-5 mb-5 mt-5  font-radio text-slate-500'>
                        <li className='mt-10 text-xl font-semibold font-popins  text-black'>Module 1</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base '><ion-icon name="caret-forward-outline"></ion-icon> </div>About webservices</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Installation of SoapUI</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>XML, SOAP & WSDL </li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Working with SoapUI tool</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Creating & Reading properties at different levels</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Transferring properties</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Assertions, Xpath & Loops</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Data driven testing</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Transferring properties</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Groovy Scripting Basics</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Groovy Scripting part -1</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Data Driven Testing with SoapUI tool</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Data parameterization using Text file</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SoapUI