import React, {useState} from 'react'
import ItemForm from './itemForm'
import CustomerForm from './customerForm'

const TicketForm = () => {
    const[ticketDetails, setTicketDetails]=useState({})
    return(
        <div>
            <ItemForm/>
            <CustomerForm/>
        </div>
    )
}

export default TicketForm
