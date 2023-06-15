import React from 'react'

export default function Inform() {
  return (
    <div className='inform'>
        <div className='hamburger'>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className='inform__inner'>
            <div className='inform__title'>Your Things</div>
            <div className="inform__numbers">
                <div className="inform__numbers-item">
                    <span className='number'>24</span>
                    <span className='name'>Personal</span>
                </div>
                <div className="inform__numbers-item">
                    <span className='number'>15</span>
                    <span className='name'>Business</span>
                </div>
            </div>
        </div>
        <div className='inform__date'>
            15/06/2023
        </div>
    </div>
  )
}
