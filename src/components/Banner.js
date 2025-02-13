import React from 'react';

import Image from '../assets/a2-removebg-preview (1).png';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className="min-h-[85hv] lg:min-h[78hv] flex itemes-center" id="home">
      <div className="container mx-auto flex items-center justify-center min-h-screen">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 text-center lg:text-left">
          
          <div className="lg:w-1/2 max-w-md">
            <motion.h1 variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once :false , amount:0.7}} className="text-[50px] font-bold leading-[0.8] lg:text-[90px]">
              BOUABIDI <span className="text-accent">KHADIJA</span>
            </motion.h1 >
            <motion.div  variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once :false , amount:0.7}} className="mb-6 text-[28px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={['Developer', 2000, 'Designer', 2000, 'Programmer', 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p  variants={fadeIn('up',0.5)} initial='hidden' whileInView={'show'} viewport={{once :false , amount:0.7}} className="mb-8 max-w-lg mx-auto lg:mx-0">
              I am creative and  passionate about developing projects, finding innovative solutions.
            </motion.p>
            <motion.div  variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once :false , amount:0.7}} className="flex justify-center lg:justify-start gap-x-6 items-center mb-8">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div >
            <motion.div  variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once :false , amount:0.7}} className="flex justify-center lg:justify-start text-[20px] gap-x-6">
              <a href="https://www.linkedin.com/in/khadija-bouabidi-983b49249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="ml-3">
                <FaLinkedin />
              </a>
              <a href="https://github.com/khadijauser" className="ml-3">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/kha.dija_bouabidi?igsh=M2pnMXc0bDg1N2tv" className="ml-3">
                <FaInstagram />
              </a>
            </motion.div >
          </div>

          
          <motion.div  variants={fadeIn('down',0.6)} initial='hidden' whileInView={'show'} viewport={{once :false , amount:0.7}} className="lg:w-1/2 flex justify-center">
            <img src={Image} alt="Profile" className="w-[250px] lg:w-[350px] rounded-full shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
