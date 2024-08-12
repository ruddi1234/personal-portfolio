import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { ruddi } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Rudraksh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
         <div className="flex flex-col mt-5 gap-3">
         <div className="flex flex-col space-y-4">
  <a
    href="https://www.linkedin.com/in/rudraksh-girdhar/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-blue-700 hover:text-blue-900"
  >
    <i className="fab fa-linkedin text-2xl"></i>
    <span>LinkedIn</span>
  </a>
  <a
    href="https://github.com/ruddi1234"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
  >
    <i className="fab fa-github text-2xl"></i>
    <span>GitHub</span>
  </a>
  <a
    href="https://www.instagram.com/ruddi_9192__"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-pink-600 hover:text-pink-400"
  >
    <i className="fab fa-instagram text-2xl"></i>
    <span>Instagram</span>
  </a>
</div>


         </div>
        </div>
        <img src={ruddi}></img>
      </div>

     

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
