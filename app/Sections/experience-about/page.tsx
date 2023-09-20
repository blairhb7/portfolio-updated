'use client'
import Experience from '@/app/Components/Experience'
import Nav from '@/app/Components/nav'
import Link from 'next/link'
import React from 'react'

const page = () => {

  //bg-[url('/background-img.svg')] 
  return (
    <>
    <Nav/>
    <main className="grid grid-flow-col-1 lg:grid-cols-2 pt-[9%] h-full md:h-screen bg-cover bg-[url('/background-img.svg')] ">
    
        <section className="h-full">
        <div  className="   text-[#000000ac] flex-col  px-6 lg:px-2 lg:m-10 p-2 z-0  transition duration-700 motion-reduce:transition-none ">
              <div className=" text-sm w-full">2017 - Present</div>
              <div className="">
                <h1 className=" font-bold text-2xl ">FilmDUO</h1>
                <h3 className="  font-medium text-base 2xl:text-xl pb-4 ">Owner/Lead Engineer/Production Director</h3>
                <p className=" text-sm  w-[90%] 2xl:w-[85%] lg:text-sm 2xl:text-base lg:leading-relaxed  font-sans mb-3   font-normal ">FilmDuo is a video production company. As the owner and producer of the company, I wore many hats and took the lead in serval roles. Lead developer was one of them, as the sole developer, I was task with building out a mordern reponsive design to feature multiple videos and feature to Market the company and for clients to see finished products. </p>
                <p className=" text-sm  w-[90%] 2xl:w-[85%] lg:text-sm 2xl:text-base lg:leading-relaxed  font-sans mb-3   font-normal ">FilmDUO was built using the latest tech stack such as Next-js, TypeScript and Tailwind. As the sole and lead developer each part of the web application was produce and coded by myself. My goal was to make a responsive design to highlight the video content.</p>
                <a href={'/resume.pdf' } target='_blank'><h2 className=" text-sm lg:text-sm uppercase px-1 py-3 lg:pt-10 hover:text-red-500 duration-500 hover:underline underline-offset-8 hover:translate-x-3">Resume</h2></a>
              </div>
            </div>
        </section>
        <section className="h-full text-[#000000ac] ">
        <div className=" py-8 ">
              <h2 className=" text-2xl py-4  px-8 lg:px-2 md:text-[#000000ac] font-bold uppercase  ">About</h2>
              <hr className="mx-2  w-[90%]" />
            </div>
              <p className=" text-sm lg:text-xs 2xl:text-base  font  font-sans mb-3 px-5 md:px-2 lg:w-[89%] font-normal flex-wrap">Back in 2013, I decided to try my hand at learning how to code and create websites,
              and tumbled head first into the rabbit hole of coding and web development. After many books, online coding program's, and lots of trial & error, 
              I started to get a good feel for web development. 
              But I knew the journey was just beginning!</p>
              <p className=" text-sm lg:text-xs 2xl:text-base  font-sans mb-4 px-5 md:px-2 lg:w-[89%]  font-normal flex-wrap">
              Fast-forward to today, I've been diving into more complex technologies like React, Tailwind, Next-js, and Typescript. As this field continues to change, I am always still learning. 
              Which I enjoy because I like to continually get better at whatever I set my heart and mind too!
              </p>
              <p className=" text-sm lg:text-xs 2xl:text-base  font-sans mb-4 px-5 md:px-2 lg:w-[89%]   font-normal flex-wrap">
              When I’m not at the computer, I’m usually watching the Golden State Warriors, 
              exploring the wild backpacking, or deep into video editing for <span className=' text-lg font-extrabold text-red-600 z-20'><a className=' z-20' href="">FilmDUO.</a></span> 
              </p>
              <Link href={'/Sections/archive'}><h2 className=" w-60 text-sm lg:text-sm uppercase px-2 py-3 lg:pt-10 hover:text-red-500 duration-500 hover:underline underline-offset-8 hover:translate-x-3">View Full Project Archive</h2></Link>
        </section>
    </main>
    </>
  )
}

export default page