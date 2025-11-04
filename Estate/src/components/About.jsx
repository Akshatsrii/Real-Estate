import React from 'react';
import { motion } from 'framer-motion';

// Mock data for demonstration
const assets = {
  brand_img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'
};

const About = () => {
  return (
    <div
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
      id='About'
    >
      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
        About{' '}
        <span className='relative underline underline-offset-8 decoration-2 decoration-blue-500 font-light'>
          Our Brand
        </span>
      </h1>

      <p className='text-gray-600 max-w-2xl text-center mb-12 text-lg'>
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        {/* Brand Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className='w-full sm:w-1/2 max-w-lg group'
        >
          <div className='relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500'>
            <img
              src={assets.brand_img}
              alt='Brand'
              className='w-full transform group-hover:scale-110 transition-transform duration-700'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
          </div>
        </motion.div>

        {/* Stats and Description Section */}
        <div className='flex flex-col text-gray-600 w-full md:w-1/2 mt-10 md:mt-0'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 mb-10'>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100'
            >
              <p className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>10+</p>
              <p className='text-gray-700 font-medium'>Years of Excellence</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100'
            >
              <p className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>12+</p>
              <p className='text-gray-700 font-medium'>Projects Completed</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100'
            >
              <p className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>20+</p>
              <p className='text-gray-700 font-medium'>Mn. Sq. Ft. Delivered</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100'
            >
              <p className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>25+</p>
              <p className='text-gray-700 font-medium'>Ongoing Projects</p>
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className='my-8 max-w-lg text-gray-600 leading-relaxed text-lg'
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </motion.p>

          {/* Button */}
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 w-fit"
          >
            Learn more
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;