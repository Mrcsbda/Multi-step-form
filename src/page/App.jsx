import React, { useState } from 'react'
import "./app.scss"
import PersonalInfo from '../components/personalInfo/PersonalInfo'
import SelectYourPlan from '../components/selectYourPlan/SelectYourPlan'
import PickAddOns from '../components/pickAddOns/PickAddOns'
import { useDispatch, useSelector } from 'react-redux'
import FinishingUp from '../components/finishingUp/FinishingUp'
import ConfirmedSubscription from '../components/confirmedSubscription/ConfirmedSubscription'
import useForm from '../hooks/UseForm'
import { setFormConfirmed } from '../store/slides/info'

const App = () => {
  const { formConfirmed, plan} = useSelector(state => state.info)
  const dispatch = useDispatch()
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
  const [dataForm, handleChange] = useForm({
    name: '',
    email: '',
    number: ''
  })

  const [isEmpty, setEmpty] = useState(false)
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

  const handleNextStep = () => {
    switch (stepActive) {
      case 1:
        if (!dataForm.name || !dataForm.email || !dataForm.number) {
          setEmpty(true)
        } else {
          setEmpty(false)
          setStepActive(stepActive + 1)
        }
        break;
      case 2:
        if (plan) {
          setStepActive(stepActive + 1)
        }
        break;
      case 3:
        setStepActive(stepActive + 1)
        break;
      case 4:
        setStepActive(stepActive + 1)
        dispatch(setFormConfirmed())
      default: ""
    }
  }

  return (
    <main className='app'>
      <article className='app__card-container'>
        <section className='app__steps-container'>
          {
            steps.map((step, index) => (
              <div key={index} className='app__step-info-container'>
                <p className={`app__step-number
                ${step.number === stepActive
                    ? 'app__step-number--active'
                    : stepActive >= 4 && step.number === 4 && formConfirmed ? 'app__step-number--active'
                      : ""}`}>
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
          <div className={`app__form-step-container ${stepActive === 5 ? 'app__form-step-container--confirmed' : ''}`}>
            {
              stepActive < 5 &&
              <>
                <h1 className='app__form-title'>{getTitle()}</h1>
                <p className='app__form-text'>{getText()}</p>
              </>
            }
            {
              stepActive === 1 && <PersonalInfo dataForm={dataForm} handleChange={handleChange} isEmpty={isEmpty} />
            }
            {
              stepActive === 2 && <SelectYourPlan />
            }
            {
              stepActive === 3 && <PickAddOns />
            }
            {
              stepActive === 4 && <FinishingUp setStepActive={setStepActive} />
            }
            {
              stepActive === 5 && <ConfirmedSubscription />
            }
          </div>
          <div className={`app__form-btn-container ${stepActive === 5 ? 'app__form-btn-container--disabled' : ''}`}>
            {
              stepActive > 1 && <p className='app__form-go-back-text' onClick={() => setStepActive(stepActive - 1)}>Go Back</p>
            }
            <button
              className={`app__form-btn ${stepActive === 4 ? 'app__form-btn--confirm' : ''}`}
              onClick={handleNextStep}>
              {stepActive < 4 ? "Next Step" : "Confirm"}
            </button>
          </div>
        </section>
      </article>
    </main>
  )
}

export default App