import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';


const TicketForm = () => {
    //useState
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [pickUpDate, setPickUpDate] = useState('')
    const [ticketNumber, setTicketNumber] = useState('')
    const [dropDate, setDropDate] = useState('')
    // const handleChange = (event) => {
    //     setFirstName(event.target.value);
    //     console.log(event.target);
    //   };

    //Axios Put request 
    const callApi = () => {
        //Endpoint to express server 
        const url = '';
        //axios.put()
        const ticketData ={
            firstName, lastName, phone, pickUpDate, ticketNumber, dropDate
        }
        console.log(ticketData);
    }


    return (
        <Grid container>
            <Grid container>
                <Grid item xs={12} >
                    <TextField id="outlined-basic" label="Ticket Number" variant="outlined" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} />
                    <TextField id="outlined-basic" label="Drop Date" variant="outlined" value={dropDate} onChange={(e) => setDropDate(e.target.value)} />

                </Grid>
            </Grid>
            <Grid container>

                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                    <TextField id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Grid>

            </Grid>
            <Grid container>

                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Phone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <TextField id="outlined-basic" label="Pickup Date" variant="outlined" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} />
                </Grid>

            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={callApi}>
                        Create Tickets
            </Button>
                </Grid>
            </Grid>

        </Grid>
    )

}

export default TicketForm;