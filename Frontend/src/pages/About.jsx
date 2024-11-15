import React from 'react'
import Navbar from '../component/Navbar'  
import Footer from '../component/Footer';
const About = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />  

      <div className="max-w-7xl mx-auto p-6 bg-white">
        <section className="text-center py-12 ">
          <h1 className="text-4xl font-bold text-gray-800">About Our polls Creater</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We empower businesses, creators, and individuals with an intuitive platform 
            that offers AI-driven tools to build, manage, and scale Quizzes. Whether you 
            want to know majority responses, grow your audience, or streamline operations, 
            our platform has you covered.
          </p>
        </section>

        <section className="flex flex-col md:flex-row gap-8 py-12">
          <div className="flex-1 text-center p-6 shadow-lg rounded-lg bg-gray-50 transition-transform transform hover:scale-105 hover:bg-purple-50 cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#4517ff]">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              We aim to provide you with a limitless polls and quizzes-building experience to help 
              you achieve your online ambitions effortlessly.
            </p>
          </div>
          <div className="flex-1 text-center p-6 shadow-lg rounded-lg bg-gray-50 transition-transform transform hover:scale-105 hover:bg-purple-50 cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#4517ff]">Why Choose Us?</h2>
            <p className="mt-4 text-gray-600">
              Our platform is user-friendly, adaptable, and packed with features to 
              support businesses of all sizes. Whether you're an entrepreneur or an 
              established company, we provide the tools to succeed online.
            </p>
          </div>
          <div className="flex-1 text-center p-6 shadow-lg rounded-lg bg-gray-50 transition-transform transform hover:scale-105 hover:bg-purple-50 cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#4517ff]">What We Offer</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>🚀 AI-Powered Quiz Builder</li>
              <li>🖱️ Drag-and-Drop Features</li>
              <li>🌐 Link Provider </li>
              <li>💼 limitless Polls Creation for free</li>
            </ul>
          </div>
        </section>

        <section className="text-center py-16 bg-[#4517ff] text-white rounded-lg">
          <h3 className="text-3xl font-bold">Join Us Today!</h3>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Start building some Quizzes and Polls  of your dreams with our feature-rich, easy-to-use platform. 
            Empower your business and grow your online presence.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-200 cursor-pointer transition-colors duration-300 ease-in-out">
            Get Started
          </button>
        </section>

        
      </div>
      <Footer/>
    </div>
  )
}

export default About