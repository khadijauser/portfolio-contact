import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Gestion des changements dans les inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await axios.post('mongodb://127.0.0.1:27017/khadija', formData);
      setResponseMessage('Message envoyé avec succès !');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Réinitialisation du formulaire
    } catch (error) {
      setResponseMessage('Erreur lors de l\'envoi. Réessayez plus tard.');
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='py-16 lg:py-32' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-center'>
          {/* Texte */}
          <div className='flex-1 text-center lg:text-left'>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work <br /> together
            </h2>
          </div>
          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 mx-4'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              name='name'
              placeholder='Your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              name='email'
              placeholder='Your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='tel'
              name='phone'
              placeholder='Phone number'
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              name='message'
              placeholder='Your message'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type='submit'
              className='btn btn-lg self-center text-xl px-8 py-4'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
            {responseMessage && (
              <p className='text-center mt-4'>{responseMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
