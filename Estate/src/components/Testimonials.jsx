import React from 'react'

// Mock data for demonstration
const testimonialsData = [
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    name: 'Sarah Johnson',
    position: 'Homeowner',
    text: 'Working with this team was an absolute pleasure. They helped us find our dream home and made the entire process seamless and stress-free. Highly recommend!'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    name: 'Michael Chen',
    position: 'Property Investor',
    text: 'Professional, knowledgeable, and always available to answer questions. Their expertise in the market helped me make informed investment decisions.'
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    name: 'Emily Rodriguez',
    position: 'First-time Buyer',
    text: 'As a first-time buyer, I was nervous about the process. The team guided me every step of the way and found me the perfect starter home within my budget.'
  }
]

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      {/* Heading */}
      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
        Customer <span className='relative underline underline-offset-8 decoration-2 decoration-blue-500 font-light'>Testimonials</span>
      </h1>
      <p className='text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg'>
        Real Stories from Those Who Found Home with Us
      </p>

      {/* Testimonials Cards */}
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6'>
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className='bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 rounded-2xl text-center border border-blue-100 transform hover:-translate-y-2 group relative overflow-hidden'
          >
            {/* Decorative gradient overlay */}
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600'></div>
            
            {/* Profile Image */}
            <div className='relative inline-block mb-6'>
              <img
                src={item.image}
                alt={item.name}
                className='w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>

            {/* Name and Position */}
            <h3 className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1'>{item.name}</h3>
            <p className='text-sm text-gray-600 font-medium mb-4'>{item.position}</p>

            {/* Star Rating */}
            <div className='flex justify-center mb-5 gap-1'>
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span 
                    key={i} 
                    className='text-yellow-400 text-xl transform hover:scale-125 transition-transform duration-200 drop-shadow-sm'
                    style={{ 
                      animation: `starPulse 2s ease-in-out ${i * 0.1}s infinite`
                    }}
                  >
                    ★
                  </span>
                ))}
            </div>

            {/* Quote Icon */}
            <div className='text-blue-200 text-5xl leading-none mb-3 font-serif'>"</div>

            {/* Testimonial Text */}
            <p className='text-gray-700 text-base leading-relaxed font-medium'>
              {item.text}
            </p>

            {/* Bottom accent */}
            <div className='mt-6 w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full'></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes starPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  )
}

export default Testimonials