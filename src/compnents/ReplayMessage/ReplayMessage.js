import React from 'react';
import Card from 'react-bootstrap/Card';
// import { DataContext } from '../Contex/Contex.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './replaymessage.css'


export default function ReplayMessage() {

    return (
        <div className='report-content'>
            <div className="chatting">
                <h6 className='text-center'>User Full Name</h6>
                <p className='text-center'>User number</p>
                <div className='message-past'>
                    <Card body className='text-card user-text'>This is some text within a card body. <span className='message-time'>message-time</span></Card>
                    <Card body className='text-card operator-text'>This is some text within a card body. <span className='message-time'>message-time</span></Card>
                </div>
            </div>
            <div className="sending">
                <InputGroup className="">
                    <Form.Control
                        placeholder="Xabar jo`natish"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Jo`natish
                    </Button>
                </InputGroup>
            </div>
        </div>
    )
}
