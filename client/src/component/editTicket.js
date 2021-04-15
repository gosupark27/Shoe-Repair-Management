import React from 'react'
import { useLocation } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditTicket = () => {
    //const location = useLocation()
    const savedTicket = useLocation().state
    return (
        <div>
            <Container>
                <h1>
                    Herro this is the edit view
                {console.log("This is coming from edit ticket component!", savedTicket)}
                </h1>
                <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: "50vh" }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField label="Ticket Number" variant="outlined" value={savedTicket.ticketNum} />
                            <TextField label="Drop Date" variant="outlined" value={savedTicket.dropDate} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField label="First Name" variant="outlined" value={savedTicket.firstName} />
                            <TextField label="Last Name" variant="outlined" value={savedTicket.lastName} />
                        </Grid>

                    </Grid>
                    <Grid container>

                        <Grid item xs={12}>
                            <TextField label="Phone" variant="outlined" value={savedTicket.phone} />
                            <TextField label="Pickup Date" variant="outlined" value={savedTicket.pickUpDate} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={() => null}>
                                Save Changes
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default EditTicket;