import React from 'react';

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'Go to the login page, click on "Forgot Password?", and follow the instructions sent to your email.'
  },
  {
    question: 'How can I contact support?',
    answer: 'You can use the contact form on our Contact page or email us directly at support@roommatefinder.com.'
  },
  {
    question: 'How do I report a suspicious user?',
    answer: 'Please contact us immediately with the user details. We take safety seriously and will investigate promptly.'
  },
  {
    question: 'Can I edit my listing after posting?',
    answer: 'Yes, go to My Listings, select the listing you want to edit, and make your changes.'
  }
];

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Support</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Need help? Browse our frequently asked questions or reach out to our support team. We're here to assist you!
      </p>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-[#f2555d] mb-1">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#ffeaea] rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-2 text-[#f2555d]">Still need help?</h2>
        <p className="text-gray-700 mb-3">Contact our support team and we'll get back to you as soon as possible.</p>
        <a
          href="mailto:support@roommatefinder.com"
          className="inline-block bg-[#f2555d] text-white font-semibold px-6 py-2 rounded hover:bg-[#bd7579] transition"
        >
          Email Support
        </a>
      </div>
    </div>
  );
};

export default Support;