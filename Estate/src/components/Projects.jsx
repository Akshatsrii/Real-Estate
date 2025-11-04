import React, { useState, useEffect } from 'react';

// Mock data for demonstration
const assets = {
  left_arrow: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',
  right_arrow: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>'
};

const projectsData = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    title: 'Modern Villa Estate',
    price: '$2.5M',
    location: 'Beverly Hills, CA'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Downtown Luxury Apartment',
    price: '$1.8M',
    location: 'Manhattan, NY'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Coastal Paradise Home',
    price: '$3.2M',
    location: 'Malibu, CA'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: 'Urban Penthouse Suite',
    price: '$2.9M',
    location: 'Miami, FL'
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const handleProjectClick = (project) => {
    console.log('Project clicked:', project);
  };

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Projects{' '}
        <span className="relative underline underline-offset-8 decoration-2 decoration-blue-500 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        Crafting Spaces, Building Legacies – Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8 gap-3">
        <button
          className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Previous Project"
          onClick={prevProject}
        >
          <img src={assets.left_arrow} alt="Previous" className="w-5 h-5" />
        </button>
        <button
          className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Next Project"
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt="Next" className="w-5 h-5" />
        </button>
      </div>

      {/* Project slider container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / cardsToShow
            }%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/4 cursor-pointer group"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover mb-14 transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="absolute left-0 right-0 bottom-5 flex justify-center px-4">
                <div className="bg-white w-full px-6 py-4 shadow-xl rounded-xl transform group-hover:scale-105 transition-all duration-300 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-sm font-medium">
                    <span className="text-blue-600 font-bold">{project.price}</span> 
                    <span className="mx-2 text-gray-400">|</span> 
                    <span>{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;