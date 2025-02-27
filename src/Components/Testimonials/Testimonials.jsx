import React, { useState, useEffect } from 'react';
import "../Testimonials/Testimonials.css";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "I am delighted to be able to share our appreciation for the office interior design work and our wonderful experience in working with Sarah and her team at Essajees Atelier. Their exceptional talent and unwavering dedication brought to life our vision in creating a warm and inviting space for our clients and employees alike. The harmonious blend of colors, textures, and thoughtful design elements has transformed our office into a place that feels like home, fostering a sense of community and collaboration among our team.",
      author: "Soumya Rajan",
      title: "FOUNDER, WATERFIELD"
    },
    {
      id: 2,
      text: "Working with Essajees Atelier transformed our office beyond our expectations. The team's creativity and attention to detail created a perfect balance between functionality and aesthetics. Our employees love coming to work in this inspiring environment.",
      author: "Michael Chen",
      title: "CEO, INNOVATE TECH"
    },
    {
      id: 3,
      text: "The design process with Sarah's team was seamless from start to finish. They listened to our needs and delivered a space that perfectly represents our brand identity. The use of sustainable materials aligned perfectly with our company values.",
      author: "Lisa Rodriguez",
      title: "DIRECTOR, ECO SOLUTIONS"
    },
    {
      id: 4,
      text: "What impressed me most about Essajees Atelier was their ability to work within our budget while still creating a luxurious feel. Their expertise in sourcing unique pieces made our office stand out from the typical corporate environment.",
      author: "David Morgan",
      title: "MANAGING PARTNER, MORGAN & ASSOCIATES"
    },
    {
      id: 5,
      text: "The transformation of our dated office into a modern, collaborative space has had a measurable impact on team productivity and client impressions. Essajees Atelier understood our vision perfectly and executed it flawlessly.",
      author: "Priya Sharma",
      title: "OPERATIONS DIRECTOR, GLOBAL CONNECT"
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // Auto-slide functionality
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
            <h3 className="author-name">{testimonials[currentTestimonial].author}</h3>
            <p className="author-title">{testimonials[currentTestimonial].title}</p>
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
            className={`dot ${currentTestimonial === index ? 'active' : ''}`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={currentTestimonial === index ? 'true' : 'false'}
          />
        ))}
      </div>
      <hr className='testimonials_hr' />
    </div>
  );
};

export default Testimonials;