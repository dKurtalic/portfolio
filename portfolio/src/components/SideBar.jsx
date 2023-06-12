import React from 'react'
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
import { technologiesLogos } from '../constants'
const SkillButton = ({ skill }) => {
    const handleMouseEnter = (e) => {
        e.target.style.transform = 'scale(1.15)';
        e.target.style.backgroundColor = '#1ed760';
    };

    const handleMouseLeave = (e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.backgroundColor = 'spotifyGreen';
    };

    return (
        <div
            className="skill-button bg-spotifyGreen text-white rounded-full py-2 px-4 m-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {skill}
        </div>
    );
};


const skills = [
    'Teamwork',
    'Communication',
    'Creativity',
    'Adaptability',
    'Problem-solving',
    'Time management',
    'Continuous learning',
];

const SideBar = () => {


    return (
        <div className=' lg:h-full bg-black  p-5 text-white flex-wrap'>
            <h6 className='font-bold mt-8 mb-5'>Contant information</h6>
            <div className='p-2 m-2'>
                <AiOutlineMail className='m-2' />
                <p>dkurtalic1@etf.unsa.ba</p>
                <p>dina.kurtalic@gmail.com</p>
            </div>

            <div className='p-2 cursor-pointer'>
                <a href="https://www.linkedin.com/in/dina-kurtali%C4%87-382735201" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className='m-2' />
                    <p>LinkedIn profile</p>
                </a>
            </div>

            <div className='p-2 cursor-pointer'>
                <a href="https://www.google.com/maps/place/sarajevo+bosnia+and+herzegovina/data=!4m2!3m1!1s0x4758cbb1ed719bd1:0x562ecda6de87b33e?sa=X&ved=2ahUKEwjZrqbo0b3_AhXChP0HHYYfDDAQ8gF6BAgOEAE" target="_blank" rel="noopener noreferrer">

                    <SlLocationPin className='m-2' />
                    <p className=''>Sarajevo,</p><p>Bosnia and Herzegovina</p>
                </a>
            </div>

            <div className='p-2'>
                <AiOutlineMobile className='m-2' />
                <p>+38762761758</p>
            </div>

            <h6 className='font-bold mt-8 mb-5'>Languages</h6>
            <div className="flex flex-col">
                <p className="text-sm ml-2">English - C1 (IELTS)</p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-spotifyGreen h-2.5 rounded-full w-[100%]" ></div>
                    </div>
                </div>
                <p className="text-sm ml-2">German - C1 (DSD II)</p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-spotifyGreen h-2.5 rounded-full w-[100%]" ></div>
                    </div>
                </div>
                <p className="text-sm ml-2">Bosnian - native language</p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-spotifyGreen h-2.5 rounded-full w-[100%]" ></div>
                    </div>
                </div>
                <p className="text-sm ml-2">Croatian </p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-spotifyGreen h-2.5 rounded-full w-[100%]" ></div>
                    </div>
                </div>
                <p className="text-sm ml-2">Serbian </p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-spotifyGreen h-2.5 rounded-full w-[100%]" ></div>
                    </div>
                </div>
                <p className="text-sm ml-2">Italian </p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-spotifyGreen h-2.5 rounded-full w-[20%]" ></div>
                    </div>
                </div>
            </div>

            <h6 className='font-bold mt-8 '>Skills</h6>
            <div className="flex flex-wrap">
                {skills.map((skill, index) => (
                    <SkillButton key={index} skill={skill} />
                ))}
            </div>


            <h6 className='font-bold mt-8 '>Familiar technologies</h6>
            <div>
                {
                    technologiesLogos.map((technology) => {
                        return (<div className='flex m-3'>{technology.name}
                            <img src={technology.icon} className='ml-2 w-5 h-5' />
                        </div>)
                    })
                }
            </div>
            <div className="h-screen flex flex-col bg-black">
                <div className="flex-grow">
                </div>
            </div>
            <div className="h-screen flex flex-col bg-black">
                <div className="flex-grow">
                </div>
            </div>


        </div>
    )
}

export default SideBar
