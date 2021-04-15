import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TicketService from '../services/API';

const TicketForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [pickUpDate, setPickUpDate] = useState('')
    const [ticketNumber, setTicketNumber] = useState('')
    const [dropDate, setDropDate] = useState('')

    const callApi = () => {
        const newTicket = {
            firstName, lastName, phone, pickUpDate, ticketNumber, dropDate
        }
        TicketService.create(newTicket)
        clearFields()
    }

    const clearFields = () => {
        setFirstName('')
        setLastName('')
        setPhone('')
        setPickUpDate('')
        setDropDate('')
        setTicketNumber('')
    }


    return (
        <Container maxWidth={'lg'}>
            <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: "50vh" }}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField label="Ticket Number" variant="outlined" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} />
                        <TextField label="Drop Date" variant="outlined" value={dropDate} onChange={(e) => setDropDate(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField label="First Name" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <TextField label="Last Name" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </Grid>

                </Grid>
                <Grid container>

                    <Grid item xs={12}>
                        <TextField label="Phone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <TextField label="Pickup Date" variant="outlined" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={callApi}>
                            Create Ticket
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )

}

export default TicketForm;