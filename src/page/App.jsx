import React, { useState } from 'react'
import "./app.scss"
import PersonalInfo from '../components/personalInfo/PersonalInfo'
import SelectYourPlan from '../components/selectYourPlan/SelectYourPlan'

const App = () => {
  const [stepActive, setStepActive] = useState(2)
  const steps = [
    {
      number: 1,
      text: 'YOUR INFO'
    },
    {
      number: 2,
      text: 'SELECT PLAN'
    },
    {
      number: 3,
      text: 'ADD-ONS'
    },
    {
      number: 4,
      text: 'SUMMARY'
    }
  ]
  const getTitle = () => {
    switch (stepActive) {
      case 1: return "Personal Info";
      case 2: return "Select your plan";
      case 3: return "Pick add-ons";
      case 4: return "Finishing up";
      default: return "";
    }
  }

  const getText = () => {
    switch (stepActive) {
      case 1: return "Please provide your name, email address, and phone number.";
      case 2: return "You have the option of monthly or yearly billing.";
      case 3: return "Add-ons help enhance your gaming experience.";
      case 4: return "Double-check everything looks OK before confirming.";
      default: return "";
    }
  }

  return (
    <main className='app'>
      <article className='app__card-container'>
        <section className='app__steps-container'>
          {
            steps.map((step, index) => (
              <div key={index} className='app__step-info-container'>
                <p className={`app__step-number ${step.number === stepActive ? 'app__step-number--active' : ''}`}>
                  {step.number}
                </p>
                <div className='app__step-info'>
                  <p className='app__step-info-number'>STEP {step.number}</p>
                  <p className='app__step-info-text'>{step.text}</p>
                </div>
              </div>
            ))
          }
        </section>
        <section className='app__form-container'>
          <div className='app__form-step-container'>
            <h1 className='app__form-title'>{getTitle()}</h1>
            <p className='app__form-text'>{getText()}</p>
            {
              stepActive === 1 && <PersonalInfo />
            }
            {
              stepActive === 2 && <SelectYourPlan />
            }
          </div>
          <div className='app__form-btn-container'>
            <button className='app__form-btn'>Next Step</button>
          </div>
        </section>
      </article>
    </main>
  )
}

export default App