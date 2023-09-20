import Link from 'next/link'
import React from 'react'

const nav = () => {
  return (
    <>
    <main className=" w-screen bg-transparent fixed z-50">
        <nav className=' flex justify-between py-4 px-8 uppercase'>
           <Link href={'/'}> 
                 <div className="flex flex-col">
                    <h1 id='logo' className=" text-[.8em] lg:text-md px-1 font-medium leading-tight text-white shadow-black outline">Blair Chappell <br/> <span className=' text-xslg:text-base'>frontend developer</span></h1>
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
             
            </header>

            </div>
        </nav>
    </main>
    </>
  )
}

export default nav