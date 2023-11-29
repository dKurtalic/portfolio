import React, { useRef } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai'
const ScrollableSlideshow = ({ images }) => {
    const slideshowRef = useRef(null);

    const scrollLeft = () => {
        slideshowRef.current.scrollBy({
            left: -slideshowRef.current.offsetWidth,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        slideshowRef.current.scrollBy({
            left: slideshowRef.current.offsetWidth,
            behavior: 'smooth',
        });
    };
    return (
        <div className='space-y-4'>
            <h2 className='text-xl font-bold px-8'>Projects</h2>
            <div className='relative w-full px-8 pb-28'>
                <div className='flex gap-4 overflow-x-auto pb-4' >

                    <div className=' cursor-pointer relative group bg-neutral-800 hover:bg-neutral-600 rounded-md p-4' >
                        {images.map((image, index) => (
                            <div className='flex' ref={slideshowRef}>
                                <div className=' absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 shadow-2xl shadow-neutral-900 z-10 h-9 w-9 flex items-center justify-center rounded-full bg-lightBlue top-[156px] group-hover:top-[148px] right-6' key={index}>
                                    <AiFillPlayCircle className='h-10 w-10 text-lightBlue' />
                                </div>
                                <img className='w-full mb-4 rounded-xl' src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>

                </div>
                <button className='absolute top-1/2 transform -translate-y-1/2 left-0' onClick={scrollLeft}>
                    Scroll Left
                </button>
                <button className='absolute top-1/2 transform -translate-y-1/2 right-0' onClick={scrollRight}>
                    Scroll Right
                </button>
            </div>
        </div>
    );
};

export default ScrollableSlideshow;
