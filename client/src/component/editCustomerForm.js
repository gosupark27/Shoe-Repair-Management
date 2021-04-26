import React, { useContext, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TicketContext } from './Contexts/TicketContext'
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const EditCustomerForm = () => {
    // const savedTicket = useLocation().state
    // console.log(savedTicket.ticketItems)
    const [ticketDetails] = useContext(TicketContext)
    const [showComponent, setShowComponent] = useState(false)

    return (
        <Grid container>
            <Grid container item xs={12} alignItems='center' justify='center' >
                <Grid item xs={5}>
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
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EditCustomerForm