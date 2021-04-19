import React from 'react'
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

const EditTicket = () => {
    const savedTicket = useLocation().state
    console.log(savedTicket.ticketItems)

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <div>
            <Container>
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
                <Container>
                    {savedTicket.ticketItems.map(item => {
                        return (
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
                        )
                    })}
                </Container>
            </Container>
        </div>
    )
}

export default EditTicket;