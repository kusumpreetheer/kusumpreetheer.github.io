import React from 'react'
import macbook from '../assets/macbook.png'

const WebDev = () => {

    const ProjectTemplate = ({ projectLink, imageUrl, imageAlt, title, description, date }) => {
        return (
            <div className='aspect-w-1 aspect-h-1'>
                <a href={projectLink} target="_blank" rel="noopener noreferrer" className='block'>
                    <div className='relative flex flex-col justify-between h-full p-4 overflow-hidden rounded-md shadow-md group bg-primary-light'>
                        {/* Background Image */}
                        <div className='absolute inset-0 flex flex-col items-center justify-center w-full h-full mt-auto'>
                            <img src={imageUrl} alt={imageAlt} className='object-fill w-56 h-56' />
                        </div>

                        {/* Top Color Divs */}
                        <div className='relative z-10 flex items-start transition-all duration-300 gap-x-2 group-hover:-translate-y-full group-hover:opacity-0'>
                            <div className='bg-[#E18686] w-8 h-8 rounded-md'></div>
                            <div className='bg-[#F6D7C7] w-8 h-8 rounded-md'></div>
                            <div className='bg-[#EFD67C] w-8 h-8 rounded-md'></div>
                            <div className='bg-[#C2EAAA] w-8 h-8 rounded-md'></div>
                            <div className='bg-[#C6E9E7] w-8 h-8 rounded-md'></div>
                            <div className='bg-[#B1CBF2] w-8 h-8 rounded-md'></div>
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
                </a>
            </div>
        );
    }

    const projectData = [
        // CourseRater
        {
            projectLink: 'https://github.com/kaihochak/courseRater',
            imageUrl: macbook,
            imageAlt: 'CourseRater',
            title: 'CourseRater',
            description: 'A Website which is used to rate university level courses',
            date: 'April 24 - Present',
        },
        // Local Marketplace
        {
            projectLink: 'https://github.com/kaihochak/local_marketplace',
            imageUrl: macbook,
            imageAlt: 'Local Marketplace',
            title: 'Local Marketplace',
            description: 'An application for growing the local community by connecting service providers and customers.',
            date: 'Feb 24 - April 24',
        },
        // MyUcalgary 2.0
        {
            projectLink: 'https://github.com/Vic-Han/SENG-401-Project',
            imageUrl: macbook,
            imageAlt: 'MyUcalgary2.0',
            title: 'MyUcalgary 2.0',
            description: 'A Redesign of the University of Calgary’s student portal, MyUcalgary.',
            date: 'Jan 24 - April 24',
        },
        // Chair Posture Corrector
        {
            projectLink: 'https://github.com/kaihochak/courseRater',
            imageUrl: macbook,
            imageAlt: 'Macbook',
            title: 'Chair Posture Corrector',
            description: 'An innovative posture corrector that alerts users when they slouch.',
            date: 'December 23',
        },
        // Phone Screen Unlock
        {
            projectLink: 'https://github.com/kaihochak/courseRater',
            imageUrl: macbook,
            imageAlt: 'Macbook',
            title: 'Phone Screen Unlock',
            description: 'An engaging multi-touch unlocking system.',
            date: 'November 23',
        },
        // The Clicker Game
        {
            projectLink: 'https://github.com/kaihochak/courseRater',
            imageUrl: macbook,
            imageAlt: 'Macbook',
            title: 'The Clicker Game',
            description: 'Interactive application designed to improve hand-eye coordination and reflex responses.',
            date: 'October 23',
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
                />
            ))}
        </div>
    )
}

export default WebDev