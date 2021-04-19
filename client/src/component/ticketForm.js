import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import TicketService from '../services/API';
import { useHistory } from 'react-router-dom'
import ItemList from './itemList';

const TicketForm = () => {
    const date = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0]
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [pickUpDate, setPickUpDate] = useState(date.toString())
    const [ticketNumber, setTicketNumber] = useState('')
    const [dropDate, setDropDate] = useState(date.toString())
    const [ticketItems, setTicketItems] = useState([]);

    let history = useHistory()
    const setTicketItem = (itemList) => {
        setTicketItems(itemList);
    }


    const callApi = () => {
        const newTicket = {
            firstName, lastName, phone, pickUpDate, ticketNumber, dropDate, ticketItems
        }
        TicketService.create(newTicket)
            .then(savedTicket => {
                return history.push("/edit", savedTicket)
            })

    }

    return (
        <div style={{ marginTop: 20 }}>
            <Grid container spacing={2} direction="column" alignItems='center' justify='center' style={{ minHeight: '100vh' }}>
                <Grid container item spacing={2} xs={4} alignItems='flex-start' justify='center'>
                    <Grid item xs={6}>
                        <TextField label="Ticket Number" variant="outlined" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Drop Date" type="datetime-local" variant="outlined" value={dropDate} onChange={(e) => setDropDate(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid container item spacing={2} xs={4} alignItems='center' justify='center'>
                    <Grid item >
                        <TextField label="First Name" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </Grid>
                    <Grid item >
                        <TextField label="Last Name" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid container item spacing={2} xs={4} alignItems='center' justify='center'>
                    <Grid item xs={6}>
                        <TextField label="Phone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Pickup Date" type="datetime-local" variant="outlined" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={2} alignItems='center' justify='center'>
                    <Grid item xs={12} alignItems='center' justify='center'>
                        <ItemList setTicketItems={setTicketItem} />
                    </Grid>
                </Grid>
                <Grid container item spacing={2} xs={12} alignItems='center' justify='center'>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={callApi}>
                            Create Ticket
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>


    )

}

export default TicketForm;