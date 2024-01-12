import React from 'react'
import "./personalInfo.scss"
const PersonalInfo = ({ dataForm, handleChange, isEmpty }) => {
  return (
    <form className='personal-info-form'>
      <label className='personal-info-form__label'>
        <span className='personal-info-form__input-name'>Name</span>
        <input
          onChange={(e) => handleChange(e)}
          value={dataForm.name}
          name="name"
          className={`personal-info-form__input ${isEmpty && !dataForm.name ? "personal-info-form__input--error" : ''} `}
          type="text"
          placeholder='e.g. Stephen King' />
        <p className={`${isEmpty && !dataForm.name
          ? 'personal-info-form__error'
          : 'personal-info-form__error--disabled'}`}>
          This field is required
        </p>
      </label>
      <label className='personal-info-form__label'>
        <span className='personal-info-form__input-name'>Email Address</span>
        <input
          onChange={(e) => handleChange(e)}
          value={dataForm.email}
          name="email"
          className={`personal-info-form__input ${isEmpty && !dataForm.email ? "personal-info-form__input--error" : ''} `}
          type="email"
          placeholder='e.g. stephenking@lorem.com' />
        <p className={`${isEmpty && !dataForm.email
          ? 'personal-info-form__error'
          : 'personal-info-form__error--disabled'}`}>
          This field is required
        </p>
      </label>
      <label className='personal-info-form__label'>
        <span className='personal-info-form__input-name'>Phone Number</span>
        <input
          onChange={(e) => handleChange(e)}
          value={dataForm.number}
          name="number"
          className={`personal-info-form__input ${isEmpty && !dataForm.number ? "personal-info-form__input--error" : ''} `}
          type="tel"
          placeholder='e.g. +1 234 567 890' />
        <p className={`${isEmpty && !dataForm.number
          ? 'personal-info-form__error'
          : 'personal-info-form__error--disabled'}`}>
          This field is required
        </p>
      </label>
    </form>
  )
}

export default PersonalInfo