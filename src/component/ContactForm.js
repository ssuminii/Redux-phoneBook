import React,{ useState } from 'react'
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
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
        <Form className='input-form' onSubmit={addContact}>
            <input type="text" placeholder='Name' className='input-name' required onChange={(event)=>setName(event.target.value)}/>
            <input type="number" placeholder='번호를 입력해주세요' className='input-num' required onChange={(event)=>setphoneNumber(event.target.value)} />
            <button type="submit">번호 추가</button>
        </Form>
        <table className='keypad'>
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
        </table>
    </div>
  )
}

export default ContactForm