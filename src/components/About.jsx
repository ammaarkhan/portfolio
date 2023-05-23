import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({index, title, icon }) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview</h2>
      </motion.dev>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I'm a skilled software developer with experience in Python and Java, expertise in frameworks like Flutter and ML libraries such as Tensorflow. I'm a self starter and love collaborating with people on projects in fields such as robotics, machine learning and application development. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />

        ))}

      </div>
    </>
  )
}

export default About