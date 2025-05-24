import React, {  use, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ThemeContext } from "../../provider/ThemeProvider";

const faqs = [
  {
    id: 1,
    question: "How do I find a compatible roommate?",
    answer:
      "You can use filters like location, budget, lifestyle preferences, and interests to find suitable roommates."
  },
  {
    id: 2,
    question: "Is it safe to share my information?",
    answer:
      "Yes, we verify all users and provide a secure environment for communication through our built-in chat system."
  },
  {
    id: 3,
    question: "Can I edit my listing after posting?",
    answer:
      "Absolutely. Go to 'My Listings', and you'll find options to update or delete your posts anytime."
  },
  {
    id: 4,
    question: "What happens if I delete my listing?",
    answer:
      "Once deleted, your listing will be permanently removed from the platform and will not be visible to others."
  },
  {
    id: 5,
    question: "Is there a cost for using this platform?",
    answer:
      "No, the platform is completely free to use for finding and posting roommate listings."
  }
];

const Faq = () => {
  const [openId, setOpenId] = useState(null);
  const { darkMode } = use(ThemeContext);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={`py-14 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? "text-white" : "text-[#f2555d]"}`}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-xl shadow-md transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className={`text-lg font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>
                  {faq.question}
                </span>
                {openId === faq.id ? (
                  <ChevronUp className="text-[#f2555d]" />
                ) : (
                  <ChevronDown className="text-[#f2555d]" />
                )}
              </button>
              {openId === faq.id && (
                <div className={`px-5 pb-5 text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
