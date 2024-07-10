import React from 'react'
import macbook from '../assets/macbook.png'
import courseRater from '../assets/Projects/WebDev/CourseRater.png'
import theClickerGame from '../assets/Projects/WebDev/theClickerGame.png'
import chairPostureCorrector from '../assets/Projects/WebDev/chairPostureCorrector.png'
import phoneScreenUnlock from '../assets/Projects/WebDev/phoneScreenUnlock.png'
import localMarketplace from '../assets/Projects/WebDev/localMarketplace.png'
import myUcalgary from '../assets/Projects/WebDev/myUcalgary.png'
import figma from '../assets/Projects/technologyDrawings/figma.png'
import mantine from '../assets/Projects/technologyDrawings/mantine.png'
import nextJS from '../assets/Projects/technologyDrawings/nextJS.png'
import react from '../assets/Projects/technologyDrawings/react.png'
import shadCN from '../assets/Projects/technologyDrawings/shadCN.png'
import tailwind from '../assets/Projects/technologyDrawings/tailwind.png'
import typeScript from '../assets/Projects/technologyDrawings/typeScript.png'
import vercel from '../assets/Projects/technologyDrawings/vercel.png'
import arduino from '../assets/Projects/technologyDrawings/arduino.png'
import vueJS from '../assets/Projects/technologyDrawings/vueJS.png'
import uiux from '../assets/Projects/technologyDrawings/uiux.png'
import { Link } from 'react-router-dom';

const WebDev = () => {

    const ProjectTemplate = ({ projectLink, imageUrl, imageAlt, title, description, date, technologies = [] }) => {
        return (
            <div className='aspect-w-1 aspect-h-1'>
                <Link to={projectLink} className='block'>
                    <div className='relative flex flex-col justify-between h-full p-4 overflow-hidden rounded-md shadow-md group bg-primary'>
                        {/* Background Image */}
                        <div className='absolute inset-0 flex flex-col items-center justify-center w-full h-full mt-auto'>
                            <img src={imageUrl} alt={imageAlt} className='object-fill w-72 h-60' />
                        </div>

                        {/* Top Color Divs */}
                        <div className='relative z-10 flex items-start transition-all duration-300 gap-x-2 group-hover:-translate-y-full group-hover:opacity-0'>
                            {technologies.map((tech, idx) => (
                                <div key={idx} className='w-8 h-8 bg-transparent rounded-md'>
                                    <img src={tech.src} alt={tech.alt} />
                                </div>
                            ))}
                        </div>

                        {/* Bottom Description Text */}
                        <div className='relative z-10 flex flex-col mt-auto transition-all duration-300 group-hover:translate-y-full group-hover:opacity-0'>
                            <div>
                                <div className='subtitle'>{title}</div>
                                <div className='body'>{description}</div>
                            </div>
                            <div className='self-end mt-auto smaller-text text-secondary-light'>{date}</div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }

    const projectData = [
        // CourseRater
        {
            projectLink: 'https://course-rater.vercel.app/',
            imageUrl: courseRater,
            imageAlt: 'CourseRater',
            title: 'CourseRater',
            description: 'A Website which is used to rate university level courses',
            date: 'April 24 - Present',
            technologies: [
                { src: typeScript, alt: 'TypeScript' },
                { src: nextJS, alt: 'NextJS' },
                { src: react, alt: 'React' },
                { src: tailwind, alt: 'Tailwind' },
                { src: figma, alt: 'Figma' },
                { src: shadCN, alt: 'ShadCN' },
            ],
        },
        // Local Marketplace
        {
            projectLink: 'https://local-marketplace.vercel.app/',
            imageUrl: localMarketplace,
            imageAlt: 'Local Marketplace',
            title: 'Local Marketplace',
            description: 'An application for growing the local community by connecting service providers and customers.',
            date: 'Feb 24 - April 24',
            technologies: [
                { src: typeScript, alt: 'TypeScript' },
                { src: nextJS, alt: 'NextJS' },
                { src: react, alt: 'React' },
                { src: tailwind, alt: 'Tailwind' },
                { src: figma, alt: 'Figma' },
                { src: shadCN, alt: 'ShadCN'},
                { src: mantine, alt: 'Mantine' },
                { src: vercel, alt: 'Vercel' },
            ],
        },
        // MyUcalgary 2.0
        {
            projectLink: 'https://github.com/Vic-Han/SENG-401-Project',
            imageUrl: myUcalgary,
            imageAlt: 'MyUcalgary2.0',
            title: 'MyUcalgary 2.0',
            description: 'A Redesign of the University of Calgary’s student portal, MyUcalgary.',
            date: 'Jan 24 - April 24',
            technologies: [
                { src: tailwind, alt: 'Tailwind' },
                { src: figma, alt: 'Figma' },
                { src: vueJS, alt: 'VueJS' },
            ],
        },
        // Chair Posture Corrector
        {
            projectLink: 'https://github.com/kaihochak/posture-corrector',
            imageUrl: chairPostureCorrector,
            imageAlt: 'Macbook',
            title: 'Chair Posture Corrector',
            description: 'An innovative posture corrector that alerts users when they slouch.',
            date: 'December 23',
            technologies: [
                { src: arduino, alt: 'Arduino'},
                { src: uiux, alt: 'UI/UX' },
            ],
        },
        // Phone Screen Unlock
        {
            projectLink: 'https://github.com/kaihochak/guitar-screen-lock?tab=readme-ov-file',
            imageUrl: phoneScreenUnlock,
            imageAlt: 'Macbook',
            title: 'Phone Screen Unlock',
            description: 'An engaging multi-touch unlocking system.',
            date: 'November 23',
            technologies: [
                { src: uiux, alt: 'UI/UX'}
            ],
        },
        // The Clicker Game
        {
            projectLink: 'https://github.com/kaihochak/clicker',
            imageUrl: theClickerGame,
            imageAlt: 'Macbook',
            title: 'The Clicker Game',
            description: 'Interactive application designed to improve hand-eye coordination and reflex responses.',
            date: 'October 23',
            technologies: [
                { src: uiux, alt: 'UI/UX'} 
            ],
        },
    ];

    return (
        <div className='grid grid-cols-3 gap-4 mb-44'>
            {projectData.map((project, index) => (
                <ProjectTemplate
                    key={index}
                    projectLink={project.projectLink}
                    imageUrl={project.imageUrl}
                    imageAlt={project.imageAlt}
                    title={project.title}
                    description={project.description}
                    date={project.date}
                    technologies={project.technologies}
                />
            ))}
        </div>
    )
}

export default WebDev