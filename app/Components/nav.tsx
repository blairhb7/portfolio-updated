import Link from 'next/link'
import React from 'react'

const nav = () => {
  return (
    <>
    <main className=" w-screen bg-transparent fixed z-50">
        <nav className=' flex justify-between py-4 px-8 uppercase'>
           <Link href={'/'}> 
                 <div className="flex flex-col">
                    <h1 id='logo' className=" text-xs lg:text-md px-1 font-medium leading-tight text-white shadow-black outline">Blair Chappell <br/> <span className=' text-xslg:text-base'>frontend developer</span></h1>
                 </div>
            </Link>
            <div className="">
            <header>
                <input type='checkbox' id='toggle' className='hidden' />
                <label className='toggle-btn toggle-btn__cross' htmlFor='toggle'>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </label>
                <nav id='navmenu'>
                    <ul className=' flex flex-col gap-4 text-xl justify-center items-center font-light text-white h-screen'>
                    <li className='hover:-translate-x-3 duration-500'><Link className='hover:underline underline-offset-8  duration-500 ' href={'/'}>Home</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='hover:underline underline-offset-8 hover:translate-x-3' href={'/Sections/featureProjects'}>Featured Project</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='hover:underline underline-offset-8 hover:translate-x-3' href={'/Sections/experience-about'}>Experience</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='hover:underline underline-offset-8 hover:translate-x-3' href={'/Sections/archive'}>Project Archive</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='hover:underline underline-offset-8 hover:translate-x-3' href={'/Sections/contact'}>Contact</Link></li>
                    <div className=" flex gap-3 z-50 justify-center py-1 ">
                            <Link href={`https://github.com/blairhb7`}><img className='h-10 w-10' src={"/G.png"} alt={"github"}  /></Link>
                            <Link href={`https://www.linkedin.com/in/blair-chappell-23818420a/`}><img  className='h-10 w-10' src={"/L.png"} alt={"linkedin"}  /></Link>
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