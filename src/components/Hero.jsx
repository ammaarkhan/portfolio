import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[55%] transform -translate-y-1/2 max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-60 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}text-white text-center`}>Hi, I'm <span className='text-[#915eff]'>Ammaar</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
            CS student passionate about solving meaningful problems and making an impact through technology. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero;

