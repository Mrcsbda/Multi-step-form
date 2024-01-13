import React from 'react'
import { useSelector } from 'react-redux'
import "./finishingUp.scss"
const FinishingUp = ({ setStepActive }) => {
    const { MONTHLY } = useSelector(state => state.plan)
    const { plan, price, addOns } = useSelector(state => state.info)

    const setTotal = () => {
        let result = 0
        if (addOns.length > 0) {
            addOns.forEach(addOn => result += addOn.price)
            return price + result
        }
        return price
    }

    setTotal()
    return (
        <div className='finishing-up'>
            <div className='finishing-up__info-container'>
                <div className='finishing-up__plan-container'>
                    <div className='finishing-up__plan'>
                        <p className='finishing-up__plan-title'>{plan} ({MONTHLY ? "Monthly" : "Yearly"})</p>
                        <p className='finishing-up__plan-change' onClick={() => setStepActive(2)}>Change</p>
                    </div>
                    <p className='finishing-up__plan-price'>${`${price}${MONTHLY ? "/mo" : "/yr"}`}</p>
                </div>
                {
                    addOns.length > 0 && (
                        <>
                            <hr className='finishing-up__separator' />
                            <div className='finishing-up__add-ons'>
                                {
                                    addOns.map((option, index) => (
                                        <div key={index} className='finishing-up__add-on'>
                                            <p className='finishing-up__add-on-title'>{option.name}</p>
                                            <p className='finishing-up__add-on-price'>
                                                +${`${option.price}${MONTHLY ? "/mo" : "/yr"}`}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )
                }
            </div>
            <div className='finishing-up__total'>
                <p className='finishing-up__total-title'>Total (per {MONTHLY ? "month" : "year"})</p>
                <p className='finishing-up__total-price'>{MONTHLY && "+"}${`${setTotal()}${MONTHLY ? "/mo" : "/yr"}`}</p>
            </div>
        </div>
    )
}

export default FinishingUp