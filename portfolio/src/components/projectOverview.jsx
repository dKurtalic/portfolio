import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'

const ProjectOverview = ({ name, description, images }) => {
    console.log("Velicina " + images.length)
    return (
        <div className='space-y-2'>
            <div className=' gap-4 px-8 pb-5'>
                <h1 className='text-xl text-white font-bold mt-5 mb-3'>{name}</h1>
                <p className='text-lightGray'>{description}</p>
                <div className='w-full overflow-x-scroll gap-8 flex cursor-pointer relative group  mb-2 bg-neutral-800  rounded-md p-4'>
                    <div className='absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 shadow-2xl shadow-neutral-900 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-green-500 top-[156px] group-hover:top-[148px] right-6'>
                        <AiFillPlayCircle className='h-10 w-10 text-spotifyGreen' />
                    </div>
                    {images.map((slika) => {
                        return (
                            <img className='h-60 mb-4 rounded-xl' src={slika} />
                        )
                    })}

                </div>

            </div>
        </div>

    )
}

export default ProjectOverview