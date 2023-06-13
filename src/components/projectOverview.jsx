import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'

const ProjectOverview = ({ name, description, images, link }) => {
    console.log("Velicina " + images.length)
    return (
        <a href={link}>
            <div className='space-y-2'>
                <div className=' gap-4 px-8 pb-5'>
                    <h1 className='text-xl text-white font-bold mt-5 mb-3'>{name}</h1>
                    <p className='text-lightGray mb-3'>{description}</p>
                    <div className='w-full overflow-x-scroll gap-8 flex cursor-pointer relative group  mb-2 bg-neutral-800  rounded-md p-4'>

                        {images.map((slika) => {
                            return (
                                <img className='h-60 mb-4 rounded-xl' src={slika} />
                            )
                        })}

                    </div>

                </div>
            </div>
        </a>
    )
}

export default ProjectOverview