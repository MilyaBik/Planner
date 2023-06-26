import React  from 'react';

import './PlannerBack.scss';

import arrow from '../../assets/icons/arrow.svg';
import hobbies from '../../assets/icons/hobbies.svg';
import job from '../../assets/icons/job.svg';

export default function  PlannerBack({onClickBlock}) {



return (
    <div className='planner__back'>
            <div className='add-block'>
                <div className='add-block__top'>
                    <div className='add-block__icon' onClick = {onClickBlock}>
                        <img src={arrow} alt='стрелка'/>
                    </div>
                
                    <div className='add-block__title'>
                        Добавить заметку
                    </div>
                </div>
                <div className='add-block__icons-main'>
                    <div className='add-block__icons-item'>
                        <img src={hobbies} alt='иконка личного времени'/>
                    </div>
                    
                    <div className='add-block__icons-item'>
                        <img src={job} alt='иконка работа'/>
                    </div>
                </div>
               
                <div className='add-block__form'>
                    <div className='add-block__form-inner'>
                        <div className='add-block__form-item'>
                            <select >
                                <option value=''>--Выберите вариант--</option>
                                <option value='Личные'>Личные</option>
                                <option value='По работе'>По работе</option>
                            </select>
                        </div>
                        <div className='add-block__form-item'>
                            <input name='text' type='text' placeholder='Заметка'/>
                        </div>
                        <div className='add-block__form-item'>
                            <input type='time'/>
                        </div>
                    </div>
                    <button>Добавить</button>
                </div>

            </div>
      
    </div>
    
    )
}
