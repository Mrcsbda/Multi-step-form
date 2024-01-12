import React from 'react'
import "./selectYourPlan.scss"
import { useDispatch, useSelector } from 'react-redux'
import { setMonthly } from '../../store/slides/plan'
import { setPlan } from '../../store/slides/info'
const SelectYourPlan = () => {
    const { MONTHLY } = useSelector(state => state.plan)
    const { plan } = useSelector(state => state.info)
    const dispatch = useDispatch()
    const options = [
        {
            title: "Arcade",
            img: "./images/icon-arcade.svg",
            monthlyPrice: "$9/mo",
            yearlyPrice: "$90/yr"
        },
        {
            title: "Advanced",
            img: "./images/icon-advanced.svg",
            monthlyPrice: "$12/mo",
            yearlyPrice: "$120/yr"
        },
        {
            title: "Pro",
            img: "./images/icon-pro.svg",
            monthlyPrice: "$15/mo",
            yearlyPrice: "$150/yr"
        }
    ]

    const changePlan = () => {
        dispatch(setMonthly())
    }

    const selectPlan = (plan) => {
        let price = ""
        if (MONTHLY) {
            switch (plan) {
                case "Arcade": price = 9; break;
                case "Advanced": price = 12; break;
                case "Pro": price = 15; break;
                default: return ""
            }
        } else {
            switch (plan) {
                case "Arcade": price = 90; break;
                case "Advanced": price = 120; break;
                case "Pro": price = 150; break;
                default: return ""
            }
        }
        dispatch(setPlan({ plan, price }))
    }

    return (
        <div className='select-your-plan'>
            <div className='select-your-plan__options'>
                {
                    options.map((option, index) => (
                        <div
                            key={index} className={`select-your-plan__option ${plan === option.title
                                ? "select-your-plan__option--selected"
                                : ""}`}
                            onClick={() => selectPlan(option.title)}
                        >
                            <img className='select-your-plan__option-icon' src={option.img} alt={`${option.title} icon`} />
                            <div className='select-your-plan__option-info-container'>
                                <h4 className='select-your-plan__option-title'>{option.title}</h4>
                                <p className='select-your-plan__option-price'>
                                    {
                                        MONTHLY ? option.monthlyPrice : option.yearlyPrice
                                    }
                                </p>
                                <p className='select-your-plan__option-free'>
                                    {
                                        !MONTHLY && "2 months free"
                                    }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='select-your-plan__toggle'>
                <p className='select-your-plan__toggle-monthly'>Monthly</p>
                <div
                    onClick={changePlan}
                    className={`select-your-plan__toggle-switch ${MONTHLY ? "select-your-plan__monthly" : "select-your-plan__yearly"}`}
                >
                    <div className='select-your-plan__toggle-slider'></div>
                </div>
                <p className='select-your-plan__toggle-yearly'>Yearly</p>
            </div>
        </div>
    )
}

export default SelectYourPlan