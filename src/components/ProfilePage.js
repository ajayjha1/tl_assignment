import React from 'react'
import './ProfilePage.css'
import LocationIcon from '../images/location-icon-2.png'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
    const navigate = useNavigate();
    const navigateToProfileHome = ()=>{
        navigate('/ProfileHome');
    }
  return (
    // <div className='container'>
        <div className='map-box'>
                <h1>Google Map Api Integration</h1>
            <div className='address-box'>
                <div className='data-fields'>
                <h5>Select Address</h5>
                <div className='adress-label-text'>
                    <h6 style={{textAlign:'left'}}>Use Saved Address</h6>
                </div>
                <div className='address-message-box'>
                    <div>&nbsp;</div>
                    <div className='icon-section'>
                        <img className='location-icon' src={LocationIcon}></img>
                        <p className='location-text'>Home</p>
                    </div>
                    <div>&nbsp;</div>
                    <div className='main-address'>
                    <h5 style={{color:'black', textAlign:'left'}}>Kachani Shop, Sasthamangalama Thiruvananthapuram, Kerala 695010, India</h5>
                    </div>
                </div>
                <div className='location-add'>
                    <div className='location-add-icon'>
                        +
                    </div>
                    <h5 className='add-location-text'>&nbsp;Add New Location</h5>
                </div>
                <div className='location-add'>
                    <div className='location-add-icon'>
                    <img src={LocationIcon}></img>
                    </div>
                    <h5 className='add-location-text'>&nbsp;Use Current Location</h5>
                </div>
                <Button onClick={navigateToProfileHome} variant="warning"className='rounded-pill'  type="submit">
                    Confirm
                </Button>
            </div>
            
        </div>
    //</div>
  )
}
