import Link from 'next/link'
import React from 'react'
import Archive from '../archive/page'

const LandingPage = () => {


//bg-[url('/background-img.svg')] 
  
  return (
    <>
    <main className=" p-8 h-screen grid grid-cols-1 lg:grid-cols-4 text-[#222]  ">
        <section id='sectOne' className="   hover:bg-white  hover:text-black duration-700 cursor-pointer">
        <Link href={'/Sections/featureProjects'}> 
            <div className=" flex flex-col justify-center px-5 items-end h-full">
              <h2 className=" lg:text-2xl uppercase font-extralight opacity-100">Feature Projects</h2>
              <p className=" font-light text-[#000000ac] py-4 text-sm w-80 flex justify-end text-right   ">A short list of my highlighted projects, that features some of my best work.</p>
              <hr className="mx-2  w-[70%]" />
            </div>
          </Link>
        </section>
      <section id='sectOne' className="  hover:bg-white  hover:text-black duration-700 cursor-pointer">
      <Link href={'/'}> 
        <div className="flex flex-col justify-center px-5 items-start h-full">
            <h2 className=" lg:text-2xl uppercase font-extralight">experience</h2>
            <p className=" font-light text-[#000000ac] py-4 text-sm w-80  ">A brief description of my past experience and a small about section for more insight</p>
            <hr className="mx-2  w-[70%]" />
          </div>
      </Link>
      </section>
      <section id='sectOne' className="  hover:bg-white  hover:text-black duration-700 cursor-pointer">
      <Link href={'/Sections/archive'}> 
            <div className="flex flex-col justify-center px-5 items-end h-full">
            <h2 className=" lg:text-2xl uppercase font-extralight ">Project Archive</h2>
            <p className=" font-light text-[#000000ac] py-3 text-sm w-80 flex justify-end text-right  ">A full list of all the projects I have built from the ground up over the years.</p>
            <hr className="mx-2  w-[70%]" />
          </div>
      </Link>
      </section>
      <section id='sectOne' className="  hover:bg-white  hover:text-black duration-700 cursor-pointer">
      <Link href={'/'}> 
        <div className="flex flex-col justify-center px-5 items-start h-full">
            <h2 className=" lg:text-2xl uppercase font-extralight">contact</h2>
            <p className=" font-light text-[#000000ac] py-1 text-sm w-80  "> If you have any inquiries, project proposals, or would like to discuss potential collaborations, I am excited to connect with you. </p>
            <hr className="mx-2  w-[70%]" />
        </div>
      </Link>
      </section>
    </main>
    </>
  )
}

export default LandingPage