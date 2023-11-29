import React from 'react'
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
import { technologiesLogos, skills } from '../constants'


const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.15)';
    e.target.style.backgroundColor = '#2f75c2';
};
const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.backgroundColor = '#2f75c2';
};
const handleMouseLeave2 = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.backgroundColor = '#0d0d0f';
};
const SkillButton = ({ skill }) => {
    return (
        <div
            className="skill-button bg-lightBlue text-white rounded-md py-2 px-4 m-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {skill}
        </div>
    );
};
const ContactButton = ({ information, link, icon }) => {
    return (
        <a
            href={link}
            className="skill-button bg-darkGray text-white rounded-xl w-full py-2 px-4 m-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave2}
        >
            {icon} {information}
        </a>
    );
};



const SideBar = () => {


    return (

        <div className="top-0 bg-darkGray p-5 text-white">

            <h6 className='font-bold ml-2 b-5'>Contact information</h6>

            <div className="flex flex-wrap">
                <ContactButton className='p-2 cursor-pointer' information={"dkurtalic1@etf.unsa.ba\ndina.kurtalic@gmail.com"} icon={<AiOutlineMail />} />
                <ContactButton className='p-2 cursor-pointer' information={"LinkedIn link"} link={"https://www.linkedin.com/in/dina-kurtali%C4%87-382735201"}></ContactButton>
                <ContactButton className='p-2 cursor-pointer' information={"Sarajevo, Bosnia and Herzegovina"} link={"https://www.google.com/maps/place/sarajevo+bosnia+and+herzegovina/data=!4m2!3m1!1s0x4758cbb1ed719bd1:0x562ecda6de87b33e?sa=X&ved=2ahUKEwjZrqbo0b3_AhXChP0HHYYfDDAQ8gF6BAgOEAE"} icon={<SlLocationPin />} />
                <ContactButton className='p-2 cursor-pointer' information={"+38762761758"} icon={<AiOutlineMobile />} />
            </div>
            <h6 className='font-bold mt-8 mb-5'>Languages</h6>
            <div className="flex flex-col">
                <p className="text-sm ml-2">Bosnian - native language</p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-lightBlue h-2.5 rounded-full w-[100%]" ></div>
                    </div>
                </div>
                <p className="text-sm ml-2">English - C1 (IELTS)</p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-lightBlue h-2.5 rounded-full w-[100%]" ></div>
                    </div>
                </div>
                <p className="text-sm ml-2">German - C1 (DSD II)</p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-lightBlue h-2.5 rounded-full w-[100%]" ></div>
                    </div>
                </div>

                <p className="text-sm ml-2">Croatian </p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-lightBlue h-2.5 rounded-full w-[100%]" ></div>
                    </div>
                </div>
                <p className="text-sm ml-2">Serbian </p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-lightBlue h-2.5 rounded-full w-[100%]" ></div>
                    </div>
                </div>
                <p className="text-sm ml-2">Italian </p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-lightBlue h-2.5 rounded-full w-[35%]" ></div>
                    </div>
                </div>
                <p className="text-sm ml-2">Spanish </p>
                <div className="flex items-center mb-2 p-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-lightGray">
                        <div className="bg-lightBlue h-2.5 rounded-full w-[10%]" ></div>
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



            <div className='hidden lg:block'>
                <div className='h-screen' />
                <div className='h-screen' />
                <div className='h-screen' />
                <div className='h-screen' />
                <div className='h-screen' />
                <div className='h-[50vh]' />
            </div>

        </div >


    )
}

export default SideBar
