import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LilconIcon from './LilconIcon';
import { FaCircle } from "react-icons/fa";

const Details = ({ title, description, points }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className='relative flex flex-col my-8 first:mt-0 last:mb-0'>
      <LilconIcon reference={ref} />
      <div>
        <div className='h3 text-primary-dark'>{title}</div>
        <div className='body text-primary-dark'>{description}</div>
        <div className='space-y-2 text-primary-dark'>
          {points.map((point, index) => (
            <div key={index} className='flex items-center'>
              <FaCircle className='w-3 h-3 mr-2' />
              {point}
            </div>
          ))}
        </div>
      </div>
    </li>
  )
};

const Roadmap = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );

  return (
    <>
      <div>Roadmap</div>

      <div className='relative mx-auto'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute w-[4px] -left-1.5 top-4 h-[80%] bg-black origin-top'
        />

        <ul className='flex flex-col items-start justify-between w-full ml-4 space-y-4'>
          {/* call details function */}
          <Details
            title='First MVP'
            description='This is the first MVP of the project'
            points={['point 1', 'point 2', 'point 3']}
          />
          <Details
            title='Second MVP'
            description='This is the second MVP of the project'
            points={['point 1', 'point 2', 'point 3']}
          />
          <Details
            title='Third MVP'
            description='This is the third MVP of the project'
            points={['point 1', 'point 2', 'point 3']}
          />
          <Details
            title='Fourth MVP'
            description='This is the fourth MVP of the project'
            points={['point 1', 'point 2', 'point 3']}
          />
        </ul>
      </div>
    </>
  )
}

export default Roadmap