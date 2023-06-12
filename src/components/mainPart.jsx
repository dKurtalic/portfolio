import React, { useEffect, useState } from 'react';
import Item from './item';
import PhotoImg from '../assets/etf_logo.svg'
import portret from '../assets/portret.jfif'
import bhff from '../assets/bhff.png'
import netwrok2020 from '../assets/network2020logo.png'
import { technologiesLogos } from '../constants';
import { AiFillPlayCircle } from 'react-icons/ai'
import StartAppLogin from '../assets/startapplogin.jpg'
import StartAppRegister from '../assets/startupregister.jpg'
import StartAppExplore from '../assets/startupExplore.jpg'
import ProjectOverview from './projectOverview';
import MealsToPlanPocetna from '../assets/MealsToPlanPocetna.jpg'
import quickChannel from '../assets/quickChannel.png'
import quickVideo from '../assets/quickVideo.png'
import quickExplore from '../assets/quikExplore.png'
import adorea from '../assets/adorea.png'
import yia from '../assets/yia.jpg'
import innovationNation from '../assets/innovationNation.png'
import rgProject1 from '../assets/rgProject.jpg'
import rgProject2 from '../assets/rgProject2.jpg'
import rgProject3 from '../assets/rgProject3.jpg'
import rgProject4 from '../assets/rgProject4.jpg'



const MainPart = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [hover, setHover] = useState(false)
    const [opacity, setOpacity] = useState(0)
    const [textOpacity, setTextOpacity] = useState(0)



    function changeOpacity(scrollPos) {

        const offset = 300
        const textOffset = 10
        if (scrollPos < offset) {
            const newOpacity = 1 - ((offset - scrollPos) / offset)
            setOpacity(newOpacity)
            setTextOpacity(0)
        } else {
            setOpacity(1)
            const delta = scrollPos - offset
            const newTextOpacity = 1 - ((textOffset - delta) / textOffset)
            setTextOpacity(newTextOpacity)
        }
    }


    return (
        <div className=' bg-zinc-900'>


            <div className=' bg-zinc-900'>
                <section className="flex items-end space-x-7 bg-gradient-to-b from-spotifyGreen to-zinc-900 h-80 text-white  p-8">
                    <img className='h-44 w-44 rounded-full' src={portret} />
                    <div>
                        <p className='text-sm font-bold'>Applicant</p>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-extrabold'>Dina Kurtalić</h1>
                    </div>
                </section>
                <div className='space-y-4'>

                    <div className='text-white px-8 flex flex-col space-y-1 pb-6'>
                        <h1 className="text-2xl font-bold  text-white ml-7 mt-3">Education</h1>

                        <div
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            className='text-white text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default'
                        >
                            <div className='flex flex-wrap items-center justify-between'>
                                <div className='flex items-center'>
                                    <div className='text-lightGray mr-3'>1</div>
                                    <img className='h-16 w-16 rounded-xl bg-white p-2' src={PhotoImg} alt="Faculty Logo" />
                                    <div className='ml-3'>
                                        <h1 className='hover:underline font-bold text-lg'>Faculty of Electrical Engineering Sarajevo</h1>
                                        <p className='text-lightGray text-sm'>Department for Computer Science and Informatics</p>
                                    </div>
                                </div>
                                <div>Bachelor degree</div>
                                <div>2020-2023</div>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold  text-white ml-7 mt-3">Leadership and Entrepreneurship</h1>

                        <div
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            className='text-white text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default'
                        >
                            <div className='flex flex-wrap items-center justify-between space-x-3'>
                                <div className='flex items-center space-x-3      md:w-[45%]'>
                                    <div className='text-lightGray mr-3'>1</div>
                                    <img className='h-16 w-16 rounded-xl bg-white p-2' src={bhff} alt="Faculty Logo" />
                                    <div className='flex flex-col '>
                                        <h1 className='hover:underline font-bold text-lg'>BH Futures Foundation</h1>
                                        <p className='text-sm break-word text-lightGray'>One-of-a-kind innovative and prestigious talent-growth program for exceptional individuals in B&H</p>
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <div>Mentoring, Marketing, IT program</div>

                                </div>
                                <div>2020-today</div>

                            </div>




                        </div>
                        <div
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                            className={`text-white text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default`}
                        >
                            <div className='flex flex-wrap items-center justify-between space-x-3 mt-5'>
                                <div className='flex items-center space-x-3 lg:w-[45%] md:w-[45%]'>
                                    <div className='text-lightGray mr-3'>2</div>
                                    <img className='h-16 w-16 rounded-xl bg-white p-2' src={netwrok2020} alt="Faculty Logo" />
                                    <div className='flex flex-col '>
                                        <h1 className='hover:underline font-bold text-lg'>BOLD Fellowship | University at Buffalo School of Management</h1>
                                        <p className='text-sm break-word text-lightGray'>
                                            {isHovered1
                                                ? "Selected as one of the most prosperous candidates from B&H. The BOLD Fellowship Program funded by the United States Department and organized by Network 20/20. It is intensive training in entrepreneurship and leadership at the University of Buffalo School of Management and New York City, giving me a strong foundation for launching ventures and driving business success"
                                                : ("Selected as one of the most prosperous candidates from B&H. The BOLD Fellowship Program funded by the United States Department and organized by Network 20/20. It is intensive training in entrepreneurship and leadership at the University of Buffalo School of Management and New York City, giving me a strong foundation for launching ventures and driving business success".substring(0, 150) + '...')}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <div>Mentoring, Marketing, IT program</div>

                                </div>
                                <div>2020-today</div>
                            </div>
                        </div>


                        <div
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                            className={`text-white text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default`}
                        >
                            <div className='flex flex-wrap items-center justify-between space-x-3 mt-5'>
                                <div className='flex items-center space-x-3 lg:w-[45%] md:w-[45%]'>
                                    <div className='text-lightGray mr-3'>3</div>
                                    <img className='h-16 w-16 rounded-xl bg-white p-2' src={adorea} alt="Faculty Logo" />
                                    <div className='flex flex-col '>
                                        <h1 className='hover:underline font-bold text-lg'>Startup Adoréa</h1>
                                        <p className='text-sm break-word text-lightGray'>
                                            Smart-tech accessories combined with safety app
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <div></div>

                                </div>
                                <div>2020-today</div>
                            </div>
                        </div>

                        <div
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                            className={`text-white text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default`}
                        >

                            <div className='flex flex-wrap items-center justify-between space-x-3 mt-5'>
                                <div className='flex items-center space-x-3 lg:w-[45%] md:w-[45%]'>
                                    <div className='text-lightGray mr-3'>3</div>
                                    <img className='h-16 w-16 rounded-xl bg-white p-2' src={innovationNation} alt="Faculty Logo" />
                                    <div className='flex flex-col '>
                                        <h1 className='hover:underline font-bold text-lg'>Innovation Nation</h1>
                                        <p className='text-sm break-word text-lightGray'>
                                            Innovation Nation Program, the most prestigious and comprehensive entrepreneurship program in Bosnia & Herzegovina.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <div>Raised 3.000 BAM</div>

                                </div>
                                <div>2022</div>
                            </div>
                        </div>


                        <div
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                            className={`text-white text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default`}
                        >
                            <div className='flex flex-wrap items-center justify-between space-x-3 mt-5'>
                                <div className='flex items-center space-x-3 lg:w-[45%] md:w-[45%]'>
                                    <div className='text-lightGray mr-3'>3</div>
                                    <img className='h-16 w-16 rounded-xl bg-white p-2' src={yia} alt="Faculty Logo" />
                                    <div className='flex flex-col '>
                                        <h1 className='hover:underline font-bold text-lg'>Youth Innovation Award</h1>
                                        <p className='text-sm break-word text-lightGray'>
                                            Startup competition organized by the Ambassador of the Kingdom of the Netherland and Institute KULT
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <div>Raised 3.000 BAM</div>

                                </div>
                                <div>2022</div>
                            </div>


                        </div>
                    </div>
                </div>



                <h2 className='text-2xl font-bold px-8 text-white'>Projects</h2>
                <ProjectOverview name="StartApp" images={[StartAppExplore, StartAppLogin, StartAppRegister]} description="The inspiration behind the StartApp application stems from my participation in the BOLD Fellowship Program for Entrepreneurship in New York, USA. As a member of the BOLD Cohort, our collective objective is to enhance the entrepreneurship ecosystem in Bosnia and Herzegovina. To contribute towards this goal, I am currently developing a web application that seeks to facilitate connections between founders and potential teammates with specific skillsets. By simplifying the process of finding co-founders and stakeholders, the aim is to enable easier collaboration and foster the growth of innovative ventures in the region." />
                <ProjectOverview name="Quick" images={[quickExplore, quickVideo, quickChannel]} description="Ad-free Youtube-Student project for practicing" />
                <ProjectOverview name="Computer graphics App" images={[rgProject1, rgProject2, rgProject3, rgProject4]} description="The application allows users to scan a reference photo and then presents a 3D object within the app. Users can interact with the object and access additional information about it within the game. The 3D object was created using Blender, while the app itself was developed using Unity." />


                <div className='flex flex-wrap'>
                    <div className=' gap-4 px-8 pb-28'>
                        <h1 className='text-xl text-white font-bold mt-5 mb-3'>MovieApp</h1>
                        <div className='cursor-pointer flex flex-col  justify-center  items-center  group h-[16rem] w-56 mb-2 bg-neutral-800 hover:bg-neutral-600 rounded-md p-4'>
                            <p className='text-base text-white mb-1  '>Movie recommendation app developed within the course "Mobile app development" as a mandatory project</p>
                            <button className='bg-spotifyGreen m-5 rounded-full px-4 py-2'>Kotlin</button>
                        </div>
                    </div>

                    <div className=' gap-4 px-8 pb-28'>
                        <h1 className='text-xl text-white font-bold mt-5 mb-3'>Survey App</h1>
                        <div className='cursor-pointer flex flex-col  justify-center  items-center group h-[16rem] w-56 mb-2 bg-neutral-800 hover:bg-neutral-600 rounded-md p-4'>
                            <p className='text-base text-white mb-1  '>Survey app developed within the course "Mobile app development" as a final project</p>
                            <button className='bg-spotifyGreen m-5 rounded-full px-4 py-2'>Kotlin</button>

                        </div>
                    </div>

                    <div className=' gap-4 px-8 pb-28'>
                        <h1 className='text-xl text-white font-bold mt-5 mb-3'>Savoir</h1>
                        <div className='cursor-pointer flex flex-col justify-center items-center h-[16rem] w-56 mb-2 bg-neutral-800 hover:bg-neutral-600 rounded-md p-4'>
                            <p className='text-base text-white mb-1'>Savoir is an e-commerce website, collaboratively created as a project for the "Object Oriented Analysis and Design" course.</p>
                            <button className='bg-spotifyGreen rounded-full px-4 py-2'>C#</button>
                        </div>


                    </div>

                    <div className=' gap-4 px-8 pb-28'>
                        <h1 className='text-xl text-white font-bold mt-5 mb-3'>Focus time</h1>
                        <div className='cursor-pointer flex flex-col  justify-center  items-center  group h-[16rem] w-56 mb-2 bg-neutral-800 hover:bg-neutral-600 rounded-md p-4 '>
                            <p className='text-base text-white mb-1  '>An application designed to enhance focus and productivity developed as part of the "ZeroToMastery" course.</p>
                            <button className='bg-spotifyGreen m-5 rounded-full px-4 py-2'>JavaScript</button>
                        </div>
                    </div>

                    <div className=' gap-4 px-8 pb-28'>
                        <h1 className='text-xl text-white font-bold mt-5 mb-3'>Meals To Go</h1>
                        <div className='cursor-pointer flex flex-col  justify-center  items-center  group h-[16rem] w-56 mb-2 bg-neutral-800 hover:bg-neutral-600 rounded-md p-4 '>
                            <p className='text-base text-white mb-1  '>A restaurant recommendation application for e-commerce purposes was developed as part of the "ZeroToMastery" course.</p>
                            <button className='bg-spotifyGreen m-5 rounded-full px-4 py-2'>JavaScript</button>
                        </div>
                    </div>

                    <div className=' gap-4 px-8 pb-28'>
                        <h1 className='text-xl text-white font-bold mt-5 mb-3'>Schedule Web App</h1>
                        <div className='cursor-pointer flex flex-col  justify-center  items-center  group h-[16rem] w-56 h-30 mb-2 bg-neutral-800 hover:bg-neutral-600 rounded-md p-4 '>
                            <p className='text-base text-white mb-1  '>A school schedule web application developed as part of the "Web Technologies" course at the Faculty of Electrical Engineering Sarajevo</p>
                            <button className='bg-spotifyGreen m-5 rounded-full px-4 py-2'>JavaScript</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between ms-5 me-5'>
                    {
                        technologiesLogos.map((technology) => {
                            return (
                                <div className='gap-5 m-6  rounded-full w-10 h-10'>
                                    <img src={technology.icon} />
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </div >
    );
}

export default MainPart;