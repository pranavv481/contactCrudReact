import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Avatar from 'react-avatar';
import { clearContact, deleteAllContact, deleteContact, selectContact } from '../Actions/ContactAction';
import { Link, useParams } from 'react-router-dom';

const Contact = () => {
    const [selectAll, setSelectAll] = useState(false)
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contact.contacts)
    const selectedContacts = useSelector(state => state.contact.selectedContacts)
    const { id } = useParams();

    useEffect(() => {
        if (selectAll) {
            dispatch(selectContact(contacts.map((contact) => contact.id)))
        } else {
            dispatch(clearContact())
        }
    }, [selectAll])

    console.log(contacts)
    return (
        <div>
            {
                selectedContacts.length > 0 ? (
                    <button className="mb-3 btn btn-danger" onClick={()=>dispatch(deleteAllContact())}>Delete All</button>
                ) : null
            }
            <table className="table shadow">
                <thead className="bg-danger text-white">
                    <tr>
                        <th scope="col"><input type="checkbox" name="" id="" value={selectAll} onChange={() => setSelectAll(!selectAll)} /></th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id} >
                            <th scope="row"><input checked={selectAll} type="checkbox" name="" id="" /></th>
                            <td><Avatar className="mr-2" name={contact.name} size="45" round={true} />{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td className="actions">
                                <Link to={`/contacts/edit/${contact.id}`}><span className="material-icons">
                                    edit
                                    </span>
                                </Link>
                                <span onClick={() => dispatch(deleteContact(contact.id))} className="material-icons text-danger" style={{ cursor: 'pointer' }}>
                                    remove_circle
                                      </span>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default Contact