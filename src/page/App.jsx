import React, { useState } from 'react'

const App = () => {
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
  const [step, setStep] = useState(1)
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
    <div>App</div>
  )
}

export default App