import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const onSubmit = (values, { resetForm }) => {
    emailjs.sendForm('service_67r1m2r', 'template_9vf7d0o',document.getElementById('yourFormId'), 'SgxKIxvzzgYo-nFkf')
      .then((result) => {
        console.log(result.text);
        setShowSuccessMessage(true);
        resetForm();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  

  useEffect(() => {
    let timeout;
    if (showSuccessMessage) {
      timeout = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showSuccessMessage]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <>
      <header className="contact-header">
        <h1>Contact</h1>
      </header>
      <div className="contact-page">
        <div className="contact-info">
          <div className="contact-item"
          
          >

            <span>
            <b>Name: </b>
              Charlespaul Masika Wabomba</span>
          </div>
          <div className="contact-item">
            <span>
            <b>Email: </b>
              charlespaulwabomba@gmail.com</span>
          </div>
          <div className="contact-item">
            <span>
         
            <b>Phone: </b>
            (+254)-790-127-374</span>
          </div>
          <div className="contact-item">

            <span>
            <b>Location: </b>
            Kisumu, Kenya</span>
          </div>
        </div>
        <div className="contact-form"
        
        >
          <form id='yourFormId' onSubmit={formik.handleSubmit}>
          {showSuccessMessage && (
        <div className="success-message">
          <p>Message sent successfully!</p>
        </div>
      )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className={formik.touched.name && formik.errors.name ? 'error' : ''}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="error-message">{formik.errors.name}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={formik.touched.email && formik.errors.email ? 'error' : ''}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error-message">{formik.errors.email}</div>
                )}
              </div>
            </div>
            <div className="form-group-message">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className={formik.touched.message && formik.errors.message ? 'error' : ''}
              />
              {formik.touched.message && formik.errors.message && (
                <div className="error-message">{formik.errors.message}</div>
              )}
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="success-message">
          <p>Message sent successfully!</p>
        </div>
      )}
    </>
  );
};

export default Contact;

