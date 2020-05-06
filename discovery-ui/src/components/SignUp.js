import React, { useState } from 'react';
import Title from './atoms/Title.js';
import SubmitBtn from './atoms/SubmitBtn.js';

function SignUp() {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    agree: false,
  });
  const [content, setContent] = useState({
    mainTitle: 'join the list',
    subTitle: 'sign up for the tlc newsletter.',
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

  const updateFields = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  function handleCurrentStep(step) {
    const { data = {} } = stepsData.find((item) => item.step === step);
    setContent({
      ...content,
      ...data,
    });
    setCurrentStep(step);
    if (step === 3) {
      submitForm();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep <= 2) {
      handleCurrentStep(currentStep + 1);
    }
  };

  function submitForm() {
    console.log('submit', form.email, form.firstName, form.lastName, form.agree);
  }

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <Title text={content.mainTitle} type="title" />
          <div className="tab-des">
            <Title text={content.subTitle} type="subTitle" />
            <div className="form-group">
              {currentStep === 1 && (
                <div className="email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="enter email address"
                    value={form.email}
                    onChange={updateFields}
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
                      value={form.firstName}
                      onChange={updateFields}
                      required
                    />
                  </div>
                  <div className="lName">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={updateFields}
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
                    checked={form.agree}
                    onChange={updateFields}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gdpr">
                    <span className="aw">I agree to receive information from</span>{' '}
                    <span className="aw">Discovery Communications in accordance</span>{' '}
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
}

export default SignUp;
