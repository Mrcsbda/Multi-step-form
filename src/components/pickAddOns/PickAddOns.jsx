import React from 'react'
import { useSelector } from 'react-redux'
import "./pickAddOns.scss"

const PickAddOns = () => {
    const { MONTHLY } = useSelector(state => state.plan)
    const options = [
        {
            title: "Online service",
            subtitle: "Access to multiplayer games",
            monthlyPrice: "+$1/mo",
            yearlyPrice: "+$10/yr"
        },
        {
            title: "Larger storage",
            subtitle: "Extra 1TB of cloud save",
            monthlyPrice: "+$2/mo",
            yearlyPrice: "+$20/yr"
        },
        {
            title: "Customizable Profile",
            subtitle: "Custom theme on your profile",
            monthlyPrice: "+$2/mo",
            yearlyPrice: "+$20/yr"
        }
    ]

    return (
        <div className='pick-add-ons'>
            {
                options.map((option, index) => (
                    <div key={index} className='pick-add-ons__option-container'>
                        <div className='pick-add-ons__option'>
                            <input type="checkbox" className='pick-add-ons__option-input' />
                            <div className='pick-add-ons__option-info'>
                                <p className='pick-add-ons__option-title'>{option.title}</p>
                                <p className='pick-add-ons__option-subtitle'>{option.subtitle}</p>
                            </div>
                        </div>
                        <p className='pick-add-ons__option-price'>{MONTHLY ? option.monthlyPrice : option.yearlyPrice}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default PickAddOns