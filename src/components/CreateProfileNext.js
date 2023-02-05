import React from 'react'
import BackArrow from '../images/back-arrow.png'
import './CreateProfile.css'
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap'
import {useNavigate } from 'react-router-dom';

export default function CreateProfileNext() {
    const navigate = useNavigate()
    const navigateToCreateProfile = () =>{
        navigate('/');
    }
    const navigateToProfilePage = () =>{
        navigate('/ProfilePage')
    }
  return (
    <div className='body-color' >
        <div className='header-section'>
        <div role={'button'} onClick={navigateToCreateProfile} ><img className='back-arrow' src={BackArrow}/></div>
        <h2 className='top-heading'>Create Profile</h2>
        </div>
        <Form>
         <div className='input-fields'>
            <Form.Label className='label-text'>Portfolio</Form.Label><br/>
            <Form.Text>Attach images for your completed jobs</Form.Text>
            <div className='box1'>
            <Container>
                <div className='box2'>
                <Row>
                    <Col xs><p className='image-box'>Image 1</p></Col>
                    <Col xs><p className='image-box'>Image 2</p></Col>
                    <Col xs><p className='image-box'>Image 3</p></Col>
                </Row>
                </div>
                <div className='box3'>
                <Row>
                    <Col xs><p className='image-box'>Image 4</p></Col>
                    <Col xs><p className='image-box'>Image 5</p></Col>
                    <Col xs><p className='image-box'>Upload</p></Col>
                </Row>
                </div>
                   <div className='hourly-rates'>
                    <Form.Label className='label-text'>Hourly Rates</Form.Label>
                    <div className='hourly-rates-form'>
                    <Form.Control type="text"/>
                    <div className='hourly-rates-p'>
                        <p className='label-text'>/hr</p>
                    </div>
                    </div>
                    </div>
                    <div className='submit-button'>
                        <Button onClick={navigateToProfilePage} variant="warning" className='rounded-pill'  type="submit">
                            Submit
                        </Button>
                    </div>
            </Container>
            </div>
         </div>
        </Form>
    </div>
  )
}
