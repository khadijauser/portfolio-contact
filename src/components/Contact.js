import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:py-32' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-center'>
          {/* Text */}
          <div className='flex-1 text-center lg:text-left'>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work <br /> together
            </h2>
          </div>
          {/* Form */}
          <form className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 mx-4'>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your name'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              placeholder='Your email'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='tel'
              placeholder='Phone number'
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg self-center text-xl px-8 py-4'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
    

