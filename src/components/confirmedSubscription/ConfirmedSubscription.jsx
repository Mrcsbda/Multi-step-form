import React from 'react'
import "./confirmedSubscription.scss"
const ConfirmedSubscription = () => {
    return (
        <div className='confirmed-subscription'>
            <img src="./images/icon-thank-you.svg" alt="thank you icon" className='confirmed-subscription__icon' />
            <h1 className='confirmed-subscription__title'>Thank you!</h1>
            <p className='confirmed-subscription__text'>
                Thanks for confirming your subscription! We hope you have fun using our platform.
                If you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
        </div>
    )
}

export default ConfirmedSubscription