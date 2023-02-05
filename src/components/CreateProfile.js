import React from 'react'
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import './CreateProfile.css';
import BackArrow from '../images/back-arrow.png'
import { useNavigate } from 'react-router-dom';


export default function CreateProfile() {
  const navigate = useNavigate();
  const navigateToCreateProfileNext = () =>{
    navigate('/CreateProfileNext');
  }
  return (
    <div className="body-color">
      <Form>
        <div className='header-section'>
        <div role={'button'}><img className='back-arrow' src={BackArrow}/></div>
        <h2 className='top-heading'>Create Profile</h2>
        </div>
      <div className='input-fields'>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Job Title"/>
      </Form.Group>
      <Form.Group className="mb-3">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="text" placeholder="Contact Number" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className='label-text'>Add your skills</Form.Label>
        <Form.Control as="textarea" rows="3" type="text" placeholder="Skills" />
        <Form.Text className="text-muted">
          Add upto 5 skills
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className='label-text'>Work Experience</Form.Label>
        <Form.Control as="textarea" rows="5" type="text" placeholder="Work Experience" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-text'>Description</Form.Label>
        <Form.Control as="textarea" rows="5" type="text" placeholder="Description" />
      </Form.Group>
      </div>
      <Button onClick={navigateToCreateProfileNext} variant="warning"className='rounded-pill'  type="submit">
        Continue
      </Button>
    </Form>
    </div>
  )
}
