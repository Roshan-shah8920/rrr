import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How can I place an order?",
    answer: "You can browse products and click on 'Add to Cart'. Then proceed to checkout and fill in your details to place the order."
  },
  {
    question: "What payment methods are available?",
    answer: "We accept all major credit/debit cards, UPI payments, and net banking."
  },
  {
    question: "How can I track my order?",
    answer: "After your order is confirmed, you will receive a tracking link via email or SMS."
  },
  {
    question: "What is the return policy?",
    answer: "Products can be returned within 7 days of delivery. Certain conditions apply."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we only ship within India."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5" style={{ fontWeight: "700" }}>
        Frequently Asked Questions
      </h2>
      <div className="accordion">
        {faqData.map((faq, index) => (
          <div key={index} className="accordion-item mb-3 shadow-sm rounded">
            <button
              onClick={() => toggleFAQ(index)}
              className="accordion-header btn w-100 d-flex justify-content-between align-items-center p-3"
              style={{
                backgroundColor: "#f8f9fa",
                border: "none",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              {faq.question}
              <span>
                {openIndex === index ? (
                  <FaMinus style={{ color: "#007bff" }} />
                ) : (
                  <FaPlus style={{ color: "#007bff" }} />
                )}
              </span>
            </button>
            <div
              className="accordion-body p-3"
              style={{
                maxHeight: openIndex === index ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                backgroundColor: "#fff",
                borderTop: "1px solid #dee2e6"
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
