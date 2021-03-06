import React, { useState } from 'react';
import Title from './atoms/Title.js';
import SubmitBtn from './atoms/SubmitBtn.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      agree: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid emil address').required('Required'),
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      lastName: Yup.string().max(20, 'Must be 15 characters or less').required('Required'),
      agree: Yup.boolean().required('Required').oneOf([true], 'you must except the terms'),
    }),
    onSubmit: (values) => {
      // console.log('submit', JSON.stringify(values, null, 2));
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'signup', ...values }),
      })
        .then(() => alert('Success!'))
        .catch((error) => alert(error));
    },
  });
  const [content, setContent] = useState({
    mainTitle: 'join the list',
    subTitle: 'sign up for the IN newsletter.',
    submitBtn: 'next',
  });
  const stepsData = [
    {
      step: 2,
      data: {
        mainTitle: 'join the list',
        subTitle: 'Almost Done! Please Enter Your First and Last Name.',
        submitBtn: 'sign up',
      },
    },
    {
      step: 3,
      data: {
        mainTitle: 'congratulations!',
        subTitle: 'Thank You For Signing Up!',
        submitBtn: 'sign up',
      },
    },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  function handleCurrentStep(step) {
    const { data = {} } = stepsData.find((item) => item.step === step);
    setContent({
      ...content,
      ...data,
    });
    setCurrentStep(step);
    if (step === 3) {
      formik.handleSubmit();
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep <= 2) {
      handleCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit} data-netlify-recaptcha="true">
          <input type="hidden" name="form-name" value="signup" />
          <div data-netlify-recaptcha="true"></div>
          <Title text={content.mainTitle} type="title" />
          <div className="tab-des">
            <Title text={content.subTitle} type="subTitle" />
            {/* {formik.touched.agree && formik.errors.agree ? <div>{formik.errors.agree}</div> : null} */}
            <div className="form-group">
              {currentStep === 1 && (
                <div className="email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="enter email address"
                    {...formik.getFieldProps('email')}
                    required
                  />
                </div>
              )}
              {currentStep === 2 && (
                <div className="fullName">
                  <div className="fName">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      {...formik.getFieldProps('firstName')}
                      required
                    />
                  </div>
                  <div className="lName">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      {...formik.getFieldProps('lastName')}
                      required
                    />
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="bodyCopy">
                  <p>Look out for the latest news on your favorite shows.</p>
                </div>
              )}
              {currentStep !== 3 && <SubmitBtn text={content.submitBtn} />}
            </div>
            {currentStep === 1 && (
              <div className="gdpr">
                <div>
                  <input
                    id="gdpr"
                    name="agree"
                    type="checkbox"
                    checked={formik.values.agree}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gdpr">
                    <span className="aw">I agree to receive information from </span>{' '}
                    <span className="aw">Interactive Nerd Communications in accordance</span>{' '}
                    <span className="aw">
                      with the following <a href="https://www.google.com/">Privacy Policy</a>
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
