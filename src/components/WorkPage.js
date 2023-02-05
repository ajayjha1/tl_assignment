import React from 'react';
import BackArrow from '../images/back-arrow.png'
import BottomNavbar from './BottomNavbar';

export default function () {
  return (
    <div className='main-body'>
        
            <div className='upper-body'>
                <div role={'button'}><img className='back-arrow' src={BackArrow}/></div>
                <h2 className='top-heading'>Create Profile</h2>
            </div>
        
        <BottomNavbar/>
    </div>
  )
}
