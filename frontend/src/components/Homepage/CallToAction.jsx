import React, { useState } from 'react';
import './CallToAction.css';

function CallToAction() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (API call or email service)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section className="contact-cta-section">
      <div className="container">
        <h2 className="contact-cta-heading">
          So why wait?
          <br />
          Power Up Your Business with our Solutions and join the ranks of our satisfied clients today.
        </h2>

        {submitted ? (
          <p className="thank-you-message">Thank you for reaching out! We will contact you soon.</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>
            <button type="submit" className="button contact-submit-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default CallToAction;
