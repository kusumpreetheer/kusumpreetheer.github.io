import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"

const LilconIcon = ({ reference }) => {

    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

    return (
        <figure className='absolute left-0 transform -translate-x-1/2 -top-5'>
            <svg width="75" height="140" viewBox="0 0 130 130">
                <circle cx="30" cy="20" r="20" className="" />
            </svg>
        </figure>
    )
}

export default LilconIcon