
import React, { useState } from 'react';

const Item = () => {
    const [hover, setHover] = useState(false)


    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='grid grid-cols-2 text-neutral-400 text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default'>
            <div className='flex items-center space-x-4'>
                <div>
                    <p className='w-36 lg:w-64 truncate text-white text-base'>Trackname</p>
                    <p className='w-36 truncate'>
                        {

                        }
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-between ml-auto md:ml-0'>
                <p className='w-40 truncate hidden md:inline'>Album name</p>

            </div>
        </div>
    );
}

export default Item;