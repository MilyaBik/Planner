import React from 'react';

import bg from '../../assets/images/bg.jpg';

import './PlannerTop.scss';

export default function PlannerTop({onClickBlock}) {


   
  return (
    <div className='inform ' style={{backgroundImage: `url(${bg})`}}>
        <div className='hamburger' onClick = {onClickBlock}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className='inform__inner'>
            <div className='inform__title'>Мои планы</div>
            <div className="inform__numbers">
                <div className="inform__numbers-item">
                    <span className='number'>24</span>
                    <p className='name'>Личные</p>
                </div>
                <div className="inform__numbers-item">
                    <span className='number'>15</span>
                    <p className='name'>По работе</p>
                </div>
            </div>
        </div>
        <div className='inform__date'>
            15/06/2023
        </div>
    </div>
  )
}
