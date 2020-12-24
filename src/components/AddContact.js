import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import { addContact } from '../Actions/ContactAction';
import {useHistory} from 'react-router-dom';
import shortid from "shortid";
const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch()
    const history = useHistory()
    const createContact =(e)=>{
       e.preventDefault()
       const addObj={
           id:shortid.generate(),
           name,
           email,
           phone
       }
       console.log(addObj)
       dispatch(addContact(addObj))
       history.push("/")
    }
    return (
        <div className="card">
            <div className="card-header">
                Add A Contact
            </div>
            <div className="card-body">
               <form onSubmit={createContact}>
                   <div className="form-group">
                       <input type="text" 
                       className="form-control"
                       placeholder="Enter Your Name"
                       value={name}
                       onChange={(e)=>setName(e.target.value)}
                       />
                   </div>
                   <div className="form-group">
                       <input type="text" 
                       className="form-control"
                       placeholder="Enter Your Email"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                       />
                   </div>
                   <div className="form-group">
                       <input type="text" 
                       className="form-control"
                       placeholder="Enter Your Phone"
                       value={phone}
                       onChange={(e)=>setPhone(e.target.value)}
                       />
                   </div>
                  <button className="btn btn-primary">Add Contact</button>
               </form>
            </div>
        </div>
    )
}

export default AddContact
