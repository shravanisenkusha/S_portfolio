import React, { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { products, services } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsGrid from "../components/ui/ProductsGrid";
import HeroHeader from "../components/HeroHeader";
import TimelineSection from "../components/TimeLine";
import Internship from "./Internship";

// Example answers for quick FAQ (you can customize these)
const answers = {
  "What services do you offer?": "We provide web development, mobile apps, and cloud solutions.",
  "How can I contact support?": "You can reach us via the contact form or live chat.",
  "Do you offer internships?": "Yes, check out the internship section for details."
};

export default function HomePage() {
  const [showChatBox, setShowChatBox] = useState(false);
  const [customQuestion, setCustomQuestion] = useState("");
  const [faqHistory, setFaqHistory] = useState([]);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Detect footer visibility (so button style can change)
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  // Handle quick question click
  const handleQuestionClick = (question) => {
    setFaqHistory((prev) => [...prev, { question, answer: answers[question] }]);
  };

  // Handle custom question
  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    setFaqHistory((prev) => [
      ...prev,
      { question: customQuestion, answer: "Thank you! Our team will respond soon." }
    ]);
    setCustomQuestion("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroHeader />
      <TimelineSection />

      {/* Internship Section */}
      <Internship />

      {/* Products Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsGrid
            products={products}
            title="All Products"
            subtitle="Explore our complete range of innovative solutions designed to transform your business"
            showFeatures={true}
            maxFeatures={2}
          />
        </div>
      </section>

      {/* Services Carousel Section 
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <ServicesCarausel services={services} />
        </div>
      </section>*/}

      <Footer />

      {/* Chat Button */}
      <button
        onClick={() => setShowChatBox((prev) => !prev)}
        className={`fixed bottom-20 right-4 sm:right-6 p-4 rounded-full shadow-xl transition duration-300 z-50
          ${isFooterVisible
            ? "bg-white text-purple-600 border border-purple-500"
            : "bg-purple-600 text-white hover:bg-purple-700"}`}
        aria-label="Chat with Us"
      >
        {showChatBox ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat Box */}
      {showChatBox && (
        <div className="fixed bottom-28 right-4 sm:right-6 w-[95%] sm:w-80 max-h-[500px] bg-white shadow-2xl border border-gray-200 rounded-xl p-4 z-50 overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-purple-600" />
            Chat with Us
          </h3>
          <p className="text-sm text-gray-600 mb-3">Quick Questions:</p>
          <div className="space-y-2 mb-4">
            {Object.keys(answers).map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestionClick(q)}
                className="block w-full text-left px-3 py-2 border border-gray-300 rounded-md hover:bg-purple-50 hover:border-purple-400 transition"
              >
                {q}
              </button>
            ))}
          </div>
          <form onSubmit={handleCustomSubmit} className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="Type your own question..."
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              Ask
            </button>
          </form>
          {faqHistory.length > 0 && (
            <div className="border-t pt-2">
              {faqHistory.map((item, idx) => (
                <div key={idx} className="mb-3">
                  <p className="font-semibold text-purple-700">Q: {item.question}</p>
                  <p className="text-gray-700 text-sm mt-1">A: {item.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
