import React, {useContext} from 'react'
import { useLocation } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import {TicketContext} from './Contexts/TicketContext'

const EditTicketForm = () => {
    // const savedTicket = useLocation().state
    // console.log(savedTicket.ticketItems)
    const[ticketDetails, setTicketDetails] = useContext(TicketContext)

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Grid container spacing={2} direction="column" alignItems='center' justify='center' style={{ minHeight: '100vh' }}>
                <Grid container item spacing={2} xs={4} alignItems='flex-start' justify='center'>
                    <Grid item xs={6}>
                        <TextField label="Ticket Number" variant="outlined" value={ticketDetails.ticketNum} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Drop Date" variant="outlined" value={ticketDetails.dropDate} />
                    </Grid>
                </Grid>
                <Grid container item spacing={2} xs={4} alignItems='center' justify='center'>
                    <Grid item >
                        <TextField label="First Name" variant="outlined" value={ticketDetails.firstName} />
                    </Grid>
                    <Grid item >
                        <TextField label="Last Name" variant="outlined" value={ticketDetails.lastName} />
                    </Grid>
                </Grid>
                <Grid container item spacing={2} xs={4} alignItems='center' justify='center'>
                    <Grid item xs={6}>
                        <TextField label="Phone" variant="outlined" value={ticketDetails.phone} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Pickup Date" variant="outlined" value={ticketDetails.pickUpDate} />
                    </Grid>
                </Grid>
                <Grid container item spacing={2} xs={12} alignItems='center' justify='center'>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={() => null}>
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                {ticketDetails.ticketItems.map(item => {
                    return (
                        <Grid container item alignItems='center' justify='center' xs={12}>
                            <Card>
                                <CardContent>
                                    <Typography variant='h2' color="textSecondary" gutterBottom>
                                        {item.itemName}
                                    </Typography>
                                    <Chip
                                        label={item.repair}
                                        onClick={handleClick}
                                        onDelete={handleDelete}
                                    />
                                    <Chip
                                        label="Add Repair"
                                        clickable
                                        color="primary"
                                        onClick={handleClick}
                                    />
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color='secondary'>Delete Item</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default EditTicketForm