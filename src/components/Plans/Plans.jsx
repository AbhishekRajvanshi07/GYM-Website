import React from 'react'
import {plansData} from '../../data/plansData'
import css from './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className="plans-continer">
        <div className="programs-header">
            <span className='strokes-text'>READY TO START</span>
            <span>YOUR JOURNERY</span>
            <span className='strokes-text'>NOW WITHUS</span>
        </div>

        {/* plans card */}

        <div className="plans">
            {plansData.map((plan,i)=> (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((features,i)=> (
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{features}</span>
                            </div>
                        ))}
                    </div>
                    <div><span>See More Benefits -></span></div>
                    <button className='btn'>join now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans
