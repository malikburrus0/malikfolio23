import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
    const handleClick = () => {
        console.log('clicked')
    }
  return (
    <div name='home' className='w-full h-screen bg-[rgb(0,0,0)] '>
        (/*Container*/)
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-white' >
                Hi, my name is
            </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[darkred]'>Malik Burrus</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[darkgray]'>I'm a Full Stack Web Developer</h2>
            <p className='text-[darkgray] py-4 max-w-[700px]'>
                I'm a Full Stack Developer based in Michigan. I have a passion for web development and love to create for web and mobile devices.
            </p>
            <div onClick={handleClick}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-800 hover:border-red-800'>
                    <Link onClick={handleClick} to="work" smooth={true}  duration={500}>
                    View Work</Link>
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/> 
                    </span>
                </button>
            </div>
        </div>


    </div>
  )
}

export default Home