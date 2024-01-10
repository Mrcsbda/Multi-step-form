import React from 'react'
import { useSelector } from 'react-redux'
import "./finishingUp.scss"
const FinishingUp = () => {
    const { MONTHLY } = useSelector(state => state.plan)
    const options = [
        {
            title: "Online service",
            price: "$1/mo"
        },
        {
            title: "Larger storage",
            price: "$2/mo"
        }
    ]
    return (
        <div className='finishing-up'>
            <div className='finishing-up__info-container'>
                <div className='finishing-up__plan-container'>
                    <div className='finishing-up__plan'>
                        <p className='finishing-up__plan-title'>Arcade (Monthly)</p>
                        <p className='finishing-up__plan-change'>Change</p>
                    </div>
                    <p className='finishing-up__plan-price'>$9/mo</p>
                </div>
                <hr className='finishing-up__separator' />
                <div className='finishing-up__add-ons'>
                    {
                        options.map((option, index) => (
                            <div key={index} className='finishing-up__add-on'>
                                <p className='finishing-up__add-on-title'>{option.title}</p>
                                <p className='finishing-up__add-on-price'>+{option.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='finishing-up__total'>
                <p className='finishing-up__total-title'>Total (per month)</p>
                <p className='finishing-up__total-price'>+$12/mo</p>
            </div>
        </div>
    )
}

export default FinishingUp