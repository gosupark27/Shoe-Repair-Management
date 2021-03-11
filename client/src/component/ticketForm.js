import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import ItemList from './itemList';


const TicketForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [pickUpDate, setPickUpDate] = useState('')
    const [ticketNumber, setTicketNumber] = useState('')
    const [dropDate, setDropDate] = useState('')
    const [ticketItems, setTicketItems] = useState([]);

    const setItem = (itemList) => {
        setTicketItems(itemList);
    }


    const callApi = () => {

        const url = 'http://localhost:5000/ticket';

        const ticketData = {
            firstName, lastName, phone, pickUpDate, ticketNumber, dropDate, ticketItems
        }
        
        axios.put(url, ticketData)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
    }
    return (
        <Grid container>
            <Grid container>
                <Grid item xs={12} >
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
                    <ItemList ticketItems={setItem}/>
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
    )

}

export default TicketForm;