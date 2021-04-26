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
import EditCustomerForm from './editCustomerForm'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Item from './item'

const EditTicketForm = () => {
    // const savedTicket = useLocation().state
    // console.log(savedTicket.ticketItems)
    const [ticketDetails] = useContext(TicketContext)
    const [showComponent, setShowComponent] = useState(false)
    const [editId, setEditId] = useState(0)

    const handleCustomerEdit = () => {
        setShowComponent(!showComponent)
    }
    // console.log('open:', open)
    // console.log(showComponent.EditCustomerForm)
    // console.log(true)
    const handleItemEdit = (id) => {
        setEditId(id)
    }
    console.log('editTicketForm id:', editId)

    return (
        <Grid container style={{ margin: 10 }} spacing={2}>
            <Grid container item xs={12} alignItems='center' justify='center' >
                <Grid item xs={12}>
                    {showComponent ? (<CustomerForm setShow={handleCustomerEdit} />) : (<EditCustomerForm setShow={handleCustomerEdit} />)}
                </Grid>
            </Grid>
            <Grid container item xs={12} alignItems='center' justify='center' spacing={2}>

                {ticketDetails.ticketItems.map(item => (
                    item.id === editId ? (<Item id={editId}/>) : (
                        <Grid item xs={4} key={item.id}>
                            <Container maxWidth="sm">
                                <Card>
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="edit" onClick={handleItemEdit.bind(this, item.id)}>
                                                <EditIcon />
                                            </IconButton>
                                        }
                                        title={`${item.category} - ${item.itemName}`}
                                        subheader='Repair Details'
                                    />
                                    <CardContent>
                                        <TableContainer component={Paper}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Repair</TableCell>
                                                        <TableCell align='right'>Price</TableCell>
                                                        <TableCell align='right'>Assigned to</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {item.repair.map(row =>
                                                    (
                                                        <TableRow>
                                                            <TableCell component='th' scope='row'>{row}</TableCell>
                                                        </TableRow>
                                                    )
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </CardContent>
                                </Card>
                            </Container>
                        </Grid>
                    )
                ))}
            </Grid>
        </Grid >
    )
}

export default EditTicketForm