import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[rgb(0,0,0)]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 text-white'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-800'>
                        About
                    </p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4  text-white'>
                        <div className='sm: text-right text-4xl font-bold'>
                           <p>
                            Hi there! My name's Malik, and its nice to meet you! Have a look around!</p> 
                        </div>
                        <div>
                            <p>
                            I'm a Full Stack Developer based in Michigan. I recently have been certified by Michigan State University. I have a passion for web development and love to create for web and mobile devices.
                            </p>
                        </div>
                    </div>
         
        </div>

    </div>
  )
}

export default About