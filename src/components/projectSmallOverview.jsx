import React from 'react'

const ProjectSmallOverview = ({ name, description, language, link }) => {
    return (
        <a href={link} >
            <div className=' gap-4 px-8 pb-15'>
                <h1 className='text-xl text-white font-bold mt-5 mb-3'>{name}</h1>
                <div className='cursor-pointer flex flex-col  justify-center  items-center  group h-[18rem] w-56 mb-2 bg-neutral-800 hover:bg-neutral-600 rounded-md p-4'>
                    <p className='text-base text-white mb-1  '>{description}</p>
                    <button className='bg-green m-5 rounded-full px-4 py-2'>{language}</button>
                </div>
            </div>
        </a>
    )
}

export default ProjectSmallOverview