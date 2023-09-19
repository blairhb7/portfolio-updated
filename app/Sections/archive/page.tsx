"use client"
import React, { useState } from 'react'
import { type } from 'os'
import { link } from 'fs'
import Link from 'next/link'
import projectArchive from '@/app/Data/data'
import Nav from '@/app/Components/nav'

 

const Archive = () => {

  const [archive, setSrchive] = useState(projectArchive)


  return (
    <>
    
    <main  className=" flex flex-col h-full ">
    <Nav/>
      <section className=" py-40 px-10">
        <h1 className=" text-3xl md:text-7xl font-light uppercase Name  lg:text-[#000000ac] px-5 ">Project Archive</h1>
        <h4 className=" text-xs text-[#000000ac]  uppercase lg:hidden lg:text-[#000000ac]  ">For best experience view on a Desktop</h4>
      </section>
      <section className="  px-[4%]   md:w-[1200px]">
       
        {
          archive.map((Projects: { year: any; project: any; techstack: any; Link: any; id: any; color: any }) => {
            const {year, project, techstack, Link, id, color } = Projects
            return (
              <div key={project}>
              <div   className=" grid grid-cols-3 lg:grid-cols-4 px-2 lg:px-2  py-6 gap-2 lg:gap-2 text-[#000000ac]   hover:text-white hover:bg-[#4c4c4c61] duration-500 hover:rounded-lg">
                <h2  className=" text-sm lg:text-lg font-medium">{year}</h2>
                <h2   className={` text-xs  lg:text-lg font-medium uppercase  `}>{project}</h2>
                <ul  className="  hidden sm:visible lg:grid grid-cols-2 xl:inline-flex  w-[70%] xl:w-full flex-wrap items-center text-[.7em]  px-8 2xl:text-sm gap-3">
                      <li  className=" bg-[#000000ac]  text-white px-2 mb-1  rounded-lg">{techstack[0]}</li>
                      <li className=" bg-[#000000ac]  text-white px-2 mb-1  rounded-lg">{techstack[1]}</li>
                      <li className=" bg-[#000000ac]  text-white px-2 mb-1  rounded-lg">{techstack[2]}</li>
                      <li className=" bg-[#000000ac]  text-white px-2  mb-1  rounded-lg">{techstack[3]}</li>
                      <li className= {`bg-[#000000ac]  text-white px-2 mb-1  rounded-lg ${id === 5  ? 'hidden' : 'visble'}`}>{techstack[4]}</li>
                </ul>
                <a href={Link}><h2 className=" flex flex-wrap w-fit font-bold text-[.5em] xl:text-sm lg:pl-4">{Link}</h2></a>
              </div>
              <hr className=" " />
              </div>
            )
          })
        }
      </section>
    </main>
    </>
  )
}

export default Archive