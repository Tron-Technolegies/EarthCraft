import React, { useState, useEffect } from "react";
import "../Testimonials/Testimonials.css";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "The quality of construction, attention to detail, and commitment to customer satisfaction are truly exceptional. We highly recommend Caletal's to anyone looking for a reliable and trustworthy developer.",
      author: "Roy Joseph",
      // title: "FOUNDER, WATERFIELD",
    },
    {
      id: 2,
      text: "The design and amenities are all top-notch. The Caletal's team was professional, responsive, and delivered on time. I'm already planning my next investment with them!",
      author: "Shareef",
      // title: "CEO, INNOVATE TECH",
    },
    {
      id: 3,
      text: "We were impressed by Caletal’s innovative approach to sustainable and eco-friendly development. Our new home not only looks stunning, but it's also energy-efficient and environmentally friendly. The Caletal team's expertise and passion for quality development shine through in every aspect of their work.",
      author: "Aneesh K Roy",
      title: "Homeowner",
    },
    {
      id: 4,
      text: "Caletal's commitment to quality, craftsmanship, and customer satisfaction is unparalleled. From the initial consultation to the final handover, the entire process was seamless and stress-free. We're thrilled with our new home and can't recommend Caletal enough!",
      author: "Tom",
      // title: "MANAGING PARTNER, MORGAN & ASSOCIATES",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-heading">Testimonials</h1>

      <div className="testimonials-carousel">
        <button
          onClick={prevTestimonial}
          className="nav-button prev-button"
          aria-label="Previous testimonial"
        >
          &#10094;
        </button>

        <div className="testimonial-content">
          <p className="testimonial-text">
            {testimonials[currentTestimonial].text}
          </p>

          <div className="author-info">
            <h3 className="author-name">
              {testimonials[currentTestimonial].author}
            </h3>
            {testimonials[currentTestimonial].title && (
              <p className="author-title">{testimonials[currentTestimonial].title}</p>
            )}
          </div>
        </div>

        <button
          onClick={nextTestimonial}
          className="nav-button next-button"
          aria-label="Next testimonial"
        >
          &#10095;
        </button>
      </div>

      <div className="dots-container">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`dot ${currentTestimonial === index ? "active" : ""}`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={currentTestimonial === index ? "true" : "false"}
          />
        ))}
      </div>
      <hr className="testimonials_hr" />
    </div>
  );
};

export default Testimonials;
