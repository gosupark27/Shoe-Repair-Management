import React, { useContext } from 'react'
import ItemForm from './itemForm'
import CustomerForm from './customerForm'
import Grid from '@material-ui/core/Grid';
import {TicketContext} from './Contexts/TicketContext'

const CreateTicketForm = () => {
    const[ticketDetails, setTicketDetails] = useContext(TicketContext)
    return (
        <Grid container>
            <Grid item xs={12}>
                <ItemForm ticketDetails={ticketDetails} setTicket={setTicketDetails} />
            </Grid>
            <Grid item xs={12}>
                <CustomerForm ticketDetails={ticketDetails} setTicket={setTicketDetails} />
            </Grid>
        </Grid>
    )

}

export default CreateTicketForm
