import React from 'react'
import businessSalesDashboard from '../assets/Projects/DataAnalytics/BusinessSalesDashboard.png'
import financialComplaintsDashboard from '../assets/Projects/DataAnalytics/financialComplainDashboard.png'
import indianRoadAnalytics from '../assets/Projects/DataAnalytics/RoadAnalyticsMockup.png'
import figma from '../assets/Projects/technologyDrawings/figma.png'
import { Link } from 'react-router-dom';

const DataAnalytics = () => {

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
                <div className='md:subtitle subtitle-mobile'>{title}</div>
                <div className='md:body body-mobile'>{description}</div>
              </div>
              <div className='self-end mt-auto md:smaller-text small-mobile text-secondary-light'>{date}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  const projectData = [
    // Indian Road Analytics  
    {
      projectLink: 'https://github.com/kaihochak/indian-road-analytics/blob/main/Final%20Project%20Report.pdf',
      imageUrl: indianRoadAnalytics,
      imageAlt: 'Indian Road Analytics',
      title: 'Indian Road Analytics',
      description: 'A Machine Learning project that analyzes the road conditions in India and provides insights',
      date: 'September 2023 - December 2023',
      technologies: [
        { src: figma, alt: 'Python'},
        { src: figma, alt: 'Pandas'},
        { src: figma, alt: 'Seaborn'},
        { src: figma, alt: 'PySpark'},
        { src: figma, alt: 'NumPy'},
        { src: figma, alt: 'Jupyter Notebook'},
      ],
    },
    // Financial Complaints Dashboard
    {
      projectLink: 'https://public.tableau.com/app/profile/kusumpreet.kaur.heer/viz/FinancialComplaintsDashboard_17159773224040/Dashboard',
      imageUrl: financialComplaintsDashboard,
      imageAlt: 'Financial Complaints Dashboard',
      title: 'Financial Complaints Dashboard',
      description: 'A Tableau project that analyzes financial complaints and provides insights',
      date: 'March 2024',
      technologies: [
        { src: figma, alt: 'Tableau'},
        { src: figma, alt: 'Excel'},
      ],
    },
    // Business Sales Dashboard
    {
      projectLink: 'https://github.com/kusumpreetheer/Business-Sales-Dashboard',
      imageUrl: businessSalesDashboard,
      imageAlt: 'Business Sales Dashboard',
      title: 'Business Sales Dashboard',
      description: 'A PowerBI project that analyzes business sales and provides insights',
      date: 'April 2024',
      technologies: [
        { src: figma, alt: 'PowerBI'},
        { src: figma, alt: 'Excel'},
        { src: figma, alt: 'SQL'},
      ],
    },
  ]

  return (
    <div className='grid grid-cols-1 gap-4 mb-20 md:grid-cols-3 md:mb-44'>
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

export default DataAnalytics