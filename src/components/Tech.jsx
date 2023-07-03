import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText} mb-4`}><span className='text-[#915eff]'>Technical Skills</span></h2>
      
      <div className="flex flex-row flex-wrap justify-center gap-10"> 
        {technologies.slice(0, 16).map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");