import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import Item from './item';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core'
import Chip from "@material-ui/core/Chip"
import {TicketContext} from './Contexts/TicketContext'
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';

const useStyles = makeStyles(theme => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
}));

const ItemList = () => {
    const[ticketDetails, setTicketDetails] = useContext(TicketContext)
    
    const [itemList, setItemList] = useState([{ id: uuidv4(), itemName: '', repair: '' }]);
    const[category, setCategory] = useState('')
    const[itemName, setItemName]=useState('')
    const[repairs, setRepairs]=useState([])
    const classes = useStyles()

    const removeItem = (index) => {
        const newItemList = itemList.filter(item => item.id !== index);
        setItemList(newItemList);
    }

    const setToCategory = (event) => {
        setCategory(event.target.value);
      }

    const SetToRepairs = (repair) => {
        if(repair){setRepairs(repairs.concat(repair))}
    }

    const setToItemName = (e, values) =>{
        setItemName(values)
    }

    const handleDelete = (repairName) => () => {
        const updatedRepairs = repairs.filter(repair => repair !== repairName)
        setRepairs(updatedRepairs)
    }

    const repairChips = repairs?.map(repair => (
        <Chip
            size="small"
            label={repair}
            onDelete={handleDelete(repair)}
        />
    ))

    //useEffect(() => { setTicketItems(itemList) }, [itemList])


    const updateItemList = (index, value, _prop) => {
        const newItemList = itemList.map((item) => {
            if (item.id === index) {
                item[_prop] = value;
            }
            return item;
        });
        setItemList(newItemList)
    }

    const addItem = () => {
        let tempId = uuidv4();
        let newItem = { id: tempId, itemName: '', repair: '' }
        setItemList([...itemList, newItem])
    };

    

    // const INITIAL_FORM_STATE = {
    //     itemName:'',
    //     category:'',
    //     repair:'',


    // };

    // const FORM_VALIDATION = Yup.object().shape({
    //     firstName: Yup.string()
    //         .required('Required')
    //         .matches(/^[A-Za-z ]*$/, 'Please enter valid first name'),
    //     lastName: Yup.string()
    //         .nullable()
    //         .required('Required')
    //         .matches(/^[A-Za-z ]*$/, 'Please enter valid last name'),
    //     phone: Yup.string()
    //         .matches(/^[0-9]+$/, "Must be only digits")
    //         .min(10, 'Must be exactly 10 digits')
    //         .max(10, 'Must be exactly 10 digits')
    //         .required('Required'),
    //     ticketNumber: Yup.number()
    //         .integer()
    //         .typeError('Please enter a valid ticket number')
    //         .required('Required'),
    //     dropDate: Yup.date()
    //         .required('Required')
    //         .typeError('Please enter a valid date'),
    //     pickupDate: Yup.date()
    //         .required('Required')
    //         .typeError('Please enter a valid date'),
    // });

    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth='lg' >
                    <div className={classes.formWrapper}>
                        <Grid container spacing={3}>
                            {
                                itemList.map(item => (
                                    <Item key={item.id} item={item} repairChips={repairChips} category={category} repairs={repairs} setRepairs={SetToRepairs} setItem={setToItemName}  setCategory={setToCategory} remove={removeItem} updateItemList={updateItemList} />
                                    
                                ))
                            }
                            <Grid item xs={12} style={{textAlign: "center"}}>
                                <Button color='primary' onClick={addItem} variant="contained">
                                    Add Item
                                        </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </Grid>
        </Grid>
    )
}

export default ItemList;