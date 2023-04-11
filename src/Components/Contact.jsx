import React, { useState } from 'react';
import { MdOutlineSms } from 'react-icons/md';
import './Contact.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormik } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from 'yup';

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      select: '',
      email: '',
      message: '',
    },
    validationSchema: yup.object({
      name: yup.string().min(3, 'Name will have to be 3 charecters').required('Name filled is required'),
      select: yup.string().required('Select filled is required'),
      email: yup.string().email('Invalid Email').required('Email filled is required'),
      message: yup.string().min(30, 'Minimum text will have 30 words').max(300, 'Maximum words will have 300 words').required('Message filled is required'),
    }),
    onSubmit: (() => {
      // console.log(value);
    }),
  });
  // for newlatter
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('.subscribeEmail');
    if (emailInput.value === '' || emailInput.value === null) {
      setText('Please fill out this as it is required');
    } else {
      setText('');
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <section className="contact py-4">
      <div className="container contact-content">
        <div className="contact-top-content">
          <h1 className="text-center">Contact</h1>
          <p className="">Voluptua stet diam et dolores est, magna est dolor tempor justo magna tempor kasd takimata et. Lorem sed accusam ipsum ipsum vero et. Ut et duo diam vero et. Consetetur consetetur ipsum amet invidunt sit elitr dolor, amet elitr et gubergren accusam labore sed at ipsum, dolores stet dolor invidunt.</p>
          <p className="">Voluptua stet diam et dolores est, magna est dolor tempor justo magna tempor kasd takimata et. Lorem sed accusam ipsum ipsum vero et. Ut et duo diam vero et. Consetetur consetetur ipsum amet invidunt sit elitr dolor, amet elitr et gubergren accusam labore sed at ipsum, dolores stet dolor invidunt.</p>
          <p className="">Voluptua stet diam et dolores est, magna est dolor tempor justo magna tempor kasd takimata et. Lorem sed accusam ipsum ipsum vero et. Ut et duo diam vero et. Consetetur consetetur ipsum amet invidunt sit elitr dolor, amet elitr et gubergren accusam labore sed at ipsum, dolores stet dolor invidunt.</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="">
            <label className="form-label" htmlFor="name">
              Name :
              <input value={formik.values.name} onChange={formik.handleChange} id="name" type="text" name="name" className="form-control input" />
            </label>
            {formik.touched && formik.errors && <span className="text-danger">{formik.errors.name}</span>}
          </div>
          <div className="">
            <label className="form-label" htmlFor="name">
              Subject :
              <select value={formik.values.select} name="select" onChange={formik.handleChange} className="form-select input">
                <option selected className="" value="">Query regarding your website...</option>
                <option>Option1</option>
                <option>Option2</option>
              </select>
            </label>
            {formik.touched && formik.errors && <span className="text-danger">{formik.errors.select}</span>}
          </div>
          <div className="">
            <label className="form-label" htmlFor="email">
              Email Address :
              <input value={formik.values.email} onChange={formik.handleChange} id="email" type="email" name="email" className="form-control input" />
            </label>
            {formik.touched && formik.errors && <span className="text-danger">{formik.errors.email}</span>}
          </div>
          <div className="mb-2">
            <label className="form-label" htmlFor="message">
              Message :
              <textarea name="message" onChange={formik.handleChange} value={formik.values.message} className="form-control input" />
            </label>
            {formik.touched && formik.errors && <span className="text-danger">{formik.errors.message}</span>}
          </div>
          <div className="">
            <button className="btn btn-primary w-100" type="submit">
              <MdOutlineSms className="sms" />
              Send
            </button>
          </div>
        </form>
        <div className="card mt-4 bg-light">
          <div className="card-body d-flex justify-content-around align-items-center">
            <div className="card-des">
              <h2 className="card-title">Subscribe to Our Newalwtter</h2>
              <p className="card-description">Get the lastest news and updates straight to your inbox</p>
            </div>
            <form onSubmit={handleSubmit} className="card-form">
              <div className="input-group">
                <input onChange={handleChange} type="email" className="form-control subscribeEmail" placeholder="Enter your email" name="email" />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
              <span className="text-danger">{text}</span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
