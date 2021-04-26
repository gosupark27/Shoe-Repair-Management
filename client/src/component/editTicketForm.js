import React, { useContext, useState } from 'react'
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
import { TicketContext } from './Contexts/TicketContext'
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CustomerForm from './customerForm'

const EditTicketForm = () => {
    // const savedTicket = useLocation().state
    // console.log(savedTicket.ticketItems)
    const [ticketDetails, setTicketDetails] = useContext(TicketContext)
    const [showComponent, setShowComponent] = useState(false)

    return (
        <Grid container>
            <Grid container item xs={12} alignItems='center' justify='center' >
                <Grid item xs={5}>
                    {showComponent ? (<CustomerForm />) : (
                        <Card>
                            <CardHeader
                                action={
                                    <IconButton aria-label="edit" onClick={() => setShowComponent(!showComponent)}>
                                        <EditIcon />
                                    </IconButton>
                                }
                                title='Customer Details'
                                subheader={`Ticket #${ticketDetails.ticketNumber}`}
                            />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            
                                            inputProps={{readOnly:true, disabled:true}}
                                            InputProps={{className:'Mui-disabled'}}
                                            label='Full Name'
                                            value={`${ticketDetails.firstName} ${ticketDetails.lastName}`}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            
                                            inputProps={{readOnly:true, disabled:true}}
                                            InputProps={{className:'Mui-disabled'}}
                                            label='Phone Number'
                                            value={ticketDetails.phone}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            type='date'
                                            inputProps={{readOnly:true, disabled:true}}
                                            InputProps={{className:'Mui-disabled'}}
                                            label='Drop off Date'
                                            value={ticketDetails.dropDate}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            type='date'
                                            inputProps={{readOnly:true, disabled:true}}
                                            InputProps={{className:'Mui-disabled'}}
                                            label='Pickup Date'
                                            value={ticketDetails.pickUpDate}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography>Item Details</Typography>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={12}>
                    {ticketDetails.ticketItems.map(item => {
                        let arr = []
                        arr.push(<Typography>{item.category}</Typography>)
                        arr.push(<Typography>{item.itemName}</Typography>)
                        arr.push(<Typography>{item.repair}</Typography>)

                        return arr
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EditTicketForm