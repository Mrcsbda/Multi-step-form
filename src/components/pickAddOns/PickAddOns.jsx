import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./pickAddOns.scss"
import useForm from '../../hooks/UseForm'
import { setAddOns } from '../../store/slides/info'

const PickAddOns = () => {
    const { MONTHLY } = useSelector(state => state.plan)
    const { addOns } = useSelector(state => state.info)
    const dispatch = useDispatch()
    const options = [
        {
            title: "Online service",
            subtitle: "Access to multiplayer games",
            monthlyPrice: 1,
            yearlyPrice: 10
        },
        {
            title: "Larger storage",
            subtitle: "Extra 1TB of cloud save",
            monthlyPrice: 2,
            yearlyPrice: 20
        },
        {
            title: "Customizable Profile",
            subtitle: "Custom theme on your profile",
            monthlyPrice: 2,
            yearlyPrice: 20
        }
    ]

    const saveAddOns = (event) => {
        const { name, value } = event.target
        const addOn = {
            name,
            price: +value
        }
        dispatch(setAddOns(addOn))
    }

    const validateAddOn = (addOn) => {
        return addOns.find(item => item.name === addOn)
    }

    return (
        <div className='pick-add-ons'>
            {
                options.map((option, index) => (
                    <div key={index}
                        className={`pick-add-ons__option-container ${validateAddOn(option.title)
                            ? 'pick-add-ons__option-container--active'
                            : ''}`}>
                        <div className="pick-add-ons__option">
                            <input
                                type="checkbox"
                                className='pick-add-ons__option-input'
                                onChange={(event) => saveAddOns(event)}
                                name={option.title}
                                value={MONTHLY ? option.monthlyPrice : option.yearlyPrice}
                            />
                            <div className='pick-add-ons__option-info'>
                                <p className='pick-add-ons__option-title'>{option.title}</p>
                                <p className='pick-add-ons__option-subtitle'>{option.subtitle}</p>
                            </div>
                        </div>
                        <p className='pick-add-ons__option-price'>
                            {
                                `+$${MONTHLY ? `${option.monthlyPrice}/mo` : `${option.yearlyPrice}/yr`}`
                            }
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default PickAddOns