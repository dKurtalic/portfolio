import React, { useEffect, useState } from 'react';

const EducationElement = ({ number, title, description, description2, image, timeSpan, link }) => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [hover, setHover] = useState(false)
    return (
        <div
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            className={`text-white text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default`}
        >
            <a href={link}>
                <div className='flex flex-wrap items-center justify-between space-x-3 mt-5'>
                    <div className='flex items-center space-x-3 lg:w-[45%] md:w-[45%]'>
                        <div className='text-lightGray mr-3'>2</div>
                        <img className='h-16 w-16 rounded-xl bg-white p-2' src={image} alt="Logo" />
                        <div className='flex flex-col '>
                            <h1 className='hover:underline font-bold text-lg'>{title}</h1>
                            <p className="text-sm break-word text-lightGray">
                                {isHovered1 ? description : description.length > 170 ? description.substring(0, 170) + '...' : description}
                            </p>

                        </div>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <div>{description2}</div>

                    </div>
                    <div>{timeSpan}</div>
                </div>
            </a>
        </div>

    )
}

export default EducationElement