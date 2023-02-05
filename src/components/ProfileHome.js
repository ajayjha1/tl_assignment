import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ProfileImage from '../images/profile-image.png'
import LocationIcon from '../images/location-icon.png'
import {Row, Col} from 'react-bootstrap';
import HeartImage from '../images/heart.png'

import './ProfileHome.css';
import BottomNavbar from './BottomNavbar';
export default function ProfileHome() {
  return (
    <div>
        
        <div className='details-section'>
        <div className='parent-component'>
            <div className='profile-details'>
                <div>
                    <img src={ProfileImage}/>
                </div>
                <div className='profile-details-text'>
                    <h6 className='profile-name' >Samuel Jhon</h6>
                    <div className='location-block'>
                        <div className='location-icon-block' >
                            <img src={LocationIcon}/>
                        </div>
                        <p className='location-text-block'>&nbsp;Trivandrum, Palayam</p>
                    </div>
                </div>
            </div>
            <div className='account-status-parent' >
                <div className='account-status-column'>
                    01<br/> Active
                </div>
                <div className='account-status-column'>
                    02<br/> Pending
                </div>
                <div className='account-status-column'>
                    10<br/> Completed
                </div>
            </div>
            <div>&nbsp;</div>
            <div className='earning-feedback-bar'>
                <div className='child-earning-feedback'>Earned: 6000</div>
                <div className='child-earning-feedback'>Feedbacks: 12</div>
            </div>
            <div>&nbsp;</div>
            <div>
                
            </div>
        </div>
        </div>
        <div className='jobs-section'>
        <div className='parent-component'>
            
        <div>
            <div>&nbsp;</div>
            <div class="form-outline">
                <input type="search" id="form1" class="form-control" placeholder="Search" aria-label="Search" />
            </div>
        </div>

        <div className='job-text'>
            <a>Job List (10)</a>
        </div>
        <div className='job-div'>
        <div className='job-left-div'>
            <span className='first-text'>Ceiling Light Repairing</span><br/>
            <span>Trivandrum, Palyam</span><br/>
            <span>Dipesh</span>
        </div>
        <div className='job-right-div'>
            <div className='job-right-div-first'>
                <a>1d ago</a>
                <img src={HeartImage} ></img>
                <br></br>
            </div>
            <a>Price per Day</a><br></br>
            <a>800</a>
            <div className='job-view-details'><Button className='btn-2' variant='warning'>View Details</Button></div>
        </div>
        <div>
           
        </div>
        </div>
        <div >&nbsp;</div>
        <div className='job-div'>
        <div className='job-left-div'>
            <span className='first-text'>Ceiling Light Repairing</span><br/>
            <span>Trivandrum, Palyam</span><br/>
            <span>Dipesh</span>
        </div>
        <div className='job-right-div'>
            <div className='job-right-div-first'>
                <a>1d ago</a>
                <img src={HeartImage} ></img>
                <br></br>
            </div>
            <a>Price per Day</a><br></br>
            <a>800</a>
            <div className='job-view-details'><Button className='btn-2' variant='warning'>View Details</Button></div>
        </div>
        <div>

        </div>
        </div>

        <div>&nbsp;</div>

        <div className='job-div'>
        <div className='job-left-div'>
            <span className='first-text'>Ceiling Light Repairing</span><br/>
            <span>Trivandrum, Palyam</span><br/>
            <span>Dipesh</span>
        </div>
        <div className='job-right-div'>
            <div className='job-right-div-first'>
                <a>1d ago</a>
                <img src={HeartImage} ></img>
                <br></br>
            </div>
            <a>Price per Day</a><br></br>
            <a>800</a>
            <div className='job-view-details'><Button className='btn-2' variant='warning'>View Details</Button></div>
        </div>
        <div>
        </div>
        </div>
        </div>
        </div>
        {/* <div className='jobs-section'>&nbsp;</div> */}
        <BottomNavbar/>
    </div>
  )
}
