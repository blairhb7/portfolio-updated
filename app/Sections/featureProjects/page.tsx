"use client"
import React, { useEffect, useState } from 'react'
import data, { slides } from '@/app/Data/data'
import { link } from 'fs'
import { url } from 'inspector'
import { title } from 'process'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/app/Components/nav'





const Page = () => {
  const [featureProjects, setFeatureProjects] = useState<any>(slides)
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((newSlide) => {
        const result = (newSlide + 1) % featureProjects.length;
        return result
    })
}

const prev = () => {
    setIndex((newSlide) => {
        const result = (newSlide - 1 + featureProjects.length) % featureProjects.length;
        return result
    })
}




useEffect(() => {
  let slider = setInterval(() => {
    setIndex((oldIndex) => {
      const result = (oldIndex + 1) % featureProjects.length;
      return result;
    });
  }, 11000);
  return () => {
    clearInterval(slider);
  };
}, [index]);


  return (
    <>
    <Nav/>
    <main  className=" relative h-full ">
      
    
      
   
        {featureProjects.map(( feature: {color:string, pic:string, firstline:string, secondline:string, thirdline:string, forthline:string, length:number, id:number, vid:string, title:string, date:string, disc:string, React:string, Next:string, Javascript:string, Typescript:string, Tailwind:string, Sanity:string, Vercel:string, Linksite:string}, slideIndex:number) =>{
          const {id, color, vid, pic, title, firstline, secondline, thirdline, forthline, date, React, Next, Javascript, Typescript, Tailwind, Sanity, Vercel, Linksite} = feature

          let postion = 'nextSlide'
          if (slideIndex === index) {
            postion = 'activeSlide'
          }
          if (slideIndex === index -1 || (index === 0 && slideIndex === featureProjects.length -1)){
            postion = 'lastSlide'
          }


          return (
            <div  key={slideIndex}   className="grid grid-cols-1 lg:grid-cols-2  absolute transition-all ease-linear duration-700   ">
              <div  style={{ opacity: slideIndex === index ? 1 : 0, visibility: slideIndex === index ? 'visible' : 'hidden',}} className="  flex justify-center transition-all ease-linear duration-1000 h-full  ">
              <h1   className="flex  justify-center absolute pt-[4%] text-3xl uppercase text-title text-white  z-50">{title}</h1>
              <h2   className="flex text-xs justify-center absolute text-white pt-[12%] z-50 lg:hidden">Scroll Down For More</h2>
              <video src={vid} autoPlay loop muted playsInline className="LandingVid  "></video>
              </div>
              
              <div  style={{ opacity: slideIndex === index ? 1 : 0, visibility: slideIndex === index ? 'visible' : 'hidden'}} className=" h-full grid grid-cols-1 justify-between transition-all ease-linear duration-1000   ">
              <div className=" flex lg:flex-col  items-end gap-2 justify-end absolute opacity-90 hover:opacity-90  z-40  py-4 px-3 ">
                  <div onClick={next} className=" cursor-pointer    duration-1000 flex justify-center items-center">
                    <Image width={500} height={500}  src={"/down.png" } alt={""} className=" w-8 h-8" />
                    
                  </div>
                  <div onClick={prev} className="cursor-pointer   duration-1000 flex justify-center items-center">
                    <Image width={500} height={500}    src="/up.png" alt="" className=" w-8 h-8" />
                  </div>
              </div>
                <div  className="flex-col flex  z-30 bg-black text-[#fff] h-screen lg:pt-5 lg:pb-64 2xl:pt-10 pt-10 overflow-y-scroll scrollbar-hide   px-8 lg:pl-16">
                    <h1  style={{color}} className=" text-4xl xl:text-8xl py-5 font-serif uppercase font-semibold">{title}</h1>
                    <p  className=" text-sm lg:text-base  lg:font-normal lg:w-[97%] 2xl:w-[65%] py-2">{firstline}</p>
                    <p  className=" text-sm lg:text-base  lg:font-normal  lg:w-[97%] 2xl:w-[65%] py-2">{secondline}</p>
                    <p  className=" text-sm lg:text-base  lg:font-normal  lg:w-[97%] 2xl:w-[65%] py-2">{thirdline}</p>
                    <hr  className="w-[85%] my-5" />
                    <a href={Linksite} style={{color}} className=" z-50 cursor-pointer"><h2 className=" cursor-pointer text-2xl py-5 lg:py-8 font-semibold duration-500 hover:underline underline-offset-8 hover:translate-x-3">Visit Site</h2></a>
                    <a  href={Linksite} className=' cursor-pointer z-50'><Image width={500} height={500}  src={pic} alt="" className="  cursor-pointer w-[74%] lg:max-w-[75%] 2xl:w-[55%] overflow-hidden " /></a>
                </div>
                  
              </div>
              
            </div>
          )
          })
        }
    </main>
    </>
  )
}

export default Page