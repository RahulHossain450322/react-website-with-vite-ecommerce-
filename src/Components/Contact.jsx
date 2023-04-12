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
    const subscribeInput = document.querySelector('.subscribeInput');
    if (subscribeInput.value === '' || subscribeInput.value === null) {
      setText('Please fill out this as it is required');
      subscribeInput.style.border = '3px solid red';
    } else {
      setText('');
      subscribeInput.style.border = '';
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  // name focus event
  const focus = () => {
    const nameLabel = document.querySelector('.nameLabel');
    // console.log(nameLabel);
    nameLabel.classList.add('far');
  };
  // name focus out event
  const focusOut = () => {
    const nameLabel = document.querySelector('.nameLabel');
    const nameInput = document.querySelector('.nameInput');
    // console.log(nameLabel);

    if (nameInput.value === '' || nameInput.value === null) {
      nameLabel.classList.remove('far');
    } else {
      nameLabel.classList.add('far');
    }
  };
  // email focus event
  const emailFocus = () => {
    const emailLabel = document.querySelector('.emailLabel');
    emailLabel.classList.add('far');
  };
  // email focus out event
  const emailFocusOut = () => {
    const emailLabel = document.querySelector('.emailLabel');
    const emailInput = document.querySelector('.nameInput');
    // console.log(emailLabel);

    if (emailInput.value === '' || emailInput.value === null) {
      emailLabel.classList.remove('far');
    } else {
      emailLabel.classList.add('far');
    }
  };
    // message focus event
  const smsFocus = () => {
    const msgLabel = document.querySelector('.msgLabel');
    msgLabel.classList.add('far');
  };
    // message focus out event
  const smsFocusOut = () => {
    const msgLabel = document.querySelector('.msgLabel');
    const msgInput = document.querySelector('.msgInput');
    // console.log(emailLabel);

    if (msgInput.value === '' || msgInput.value === null) {
      msgLabel.classList.remove('far');
    } else {
      msgLabel.classList.add('far');
    }
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
          <div className="form-div mb-3">
            {/*  eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="form-label nameLabel" htmlFor="name">
              Name
            </label>
            {
              formik.errors.name ? <input onBlur={focusOut} onFocus={focus} value={formik.values.name} onChange={formik.handleChange} id="name" type="text" name="name" className="form-control input nameInput error" /> : <input onBlur={focusOut} onFocus={focus} value={formik.values.name} onChange={formik.handleChange} id="name" type="text" name="name" className="form-control input nameInput success" />
            }
            {formik.touched && formik.errors && (
            <span className="text-danger">
              {formik.errors.name}
            </span>
            )}
          </div>
          {
            formik.errors.select ? (
              <div className="form-div d-flex align-items-center">
                {/*  eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className="form-label my-auto" htmlFor="name">
                  Subject:
                </label>
                <select value={formik.values.select} name="select" onChange={formik.handleChange} className="form-select input ms-3 error">
                  <option>Select a option please</option>
                  <option>Option2</option>
                  <option>Option3</option>
                  <option>Option4</option>
                  <option>Option5</option>
                </select>
              </div>
            ) : (
              <div className="form-div d-flex align-items-center">
                {/*  eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className="form-label my-auto" htmlFor="name">
                  Subject:
                </label>
                <select value={formik.values.select} name="select" onChange={formik.handleChange} className="form-select input ms-3">
                  <option>Select a option please</option>
                  <option>Option2</option>
                  <option>Option3</option>
                  <option>Option4</option>
                  <option>Option5</option>
                </select>
              </div>
            )
          }
          {formik.touched && formik.errors && <span className="text-danger">{formik.errors.select}</span>}
          <div className="form-div my-3">
            {/*  eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="form-label emailLabel" htmlFor="email">
              Email Address
            </label>
            {
              formik.errors.email ? <input onFocus={emailFocus} onBlur={emailFocusOut} value={formik.values.email} onChange={formik.handleChange} id="email" type="email" name="email" className="form-control input emailInput error" /> : <input onFocus={emailFocus} onBlur={emailFocusOut} value={formik.values.email} onChange={formik.handleChange} id="email" type="email" name="email" className="form-control input emailInput" />
            }
            {formik.touched && formik.errors && <span className="text-danger">{formik.errors.email}</span>}
          </div>
          <div className="form-div mb-2">
            {/*  eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="form-label msgLabel" htmlFor="message">
              Message
            </label>
            {
              formik.errors.message ? <textarea onFocus={smsFocus} onBlur={smsFocusOut} name="message" onChange={formik.handleChange} value={formik.values.message} className="form-control input msgInput error" /> : <textarea onFocus={smsFocus} onBlur={smsFocusOut} name="message" onChange={formik.handleChange} value={formik.values.message} className="form-control input msgInput" />
            }
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
          <div className="card-body d-flex justify-content-around align-items-center directionChange">
            <div className="card-des">
              <h2 className="card-title">Subscribe to Our Newalwtter</h2>
              <p className="card-description">Get the lastest news and updates straight to your inbox</p>
            </div>
            <form onSubmit={handleSubmit} className="subscribe-form">
              <div className="d-flex">
                <input value={email} onChange={handleChange} type="email" className="form-control subscribeInput" placeholder="Enter your email" name="email" />
                <button className="btn btn-primary subscribeBtn" type="submit">Subscribe</button>
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
