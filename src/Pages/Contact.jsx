import React, { useState } from 'react';

const Contact = () => {

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Have questions or need support? Fill out the form below or reach us directly. We're here to help!
      </p>
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        {submitted ? (
          <div className="text-green-600 text-center text-lg font-semibold">Thank you for reaching out! We'll get back to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"

                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"

                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"

                required
                rows={5}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f2555d] text-white font-semibold py-2 rounded hover:bg-[#bd7579] transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
      <div className="bg-indigo-50 rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700 mb-1">Email: <a href="mailto:support@roommatefinder.com" className="text-[#f2555d] underline">support@roommatefinder.com</a></p>
        <p className="text-gray-700">Phone: <a href="tel:+8801234567890" className="text-[#f2555d] underline">+880 1234 567 890</a></p>
      </div>
    </div>
  );
};

export default Contact;