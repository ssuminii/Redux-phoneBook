import React,{ useState } from 'react'
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setphoneNumber] = useState(0);

    const dispatch = useDispatch();

    const addContact = (event) => {
        event.preventDefault();
        dispatch({type:'ADD_CONTACT', payload: {name, phoneNumber}});
    };


  return (
    <div className='contact-form'>
        <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Phone Number"
          onChange={(event) => {
            setphoneNumber(event.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가하기
      </Button>
    </Form>
        {/* <table className='keypad'>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
            </tr>
            <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
            </tr>
            <tr>
                <td>*</td>
                <td>0</td>
                <td>#</td>
            </tr>
        </table> */}
    </div>
  )
}

export default ContactForm