import {
    CREATE_CONTACT,
    GET_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SELECT_CONTACT,
    DELETE_SELECTED_CONTACT,
    CLEAR_CONTACT
} from "./types";

export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact
    }
}

export const getContact = (id) => {
    return {
        type: GET_CONTACT,
        payload: id
    }
}

export const updateContact = (contact) => {
    return {
        type: UPDATE_CONTACT,
        payload: contact
    }
}

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}

export const selectContact = (id) =>{
    return{
        type: SELECT_CONTACT,
        payload: id
    }
}

export const clearContact = () => {
    return {
        type: CLEAR_CONTACT,
        
    }
}

export const deleteAllContact = () => {
    return{
        type: DELETE_SELECTED_CONTACT,
       
    }
}