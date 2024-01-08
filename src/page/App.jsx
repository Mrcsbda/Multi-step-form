import React, { useState } from 'react'
import "./app.scss"

const App = () => {
  const [stepActive, setStepActive] = useState(1)
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
    switch (step) {
      case 1: return "Personal Info";
      case 2: return "Select your plan";
      case 3: return "Pick add-ons";
      case 4: return "Finishing up";
      default: return "";
    }
  }

  const getText = () => {
    switch (step) {
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
      </article>
    </main>
  )
}

export default App