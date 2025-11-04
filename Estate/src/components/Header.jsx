import React from 'react';
import Navbar from './Navbar';
import { motion } from "motion/react"

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden relative"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-10 w-full">
        <Navbar />
      </div>

      {/* Header Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative z-10"
      >
        <motion.h2 
          className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-bold pt-20 leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            Explore
          </motion.span>
          {" "}
          <span className="drop-shadow-2xl">
            homes that fit your dreams
          </span>
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-8 rounded-full"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="space-x-6 mt-16"
        >
          <motion.a
            href="#Projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 shadow-lg backdrop-blur-sm bg-white/10"
          >
            Projects
          </motion.a>
          <motion.a
            href="#Contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-xl"
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="mt-20"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated particles/stars effect */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;