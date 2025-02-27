import React, { useState } from "react";
import "../FAQ/Faq.css";

const faqData = [
    {
      question: "What types of construction projects do you specialize in?",
      answer: "We specialize in residential, commercial, and industrial construction projects.",
    },
    {
      question: "How long does a typical construction project take?",
      answer: "The timeline depends on the project size and scope, but we provide estimated completion dates after the initial consultation.",
    },
    {
      question: "Do you offer custom home building services?",
      answer: "Yes, we provide fully customized home construction services tailored to your specifications.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed and insured to ensure compliance with industry standards and safety regulations.",
    },
    {
      question: "Can you assist with permits and approvals?",
      answer: "Yes, we handle all necessary permits and approvals required for your construction project.",
    },
    {
      question: "Do you provide renovation and remodeling services?",
      answer: "Yes, we offer home and commercial renovation services, including kitchen and bathroom remodeling.",
    },
  ];
  

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`}
          onClick={() => toggleFAQ(index)}
          role="button"
          aria-expanded={openIndex === index}
          tabIndex={0}
        >
          <div className="faq-question">
            {faq.question}
            <span className={`faq-toggle ${openIndex === index ? "rotate" : ""}`}>
              {openIndex === index ? "➖" : "➕"}
            </span>
          </div>
          <div
            className="faq-answer-wrapper"
            style={{
              maxHeight: openIndex === index ? "200px" : "0px",
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <div className="faq-answer">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;