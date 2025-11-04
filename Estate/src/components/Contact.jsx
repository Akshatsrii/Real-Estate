import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "fc21808f-9972-47f8-9d3c-36601afe9914");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message has been sent successfully!");
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      setResult("Something went wrong. Please try again!");
    }
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Contact{" "}
        <span className="relative underline underline-offset-8 decoration-2 decoration-blue-500 font-light">
          With Us
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg"
      >
        Ready to Make a Move? Let's Build Your Future Together
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-500"
      >
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="w-full md:w-1/2 text-left">
            <label className="text-gray-700 font-semibold mb-2 block">
              Your Name
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                className="w-full border-2 border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300"
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-left">
            <label className="text-gray-700 font-semibold mb-2 block">
              Your Email
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                className="w-full border-2 border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300"
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
        </div>

        <div className="text-left mb-8">
          <label className="text-gray-700 font-semibold mb-2 block">
            Message
          </label>
          <div className="relative group">
            <span className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </span>
            <textarea
              className="w-full border-2 border-gray-200 rounded-xl py-3 pl-12 pr-4 h-40 resize-none focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300"
              name="Message"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform"
        >
          Send Message
        </motion.button>
      </motion.form>

      {result && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-center font-semibold mt-8 px-8 py-4 rounded-xl inline-block shadow-lg ${
            result.includes("successfully")
              ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-2 border-green-200"
              : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border-2 border-red-200"
          }`}
        >
          {result}
        </motion.p>
      )}
    </div>
  );
};

export default Contact;