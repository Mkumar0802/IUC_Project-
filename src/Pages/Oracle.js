import React from 'react'
import { Link } from "react-router-dom";



function Oracle() {
    return (
        <div className='bg-sky-50'>
            <div className='bg-gradient-to-r from-indigo-900 to-blue-500 text-white'>
                <div className='relative  text-9xl'>

                </div>
                <div className='flex justify-center p-44 '>
                    <div className=''>
                        <h1 className='text-4xl font-semibold '><span className='text-white  text-6xl font-extrabold font-popins '>O</span>racle Training</h1>
                       
                       <ul className='flex'>
                        <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100'><Link to="/home">Home</Link></button></li>
                        <li className='flex py-5 px-3 cursor-not-allowed'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4  cursor-not-allowed  '>Oracle Testing</button></li>
                        
                       </ul>
                    </div>

                </div>
            </div>

            <div>
                <h1 className='text-2xl font-popins p-5  opacity-75 px-28'>
                    <span className='text-indigo-900  text-3xl font-extrabold '>O</span>racle Training/Online
                </h1>

            </div>
            <div className='flex justify-start'>
                <div className='px-28'>
                    <div className='text-2xl font-popins mt-5  opacity-75 '>
                        <span className='text-indigo-900  text-3xl font-extrabold '>O</span>racle Training Syllabus
                    </div>
                    <ul className='space-y-5 mb-5 mt-5  font-radio text-slate-500'>
                        <li className='mt-10 text-xl font-semibold font-popins  text-black'>Introduction </li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base '><ion-icon name="caret-forward-outline"></ion-icon> </div>Starting Out with Oracle</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Exploring the Oracle Architecture </li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Installing Oracle Software</li>
                        <li className='hover:text-black  flex gap-1 hover:underline ' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Properly Sizing Database and Planning for Growth</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Managing the Oracle RDBMS</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Administering Databases and Data files</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Administering Table spaces</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Administering Redo Logs, Control Files, and Rollback</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Segments</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Managing Data</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Administering User Accounts</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Managing Processes</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Working with Tables, Views, and Synonyms</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Using Indexes and Sequences</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Using Oracle Clusters, Stored Procedures, and Database</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Links</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Managing Job Queues and Using Oracle Auditing</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Understanding Effective Backup Techniques</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Recovering the Database</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Administering Oracle Replication</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Advanced Oracle Options</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Effectively Tuning and Optimizing the Database</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Exploring the Web Publishing Assistant and Network</li>
                        <li className='hover:text-black hover:underline  flex gap-1' ><div className='text-indigo-900 text-base'><ion-icon name="caret-forward-outline"></ion-icon> </div>Computing Architecture</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Oracle