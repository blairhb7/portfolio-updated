"use client"
import Link from 'next/link'
import React from 'react'
import ContactForm from '@/app/Components/ContactForm'
import Image from 'next/image'
import Nav from '@/app/Components/nav'



const page = () => {


    //bg-[url('/background-img.svg')]
  return (
    <>
    
    <main  className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 ">
   <Nav/>
        <section className=" bg-cover relative  h-full overflow-hidden ">
            <div className="absolute  flex justify-center items-center w-full h-full container-3d   ">
                <ul  className=" hidden lg:flex flex-col lg:gap-44 gap-2 opacity-50  z-50 w-full lg:pl-[5%] xl:px-[10%] 2xl:px-[25%]">
                    <li className="z-50 "><div className="box-3d ease-in-out   duration-200"><h1 className=" text-4xl lg:text-[12em] font-sans  text-white font-extrabold">Say</h1></div></li>
                    <li className="z-50 "><div className="box-3d ease-in-out  duration-200"><h1 className=" text-4xl lg:text-[12em] font-sans  text-white  font-extrabold">Hello</h1></div></li>
                </ul>
            </div>
            <video autoPlay loop muted playsInline className="LandingVid" src="/phone.mp4"></video>
        </section>
        <section className="   overflow-hidden">
            <div className="">
                <ul  className=" flex  gap-10 lg:gap-24  text-[#000000ac] uppercase justify-center  w-full px-6 py-20 ">
                    <li className=""><div className=" duration-200  font-serif ease-in-out "><h1 className=" text-xl xl:text-[2em] lg:leading-10  duration-100 font-extrabold">Call <br/>Me</h1></div></li>
                    <li className=""><div className=" duration-200  font-serif ease-in-out "><h1 className=" text-xl xl:text-[2em] lg:leading-10    duration-100 font-extrabold">Email<br/> Me</h1></div></li>
                    <li className=""><div className=" duration-200 font-serif ease-in-out "><h1 className=" text-xl xl:text-[2em]  lg:leading-10   duration-100 font-extrabold">Message<br/> Me</h1></div></li>
                </ul>
            </div>
            <div  className="flex flex-col justify-center  bg-[#ffffff]    ">
                <div className="  font-serif ease-in-out lg:p-5   duration-200">
                <hr className=" text-3xl bg-black text-[#000000ac] my-6" />
                <div className=" drop-cap p-10 xl:pt-16 xl:px-16 xl:w-[99%] 2xl:px-[12%] leading-relaxed text-[#000000ac] lg:text-lg">
                    Thank you for taking the time to explore my profile and learn more about my skills and experience. 
                    If you have any inquiries, project proposals, or would like to discuss potential collaborations, 
                    I am excited to connect with you. Please feel free to reach out to me via email at <span  className=' text-green-400 uppercase'><a href="mailto:blairhb7@yahoo.com">Blairhb7@gmail.com</a></span>. 
                    I am looking forward to hearing from you and exploring how we can work together to achieve our mutual goals.
                    </div>
                    
                    <div  className="">
                        <ContactForm/>
                    </div>
                    <div className=" h-[270px] xl:h-[300px] 2xl:px-[5%] px-3 w-full flex justify-center items-center gap-2 ">
                        <Link href={'tel:17073154173'} ><h2 className=" text-black flex  items-center text-sm lg:text-base font-light h-20 pr-6 border-r-2 lg:border-r-2 border-gray-200 ">+7073154173</h2></Link>
                        <Link href={'mailto:blairhb7@yahoo.com'} ><h2 className=" text-black flex  items-center uppercase text-sm lg:text-base font-light h-20">Blairhb7@gmail.com</h2></Link>
                        <div className=" flex gap-3 justify-center py-1 ">
                            <Link href={`https://github.com/blairhb7`}><img className='h-10 w-10' src={"/github-circle.png"} alt={"github"}  /></Link>
                            <Link href={`https://www.linkedin.com/in/blair-chappell-23818420a/`}><img  className='h-10 w-10' src={"/Linkedin-circle (1).png"} alt={"linkedin"}  /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </main>
    </>
  )
}

export default page