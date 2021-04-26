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
import { ItemListContext } from './Contexts/ItemListContext'
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
    const [itemList, setItemList] = useContext(ItemListContext)
    const [showComponent, setShowComponent] = useState(false)

    const [editId, setEditId] = useState({})

    const handleCustomerEdit = () => {
        setShowComponent(!showComponent)
    }
    // console.log('open:', open)
    // console.log(showComponent.EditCustomerForm)
    // console.log(true)
    const handleItemEdit = (id) => {
        setEditId({ ...editId, [id]: !editId[id] })
        console.log(editId)
    }
    const removeItem = (index) => {
        console.log('edit form remove called:', index)
        console.log('before:', itemList)
        const newItemList = itemList.filter(item => item.id !== index);
        console.log('after:', newItemList)
        setItemList(newItemList);
    }

    const updateItemList = (index, value, _prop) => {
        console.log('id:', index)
        const newItemList = itemList.map((item) => {
            if (item.id === index) {
                if (_prop === 'repair') {
                    item[_prop].push(value)
                }
                item[_prop] = value;
            }
            return item;
        });
        setItemList(newItemList)
    }

    return (
        <Grid container style={{ margin: 10 }} spacing={2}>
            <Grid container item xs={12} alignItems='center' justify='center' >
                <Grid item xs={12}>
                    {showComponent ? (<CustomerForm setShow={handleCustomerEdit} />) : (<EditCustomerForm setShow={handleCustomerEdit} />)}
                </Grid>
            </Grid>
            <Grid container item xs={12} alignItems='center' justify='center' spacing={2}>

                {ticketDetails.ticketItems.map(item => (
                    editId[item.id] ? (
                        <>
                            <Item key={item.id} id={item.id} remove={removeItem} update={updateItemList} />
                        </>
                    )
                        : (
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
            {Object.keys(editId).length === 0 ? (<div></div>): (
                <Grid item xs = { 12 } style = {{ textAlign: 'center' }}>
            <Button color='primary' variant='contained' onClick={() => setEditId(0)}>Save Changes</Button>
        </Grid>
    )
}
        </Grid >
    )
}

export default EditTicketForm