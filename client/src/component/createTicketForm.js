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
        padding: theme.spacing(1),
    },
}));

const CreateTicketForm = () => {
    const classes = useStyles()
    const [ticketDetails, setTicketDetails] = useContext(TicketContext)

    const [itemList, setItemList] = useState([{ id: uuidv4(), itemName: '', repair: [], category: '' }]);
    const [category, setCategory] = useState('')
    const [itemName, setItemName] = useState('')
    const [repairs, setRepairs] = useState([])

    useEffect(() => {
        setTicketDetails({ ...ticketDetails, ticketItems: itemList })
    }, [itemList])
    console.log(ticketDetails.itemList)
    console.log('ticket', ticketDetails)


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
        //console.log(newItemList)
        setItemList(newItemList)
    }

    const addItem = () => {
        let tempId = uuidv4();
        let newItem = { id: tempId, itemName: '', repair: [], category: '' }
        setItemList([...itemList, newItem])
    };

    const setToCategory = (event) => {
        setCategory(event.target.value)
        //updateItemList(category, 'category')
    }

    const SetToRepairs = (repair) => {
        if (repair) { setRepairs(repairs.concat(repair)) }
    }

    const setToItemName = (e, values) => {
        setItemName(values)
    }

    const handleDelete = (repairName) => () => {
        const updatedRepairs = repairs.filter(repair => repair !== repairName)
        setRepairs(updatedRepairs)
    }

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setTicketDetails({
            ...ticketDetails,
            [name]: value,

        })
        console.log(ticketDetails)

    }

    const repairChips = repairs?.map(repair => (
        <Chip
            size="small"
            label={repair}
            onDelete={handleDelete(repair)}
        />
    ))

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid item xs={12}>
                    {
                        ticketDetails?.ticketItems?.map(item => (
                            <Item key={item.id} id={item.id} handleChange={handleChange} item={item} repairChips={repairChips} category={category} repairs={repairs} setRepairs={SetToRepairs} setItem={setToItemName} setCategory={setToCategory} remove={removeItem} updateItemList={updateItemList} />

                        ))
                    }
                </Grid>
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
                <Container maxWidth='lg'>
                    <Grid container className={classes.formWrapper} component={Paper}>
                        <Grid item xs={6}>
                            <TextField label="Ticket Number" name='ticketNumber' fullWidth={true} value={ticketDetails.ticketNumber} onChange={handleChange} variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Drop Date" name='dropDate' fullWidth={true} value={ticketDetails.dropDate} onChange={handleChange} variant="outlined" />
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
                            <TextField label="Pick Up Date" name='pickUpDate' fullWidth={true} value={ticketDetails.pickUpDate} onChange={handleChange} variant="outlined" />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )

}

export default CreateTicketForm
