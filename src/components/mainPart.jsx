import React, { useEffect, useState } from 'react';
import etf from '../assets/etf_logo.svg'
import ucv from '../assets/ucv.png'
import portret from '../assets/portret.jfif'
import diplomska from '../assets/diplomska.jpg'
import bhff from '../assets/bhff.png'
import zendev from '../assets/zendevLogoo.jpg'
import infobip from '../assets/infobipLogoo.jpg'
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
import adoreaVideo from '../assets/AdoreaBrandVideo2022compressed.mp4'
import yia from '../assets/yia.jpg'
import innovationNation from '../assets/innovationNation.png'
import rgProject1 from '../assets/rgProject.jpg'
import rgProject2 from '../assets/rgProject2.jpg'
import rgProject3 from '../assets/rgProject3.jpg'
import rgProject4 from '../assets/rgProject4.jpg'
import ProjectSmallOverview from './projectSmallOverview';
import ContactForm from './contactForm';
import EducationElement from './educationElement';
import StartupPage1 from '../assets/startupPage1.jpg'
import StartupPage2 from '../assets/startupPage2.jpg'
import JobDescription from '../assets/JobDescription.jpg'
import innovationNation1 from '../assets/innovationNation.jpg'
import goldmanSachs from '../assets/goldmanSachs1.jpg'
import goldmanSachs2 from '../assets/goldmanSachs2.jpg'
import adorea1 from '../assets/adoreaPano.jpg'
import yia1 from '../assets/yia1.jpg'
import yia2 from '../assets/yia2.jpg'
import prototypes from '../assets/prototypes.jpg'
import withEddie from '../assets/eddieBhff.jpg'
import bracelet from '../assets/narukvica.jpg'
import wad from '../assets/wad.jpg'
import withMentor from '../assets/enadina.jpg'
import berlin from '../assets/berlin.jpg'
import nycSkyline from '../assets/nycSkyline2.jpg'
import cornellTech from '../assets/cornellTechLogo.svg'
import revolutionary from '../assets/revolutionary.jpg'
import dancingMonkey from '../assets/dancingMonkey.jpg'
import billieEilish from '../assets/billie.jpg'

const MainPart = () => {

    const [opacity, setOpacity] = useState(0)
    const [textOpacity, setTextOpacity] = useState(0)
    const [isHovered1, setIsHovered1] = useState(false);
    const [hover, setHover] = useState(false)


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

    function openFile(linkUrl) {
        window.open(linkUrl);
    }

    return (
        <div className=' bg-zinc-900'>
            <div className=' bg-zinc-900'>
                <section className="flex items-end space-x-2 h-80 text-white  p-3 mb-4 pl-5"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(24, 24, 27, 0), rgba(24, 24, 27, 1)), url(${nycSkyline})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: '#18181b',
                    }}>
                    <img className='h-[14rem]  rounded-full' src={diplomska} />
                    <div>
                        <p className='text-sm font-bold'>Applicant</p>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-extrabold'>Dina Kurtalić</h1>
                    </div>
                </section>
                <div className='space-y-4'>
                    <div className='text-white px-10 flex flex-col space-y-1 pb-6'>
                        <h1 className="text-2xl font-bold  text-white ml-7 mt-3">Education</h1>
                        <EducationElement number="1" title="Faculty of Electrical Engineering Sarajevo" link="https://www.etf.unsa.ba/en/o-nama" image={etf} description="Department for Computer Science and Informatics" description2="Bachelor degree" timeSpan="2020-2023" />
                        <EducationElement number="2" title="Universidad Católica de Valencia" link="https://www.ucv.es/" image={ucv} description="Department for Business" description2="Bachelor degree" timeSpan="2024" />
                        <h1 className="text-2xl font-bold  text-white ml-7 mt-3 pt-10">Internships</h1>
                        <EducationElement number="1" title="ZenDev" link="https://www.zendev.se/" description2="Software Engineering Intern" timeSpan="July - Aug 2023" image={zendev} description="A software development company headquartered in Sweden and Bosnia, engaged in client projects, startups, and the development of their proprietary software products. During my internship, I had the opportunity to work on an in-house software solution designed to streamline employee engagement in the company's projects." />
                        <EducationElement number="2" title="Infobip" link="https://www.infobip.com" description2="Software Engineering Intern" timeSpan="Aug 2023 - current" image={infobip} description="Throughout my internship at Infobip, I actively participated in crafting a solution centered around email within a micro-service platform. My responsibilities encompassed writing meticulously structured code, debugging, provisioning virtual machines, and implementing optimizations. I engaged with a diverse set of technologies, including Java Spring Boot, Bash scripting for developing scripts, creating scripts for Docker and Flyway, as well as generating graphs through Grafana and Prometheus. This experience not only familiarized me with working in a dynamic environment but also placed significant responsibility, given that my code directly impacted our clients. The presence of excellent mentors played a pivotal role in guiding my growth as both a software engineer and a professional." />
                        <h1 className="text-2xl font-bold  text-white ml-7 mt-3 pt-10">Leadership and Entrepreneurship</h1>
                        <EducationElement number="1" title="BOLD Fellowship | University at Buffalo School of Management" link="https://network2020.org/entrepreneurial-diplomacy/southeast-europe/about-the-bold-fellowship-program/" images={[goldmanSachs, goldmanSachs2]} description="Recognized as one of the top candidates nationwide, I was selected for the prestigious BOLD Fellowship, a program funded by the United States Department. This intensive training in entrepreneurship and leadership, held at the University of Buffalo School of Management and in New York City, has endowed me with a robust foundation for launching ventures and achieving notable success in the business realm. Notably, I had the honor of presenting a final pitch at Goldman Sachs in New York City." image={netwrok2020} timeSpan="2023" />
                        <EducationElement number="2" title="Startup Adoréa" image={adorea} video={adoreaVideo} images={[adorea1, prototypes, bracelet]} link="https://adorea.ba/" description="Smart-tech accessories combined with a safety app" timeSpan="2022-2023" />
                        <EducationElement number="3" title="BH Futures Foundation" link="https://www.bhfuturesfoundation.org/" description2="Mentoring, Marketing" timeSpan="2020-today" image={bhff} images={[withEddie, wad, withMentor, berlin]} description="One-of-a-kind innovative and prestigious talent-growth program for exceptional individuals in B&H" />
                        <EducationElement number="4" title="Innovation Nation" image={innovationNation} link="https://www.bhfuturesfoundation.org/innovation-nation-2022" timeSpan="2022" images={[innovationNation1]} description="Innovation Nation Program, the most prestigious and comprehensive entrepreneurship program in Bosnia & Herzegovina." />
                        <EducationElement number="5" title="Youth Innovation Award" image={yia} images={[yia1, yia2]} timeSpan="2022" description="Startup competition organized by the Ambassador of the Kingdom of the Netherland and Institute KULT" />
                    </div>
                </div>

                <h2 className='text-2xl font-bold px-8 pt-10 text-white'>Projects</h2>
                <p className='text-gray px-8'>To view the repositories, simply click on them.</p>
                <ProjectOverview name="Guardie" description={"I observed the challenge faced by skiers and snowboarders in transporting their heavy ski equipment from accommodations, hotels, and parking areas to ski lifts and back. This issue is particularly prominent on Bjelašnica, a mountain in Bosnia and Herzegovina, where numerous apartments and hotels are situated about a 20-minute walk away from the ski lift. Motivated by this, I decided to launch a project aimed at installing ski lockers in close proximity to the ski lift on Bjelašnica. This initiative allows skiers to conveniently store their equipment and retrieve it as needed. Securing a substantial grant from the US Embassy in Bosnia and Herzegovina for this project, I am currently in the development phase."} />
                <ProjectOverview name="StartApp" images={[StartAppExplore, StartAppLogin, StartAppRegister, StartupPage1, StartupPage2, JobDescription]} description="The inspiration behind the StartApp application stems from my participation in the BOLD Fellowship Program for Entrepreneurship in New York, USA. As a member of the BOLD Cohort, our collective objective is to enhance the entrepreneurship ecosystem in Bosnia and Herzegovina. To contribute towards this goal, I am currently developing a web application that seeks to facilitate connections between founders and potential teammates with specific skillsets. By simplifying the process of finding co-founders and stakeholders, the aim is to enable easier collaboration and foster the growth of innovative ventures in the region. The data used is purely fictitious and intended solely for the purpose of showcasing functionalities." link="https://github.com/dKurtalic/boldapp" />
                <ProjectOverview name="Quik" images={[quickExplore, quickVideo, quickChannel]} description="Ad-free Youtube - Student project for practicing" link="https://github.com/dKurtalic/quikk" />
                <ProjectOverview name="Computer graphics App" images={[rgProject1, rgProject2, rgProject3, rgProject4]} description="The application allows users to scan a reference photo and then presents a 3D object within the app. Users can interact with the object and access additional information about it within the game. The 3D object was created using Blender, while the app itself was developed using Unity." link="https://drive.google.com/drive/folders/1KRQ9aTf0gRJ-b-z2iRyR9Fp-eq2giqMa?usp=sharing" />


                <div className='flex flex-wrap justify-center'>

                    <ProjectSmallOverview name="Movie app" description="Movie recommendation app developed within the course 'Mobile app development'" language="Kotlin" link="https://github.com/dKurtalic/MovieApp" />
                    <ProjectSmallOverview name="Survey App" description="Survey app developed within the course 'Mobile app development' as a final project" language="Kotlin" link="https://github.com/dKurtalic/SurveyApp" />
                    <ProjectSmallOverview name="Savoir" description="Savoir is an e-commerce website, collaboratively created as a project for the 'Object Oriented Analysis and Design' course." language="C#" link="https://github.com/dKurtalic/Savoir" />
                    <ProjectSmallOverview name="Focus time" description="An application designed to enhance focus and productivity developed as part of the 'ZeroToMastery' course." language="Javascript" link="https://github.com/dKurtalic/focustime" />
                    <ProjectSmallOverview name="Meals To Go" description="A restaurant recommendation application for e-commerce purposes was developed as part of the 'ZeroToMastery' course." language="Javascript" link="https://github.com/dKurtalic/MealsToGo" />
                    <ProjectSmallOverview name="Schedule Web App" description="A school schedule web application developed as part of the 'Web Technologies' course at the Faculty of Electrical Engineering Sarajevo" language="Javascript" link="https://github.com/dKurtalic/WT" />
                    <ProjectSmallOverview name="DiagnoseMe" description="Developed during the Ankora Hackathon, this web app employs GPT models to analyze images and identify medical conditions such as melanoma, rashes, etc." language="Javascript" link="https://github.com/Ankora-Hackathon/team-1-frontend" />

                </div>

                <h1 className="text-2xl font-bold  text-white ml-7 mt-10">Familiar technologies</h1>
                <div className='flex flex-wrap justify-between ms-5 me-5'>
                    {
                        technologiesLogos.map((technology) => {
                            return (
                                <div className='gap-5 m-6  rounded-full w-12 h-12'>
                                    <img src={technology.icon} />
                                </div>
                            )
                        })

                    }
                </div>
                <div>
                    <h1 className="text-2xl font-bold  text-white ml-7 mt-10">Hobbies</h1>
                    <div className='flex'>
                        <ProjectSmallOverview image={billieEilish} link={"https://www.instagram.com/p/CF-MRoBDjDN/"} />
                        <ProjectSmallOverview image={dancingMonkey} link={"https://www.instagram.com/p/B-7vHpIjNMd/"} />
                        <ProjectSmallOverview image={revolutionary} link={"https://www.instagram.com/p/B-z7o4WDfDM/"} />
                    </div>
                </div>
                <ContactForm />
            </div>
            <div>
                <h2 className="text-2xl font-bold  text-black ml-7 mt-10">Prepared for</h2>
                <img src={cornellTech} />
            </div>
        </div >
    );
}

export default MainPart;

//<button className='absolute top-5 right-5 rounded-full m-2 p-5 shadow-md bg-steelBlue' onClick={() => openFile("https://drive.google.com/file/d/1LbjYgmwfohVCrRt4MUIlViAZkTm8Jvki/view?usp=sharing")}>Letter of recommendation</button>
