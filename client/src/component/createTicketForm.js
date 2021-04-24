import React, {useState} from 'react'
import ItemForm from './itemForm'
import CustomerForm from './customerForm'

const CreateTicketForm = () => {
    const[ticketDetails, setTicketDetails]=useState({})

    return(
        <div>
            <ItemForm setTicket={setTicketDetails}/>
            <CustomerForm setTicket={setTicketDetails}/>
        </div>
    )
    
}

export default CreateTicketForm
