import React from 'react'
import typeScript from '../assets/Projects/technologyDrawings/typeScript.png'
import react from '../assets/Projects/technologyDrawings/react.png'
import tailwind from '../assets/Projects/technologyDrawings/tailwind.png'
import nextJS from '../assets/Projects/technologyDrawings/nextJS.png'
import vercel from '../assets/Projects/technologyDrawings/vercel.png'
import figma from '../assets/Projects/technologyDrawings/figma.png'
import shadCN from '../assets/Projects/technologyDrawings/shadCN.png'
import courseRaterImg from '../assets/Projects/WebDev/CourseRater.png'
import Roadmap from '../ui/Roadmap'

const CourseRater = () => {
    return (
            <div className='py-32 wrapper'>
                {/* heading */}
                <div className='flex items-baseline justify-between'>
                    <div className='flex items-baseline gap-x-4'>
                        <div className='h1'>CourseRater</div>
                        <div className='body'>Making Rating your professors easier</div>
                    </div>
                    <div className='body text-primary-dark'>April 24 - Present</div>
                </div>

                {/* technologies */}
                <div className='flex py-2 bg-transparent rounded-md w-14 h-14 gap-x-6'>
                    <img src={typeScript} alt={"TypeScript"} />
                    <img src={nextJS} alt={"NextJS"} />
                    <img src={react} alt={"React"} />
                    <img src={tailwind} alt={"Tailwind"} />
                    <img src={figma} alt={"Figma"} />
                    <img src={vercel} alt={"Vercel"} />
                    <img src={shadCN} alt={"ShadCN"} />
                </div>

                {/* Hero image */}
                <div>Hero Images</div>

                {/* Introduction */}
                <div className='subtitle text-primary-dark'>
                    Introduction
                </div>

                <section className='flex overflow-scroll gap-x-10'>

                    {/* navbar */}
                    <div className='sticky top-0 h-screen'>
                        <div className='relative flex flex-col items-center h-full pr-10 border-r-2 border-primary-dark'>
                            <ul className="flex flex-col items-center h-full space-y-6 overflow-y-auto subtitle text-primary-light">
                                <div className="flex flex-col items-center">
                                    <li className="block mb-2"><a href="#goal">Goal</a></li>
                                    <div className="w-0.5 h-10 bg-primary-light"></div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <li className="block mb-2"><a href="#team">Team</a></li>
                                    <div className="w-0.5 h-10 bg-primary-light"></div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <li className="block mb-2"><a href="#roadmap">Roadmap</a></li>
                                    <div className="w-0.5 h-10 bg-primary-light"></div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <li className="block mb-2"><a href="#design">Design</a></li>
                                    <div className="w-0.5 h-10 bg-primary-light"></div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <li className="block mb-2"><a href="#implementation">Implementation</a></li>
                                    <div className="w-0.5 h-10 bg-primary-light"></div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <li className="block mb-2"><a href="#notes">Notes</a></li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    {/* content */}
                    <div className='w-full mx-auto space-y-16'>
                        {/* Goal */}
                        <div id="goal" className="space-y-6">
                            <h2 className='h2'>Goal</h2>
                            <p className='subtitle text-primary-dark'>Goal Section</p>
                        </div>

                        {/* Team */}
                        <div id="team" className="space-y-6">
                            <h2 className='h2'>Team</h2>
                            <p className='subtitle text-primary-dark'>Team Section</p>
                        </div>

                        {/* Roadmap */}
                        <div id="roadmap" className="space-y-6">
                            <h2 className='h2'>Roadmap</h2>
                            <p className='subtitle text-primary-dark'>Roadmap Section</p>
                            <Roadmap />
                        </div>

                        {/* Design */}
                        <div id="design" className="space-y-6">
                            <h2 className='h2'>Design</h2>
                            <p className='subtitle text-primary-dark'>Design Section</p>
                        </div>

                        {/* Implementation */}
                        <div id="implementation" className="space-y-6">
                            <h2 className='h2'>Implementation</h2>
                            <p className='subtitle text-primary-dark'>Implementation Section</p>
                        </div>

                        {/* Notes */}
                        <div id="notes" className="space-y-6">
                            <h2 className='h2'>Notes</h2>
                            <p className='subtitle text-primary-dark'>Notes Section</p>
                        </div>
                    </div>

                </section>


            </div>
    )
}

export default CourseRater