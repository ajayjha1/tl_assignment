import React from 'react'
import './BottomNavbar.css'
import { useNavigate } from 'react-router-dom'
export default function BottomNavbar() {
    const navigate = useNavigate();
    const navigateToProfileHome = () =>{
        navigate('/ProfileHome')
    }
    const navigateToWorkPage = () =>{
        navigate('/WorkPage')
    }
    const navigateToWalletPage = () =>{
        navigate('/WalletPage')
    }
  return (
    <div className='main-body'>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className='navbar-main'>
            <div role={'button'} onClick={navigateToProfileHome} className='navbar-child'>
                Home
            </div>
            <div role={'button'} onClick={navigateToWorkPage} className='navbar-child'>
                Works
            </div>
            <div role={'button'} onClick={navigateToWalletPage} className='navbar-child'>
                Wallet
            </div>
        </div>
    </div>
  )
}
