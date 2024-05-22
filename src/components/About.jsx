
import React from 'react';
import Tilt from 'react-parallax-tilt';
import {styles} from '../styles';
import {services} from '../constants';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}><span className='text-[#915eff]'>Overview</span></h2>
      </div>

      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    I am an experienced developer with proficiency in Python, Java and JavaScript. I'm a self starter and love collaborating with people on meaningful projects. Currently I'm working at CGI as a Full Stack Developer Intern (my 9-5) and building Brokol (my 5-9)
      </p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />         
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")
