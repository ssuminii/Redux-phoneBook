import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <div>
        <Row className='contact-item'>
            <Col lg={2}>
                <img width={100} src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="" />
            </Col>
            <Col lg={10} className='info'>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem