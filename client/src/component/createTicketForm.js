import React, { useContext, useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { TicketContext } from './Contexts/TicketContext'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';
import Item from './item';
import Chip from "@material-ui/core/Chip"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    formWrapper: {
        margin: theme.spacing(1),
        padding: theme.spacing(3),
    },
}));



const CreateTicketForm = () => {
    const classes = useStyles()
    const [ticketDetails, setTicketDetails] = useContext(TicketContext)

    const initialItem = () => {
        if(ticketDetails.ticketItems === undefined || ticketDetails.ticketItems.length === 0){
            return [{ id: uuidv4(), itemName: '', repair: [], category: '' }]
        }
        else
            return ticketDetails.ticketItems
    }
    

    const [itemList, setItemList] = useState(initialItem());
    // const [category, setCategory] = useState('')
    // const [itemName, setItemName] = useState('')
    // const [repairs, setRepairs] = useState([])

    useEffect(() => {
        const today = getToday()
        setTicketDetails({ ...ticketDetails, ticketItems: itemList, dropDate:today })
    }, [itemList])

    console.log(ticketDetails)


    const getToday = () => {
        const date = new Date()
        const today = `${date.getFullYear()}-${((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1)))}-${((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))}`
        return today
    }


    const removeItem = (index) => {
        const newItemList = itemList.filter(item => item.id !== index);
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

    const addItem = () => {
        let tempId = uuidv4();
        let newItem = { id: tempId, itemName: '', repair: [], category: '' }
        setItemList([...itemList, newItem])
    };

    // const setToCategory = (event) => {
    //     setCategory(event.target.value)
    //     //updateItemList(category, 'category')
    // }

    // const SetToRepairs = (repair) => {
    //     if (repair) { setRepairs(repairs.concat(repair)) }
    // }

    // const setToItemName = (e, values) => {
    //     setItemName(values)
    // }

    // const handleDelete = (repairName) => () => {
    //     const updatedRepairs = repairs.filter(repair => repair !== repairName)
    //     setRepairs(updatedRepairs)
    // }

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setTicketDetails({
            ...ticketDetails,
            [name]: value,

        })
   }

    return (
        <Grid container>
            <Grid container item xs={12} spacing={2}>
                {
                    ticketDetails?.ticketItems?.map(item => (
                        <Item key={item.id} id={item.id} remove={removeItem} updateItemList={updateItemList} />

                    ))
                }
            </Grid>
            <Grid item xs={12}>
                <Container>
                    <Grid container className={classes.formWrapper}>

                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            <Button color='primary' onClick={addItem} variant="contained">
                                Add Item
                                </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth='md'>
                    <Grid container className={classes.formWrapper} component={Paper} spacing={2}>
                        <Grid item xs={6}>
                            <TextField label="Ticket Number" name='ticketNumber' fullWidth={true} value={ticketDetails.ticketNumber} onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Drop Date" name='dropDate' fullWidth={true} type='date' value={ticketDetails.dropDate} onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="First Name" name='firstName' fullWidth={true} value={ticketDetails.firstName} onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Last Name" name='lastName' fullWidth={true} value={ticketDetails.lastName} onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Phone Number" name='phone' fullWidth={true} value={ticketDetails.phone} onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Pick Up Date" name='pickUpDate' InputLabelProps={{shrink:true}} fullWidth={true} type='date' value={ticketDetails.pickUpDate} onChange={handleChange} variant="outlined" />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )

}

export default CreateTicketForm
