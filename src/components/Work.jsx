import React from 'react'
import Promote from '../assets/projects/pgoat.png'
import Hangover from '../assets/projects/hanghelper.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-white bg-[rgb(0,0,0)]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-white border-red-800'>
                    Work
                </p>
                <p className='py-6 font-bold text-xl'>Check out my recent work</p>
            </div>
            {/*Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/*Grid Item*/}
            <div>
                <div style={{backgroundImage: `url(${Hangover})`}}className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white -tracking-wider'>
Hangover Helper
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://maryvda.github.io/Hangover-helper/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/MaryVDa/Hangover-helper'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                        </div>
                    </div>
                </div>
                <div>
                <div style={{backgroundImage: `url(${Promote})`}}className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white -tracking-wider'>
Promote Goat
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://promote-goat.herokuapp.com'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/MaryVDa/Promote-Goat'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Work