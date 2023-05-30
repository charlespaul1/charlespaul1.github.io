import React, {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './contact.css'

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

    console.log(values);
    setShowSuccessMessage(true);
    resetForm();
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
        <div className="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" 
        height="24" width="24"
        viewBox="0 0 24 24" id="person"><g data-name="Layer 2"><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" data-name="person"></path></g></svg>
          <span>: Charlespaul Masika Wabomba</span>
        </div>
        <div className="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" 
        height="24" width="24"
        viewBox="0 0 64 64" id="email"><path d="M58 37.91V16.7a5.66 5.66 0 0 0-1.93-4.24 5.57 5.57 0 0 0-3.67-1.36H5.6a5.53 5.53 0 0 0-3.66 1.36A5.63 5.63 0 0 0 0 16.7v30.6a5.66 5.66 0 0 0 1.93 4.24A5.57 5.57 0 0 0 5.6 52.9h34.21A12.53 12.53 0 0 0 51.5 61v-4a8.5 8.5 0 0 1-6-14.56A8.4 8.4 0 0 1 51.66 40 8.72 8.72 0 0 1 60 48.85v3.65a1 1 0 0 1-2 0v-4a6.52 6.52 0 1 0-3.64 5.83A5 5 0 0 0 64 52.5v-3.65a13 13 0 0 0-6-10.94ZM50.16 15.1l-17.9 14.41a5.23 5.23 0 0 1-6.52 0L7.84 15.1ZM54 36.27a12.14 12.14 0 0 0-2.27-.27A12.39 12.39 0 0 0 43 39.36l-6.41-4.5-2.3 3.28 6.24 4.37a12.45 12.45 0 0 0-1.52 6v.4H8.35l15.37-10.77-2.29-3.28L4 47.06V17.14l19.23 15.48a9.25 9.25 0 0 0 11.54 0L54 17.14ZM51.5 51a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Z"></path></svg>
          <span>: charlespaulwabomba@gmail.com</span>
        </div>
        <div className="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
        height="24" width="24"
        id="phone"><g data-name="Layer 2"><g data-name="phone-call"><path d="M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z"></path><path d="M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2zm8.75 11.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73z"></path></g></g></svg>
          <span>: (+254)-790-127-734</span>
        </div>
        <div className="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" 
        height="24" width="24"
        viewBox="0 0 32 32" id="address"><path d="M24.917,8.5322C22.502,6.2544,19.3359,5,16,5c-0.066,0-0.1321,0.009-0.1981,0.0099C15.801,5.0068,15.8009,5.0031,15.8,5
			c-0.66-2.34-2.79-4-5.3-4C7.47,1,5,3.47,5,6.5c0,0.81,0.32,1.84,0.99,3.2c0.0023,0.0045,0.0049,0.0095,0.0072,0.014
			C4.0671,12.0344,3,14.9443,3,18c0,3.8701,1.7021,7.5073,4.666,9.9751C9.9844,29.9258,12.9443,31,16,31c7.168,0,13-5.8315,13-13
			C29,14.4341,27.5117,10.9834,24.917,8.5322z M10.5,3c1.81,0,3.3,1.35,3.48,3.12C13.99,6.24,14,6.37,14,6.5
			c0,0.1664-0.0298,0.3615-0.0848,0.5797c-0.0955,0.3788-0.2783,0.8369-0.5041,1.3289c-0.0349,0.0758-0.06,0.144-0.0974,0.2217
			c-0.0182,0.038-0.0419,0.08-0.0607,0.1183c-0.6147,1.2567-1.5182,2.7217-2.3871,4.0044
			c-0.1216,0.1793-0.2441,0.3624-0.3633,0.5331c-0.3386-0.487-0.7529-1.1005-1.1766-1.7691
			c-0.0032-0.0051-0.0063-0.0095-0.0095-0.0146c-0.4271-0.6745-0.8635-1.4051-1.2423-2.1201
			C8.0711,9.3764,8.0662,9.3719,8.0629,9.366C7.14,7.6165,7,6.8191,7,6.5C7,4.57,8.57,3,10.5,3z M5,18
			c0-2.3126,0.7142-4.5314,2.0317-6.3774C7.1111,11.7516,7.1906,11.8708,7.27,12c0.04,0.07,0.08,0.14,0.13,0.21
			c0.011,0.0184,0.0226,0.0355,0.0337,0.0539c0.0488,0.0786,0.0966,0.1554,0.1453,0.2326c0.1244,0.2009,0.2496,0.4047,0.371,0.5935
			c0,0,0.01,0,0.01,0.01c0.15,0.23,0.3,0.45,0.44,0.66c0.14,0.21,0.28,0.41,0.4,0.59c0.1081,0.1497,0.2025,0.2797,0.2911,0.4075
			c0.0185,0.0261,0.0411,0.059,0.059,0.084V14.85c0.0886,0.1208,0.1603,0.2164,0.2255,0.306
			c0.0235,0.0325,0.0484,0.0675,0.0696,0.0967C9.4537,15.2651,9.4638,15.2775,9.47,15.29c0.0179,0.022,0.0298,0.0386,0.0454,0.0588
			c0.098,0.1341,0.17,0.2314,0.1838,0.2499L9.7,15.6c0.0011,0.0015,0.0031,0.002,0.0042,0.0035C9.8928,15.8529,10.1873,16,10.5,16
			c0.158,0,0.3109-0.0374,0.4481-0.1061c0.0757-0.0381,0.131-0.1065,0.1952-0.1628c0.0519-0.0454,0.1152-0.0753,0.1575-0.1314
			c0.2438-0.3259,0.7921-1.0732,1.4293-2.0231c0.1462-0.2168,0.2958-0.4407,0.45-0.6765c0.0309-0.0533,0.0661-0.1068,0.0983-0.1601
			c0.6761-1.0563,1.3823-2.2595,1.907-3.4024C15.1988,9.3087,15.2168,9.2787,15.23,9.25c0.0551-0.1338,0.1124-0.2645,0.1653-0.3934
			c0.0714-0.171,0.1351-0.3381,0.1957-0.5039C15.6034,8.319,15.6177,8.2828,15.63,8.25c0.002-0.0051,0.0031-0.0097,0.0051-0.0148
			c0.0203-0.0576,0.0405-0.115,0.0593-0.1718c0.0112-0.0342,0.025-0.0714,0.0356-0.1035c0.035-0.108,0.0612-0.2106,0.0898-0.3146
			c0.0103-0.0381,0.0234-0.0778,0.033-0.1154c0.0404-0.1587,0.0717-0.3123,0.0942-0.4612C15.9505,7.0465,15.9577,7.022,15.9609,7
			C15.9736,7,15.9873,7,16,7c2.7312,0,5.3217,1.0009,7.3367,2.8091c0.6454,2.43,0.3647,4.845-0.7996,6.663
			c-1.0977,1.7148-2.9209,2.8032-5.2734,3.1484c-3.5847,0.5292-6.7145,2.6285-9.1279,6.0638C6.1335,23.6426,5,20.9004,5,18z M16,29
			c-2.2827,0-4.4986-0.709-6.3374-2.0107c2.1234-3.1055,4.7712-4.9291,7.8931-5.3902c2.9414-0.4312,5.2461-1.8315,6.666-4.0483
			c0.8916-1.3922,1.3693-3.0461,1.4391-4.7944C26.5256,14.3554,27,16.1583,27,18C27,24.0654,22.0654,29,16,29z"></path><circle cx="10.5" cy="6.5" r="1.5"></circle></svg>
          <span>: Kisumu, Kenya</span>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Me</h2>
        {showSuccessMessage && (
          <div className="success-message">
            Your message has been submitted successfully.
          </div>
        )}
       
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.name && formik.errors.name ? 'error' : ''}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.email && formik.errors.email ? 'error' : ''}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.touched.message && formik.errors.message ? 'error' : ''}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}
          </div>

          <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact
