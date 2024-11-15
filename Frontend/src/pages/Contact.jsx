import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, MapPin, Mail } from 'lucide-react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const InputField = ({ label, type, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-base font-bold mb-2" htmlFor={label}>

      {label}
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 
      hover:ring-2 hover:ring-blue-300 transition duration-300"
      id={label}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
)

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="w-full font-sans">
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Send Us A Message</h3>
                <form onSubmit={handleSubmit}>
                  <InputField
                    label="Name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputField
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="mb-4">
                  <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="message">
                  Message
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                      focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 
                      hover:ring-2 hover:ring-blue-300 transition duration-300"
                      id="message"
                      rows="4"
                      placeholder="Your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                      type="submit"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-500 mr-3" />
                    <span>281144</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-500 mr-3" />
                    <span>contact@AskIt.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-500 mr-3" />
                    <span>San Street CF, 453001</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default ContactPage