import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addContact, getContact, updateContact } from '../Actions/ContactAction';
import { useHistory, useParams } from 'react-router-dom';
import shortid from "shortid";
import Contact from './Contact';
const EditContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const contact = useSelector(state => state.contact.contact)
    console.log(contact)
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams();
    console.log(id)
   
    useEffect(() => {
        if(contact!=null){
            setName(contact.name)
            setEmail(contact.email)
            setPhone(contact.phone)
        }
        dispatch(getContact(id))
       
    }, [contact])
    const createContact = (e) => {
        e.preventDefault()
        const addObj = Object.assign(contact,{
            id: contact.id,
            name,
            email,
            phone
        })
        console.log(addObj)
        dispatch(updateContact(addObj))
        history.push("/")
    }
    return (
        <div className="card">
            <div className="card-header">
                Update A Contact
        </div>
            <div className="card-body">
                <form onSubmit={createContact}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Your Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-warning">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact
