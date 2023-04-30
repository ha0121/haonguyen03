import React, { useContext } from 'react';
// import images
import WomanImg from '../img/home/123123.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursor context
import { CursorContext } from '../context/CursorContext';
import CV from '../img/portfolio/CV.pdf';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        {/* text & img wrapper */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'
          >
              <b className='text-[26px] lg:text-[26px] mb-3 lg:mb-1 font-primary'>
                Hi,my name is</b>
            <h1 className='h1 text-primary'>
            Hao im a <br /> 
            </h1>
            <h1 className='h1 text-secondary'>
            UX/UI Designer <br /> 
            </h1>
            <p className='text-[20px] lg:text-[30px] font-primary mb-3 lg:mb-12'>
            I’m a UX/UI Designer specializing in building and occasionally
            designing exceptional digital experiences. Currently, I’m focused on
            building responsive full-stack web applications.
            </p>
            <div className='btn mb-[30px]'>
            <a href={CV} download>Download my CV</a>  
            </div> 
            
          </motion.div>
          {/* image */}
          <div className='flex justify-end max-h-300lg:max-h-max'>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg:-right-40 overflow-hidden'
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt=''
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
