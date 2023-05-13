import React  from 'react';
import User from '../imgs/user.png'
import './sidebar.css'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export default function SideBar() {
    return (
        <div className='sidebar ' bg="secondary">
            <ListGroup as="ul" >
                <ListGroup.Item as="li" className='listItem'>
                    <img src={User} className='userImg' alt="Contact Person" />
                    <span className='userName'>Azamat</span>
                    <span className='userTime'>12:15</span>
                    <Badge pill bg="info">
                        2
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
