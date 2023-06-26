import React from 'react';
import work from '../../assets/icons/work.svg';

import './PlannerBottom.scss';

export default function PlannerBottom() {
  return (
    <div className='tasks'>
       <ul className='list'>
          <li className='list-item'>
              <div className='list-item__icon'>
                <img src={work}  alt='иконка'/>
              </div>
              <div className='list-item__inner'>
                <div className='list-item__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                <div className='list-item__time'>9am</div>
              </div>
          </li>
          <li className='list-item'>
              <div className='list-item__icon'>
                <img src={work}  alt='иконка'/>
              </div>
              <div className='list-item__inner'>
                <div className='list-item__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                <div className='list-item__time'>9am</div>
              </div>
          </li>
      
          
       </ul>
    </div>
  )
}
