import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from '../components/Modal';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    if (name === 'email' && value) {
      const isValidEmail = validateEmail(value);
      setErrors({
        ...errors,
        [name]: !isValidEmail
      });
    } else {
      setErrors({
        ...errors,
        [name]: value.trim() === ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formState;
    const newErrors = {
      name: name.trim() === '',
      email: !validateEmail(email),
      message: message.trim() === ''
    };
    
    setErrors(newErrors);
    
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      emailjs.sendForm('service_s1x6vs3', 'template_woxp6af', e.target, '4BsjZnW0Yf05EEa8z')
      .then((result) => {
        console.log('Email sent:', result.text);
        setIsModalOpen(true);
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-text">Name is required</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-text">Please enter a valid email address</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.message ? 'error' : ''}
            rows="5"
          ></textarea>
          {errors.message && <p className="error-text">Message is required</p>}
        </div>
        
        <button type="submit">Submit</button>
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Thank you for your message!</h3>
        <p>I will get back to you soon.</p>
      </Modal>
    </section>
  );
}

export default Contact;