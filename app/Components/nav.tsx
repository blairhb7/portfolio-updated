import Link from 'next/link'
import React from 'react'

const nav = () => {

    


  return (
    <>
    <main className="  bg-transparent fixed z-50">
        <nav className=' flex justify-between py-4 px-2 uppercase'>
           <Link href={'/'}> 
                 <div className="flex flex-col">
                    <h1 id='logo' className=" hidden md:block text-[.5em] md:text-sm px-1 font-medium leading-tight text-white shadow-black outline">Blair Chappell <br/> <span className=' text-xslg:text-base'>frontend developer</span></h1>
                    <img src={'/b-5.png'} alt="" className=" md:hidden w-6" />
                 </div>
            </Link>
            <div className="">
            <header>
                <input type='checkbox' id='toggle' className='hidden' />
                <label className='toggle-btn px-1 ' htmlFor='toggle'>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </label>
                <nav id='nav' className=' menu'>
                    <ul className=' z-50 list flex flex-col gap-2 text-sm md:text-xl  items-center font-light text-white h-screen'>
                    <li className=' hover:-translate-x-3 duration-500'><Link className='Link hover:underline underline-offset-8  duration-500 ' href={'/'}>Home</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='Link  hover:underline underline-offset-8 hover:translate-x-3' href={'/Sections/featureProjects'}>Featured Project</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='Link  hover:underline underline-offset-8 hover:translate-x-3' href={'/Sections/experience-about'}>Experience</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='Link  hover:underline underline-offset-8 hover:translate-x-3' href={'/Sections/archive'}>Project Archive</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='Link  hover:underline underline-offset-8 hover:translate-x-3' href={'/Sections/contact'}>Contact</Link></li>
                    <div className=" flex gap-3 z-50 justify-center py-1 ">
                            <Link href={`https://github.com/blairhb7`}><img className='h-10 w-10 hover:-translate-y-1 duration-200' src={"/G.png"} alt={"github"}  /></Link>
                            <Link href={`https://www.linkedin.com/in/blair-chappell-23818420a/`}><img  className='h-10 w-10 hover:-translate-y-1 duration-200' src={"/L.png"} alt={"linkedin"}  /></Link>
                    </div>
                    </ul>
                    
                </nav>
            </header>

            </div>
        </nav>
    </main>
    </>
  )
}

export default nav