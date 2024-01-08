import React from 'react'
import "./personalInfo.scss"
const PersonalInfo = () => {
  return (
    <form className='personal-info-form'>
      <label className='personal-info-form__label'>
        <span className='personal-info-form__input-name'>Name</span>
        <input className='personal-info-form__input' type="text" placeholder='e.g. Stephen King' />
      </label>
      <label className='personal-info-form__label'>
        <span className='personal-info-form__input-name'>Email Address</span>
        <input className='personal-info-form__input' type="email" placeholder='e.g. stephenking@lorem.com' />
      </label>
      <label className='personal-info-form__label'>
        <span className='personal-info-form__input-name'>Phone Number</span>
        <input className='personal-info-form__input' type="number" placeholder='e.g. +1 234 567 890' />
      </label>
    </form>
  )
}

export default PersonalInfo