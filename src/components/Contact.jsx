import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[rgb(0,0,0)] text-white flex justify-center items-center p-4">
        <form method='POST' action="https://getform.io/f/54a9ba9b-327d-46dc-bf53-20606bae7ea1" className="flex flex-col max-w-[600px] w-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-800'>
                    Contact
                </p>
                <p className='py-4 font-bold text-xl'>
                    Submit the form below to get in touch with me, or send me an email at - malikburrus0@gmail.com
                </p>
            </div>
            <input className='bg-gray text-black p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-white text-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-white p-2 text-black' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-red-800 hover:border-red-800 px-4 py-3 my-8 mx-auto flex items-center'>Let's Code!</button>
        </form>
    </div>
  )
}

export default Contact