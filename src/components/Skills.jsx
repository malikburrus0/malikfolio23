import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import ReactIcon from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'


const Skills = () => {
  return (
    <div name='skills' className="w-full h-screen bg-[rgb(0,0,0)] text-white">
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-red-800'>Skills
                </p>
                <p className='py-4 font-bold text-xl '> These are the technologies I have worked with:</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6'>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="Css" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JS} alt="Javascript" />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactIcon} alt="React" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node" />
                        <p className='my-4'>Node.js</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="GitHub" />
                        <p className='my-4'>GitHub</p>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default Skills