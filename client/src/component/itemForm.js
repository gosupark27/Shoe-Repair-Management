import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import Item from './item';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core'
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';

const useStyles = makeStyles(theme => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
}));

const ItemList = ({ setTicketItems }) => {
    const [itemList, setItemList] = useState([]);
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

    const SetToRepairs = (e, values) => {
        setRepairs(repairs.concant(values))
    }

    const setToItemName = (e, values) =>{
        setItemName(values)
    }

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
                <Container maxWidth='md' >
                    <div className={classes.formWrapper}>
                        <Grid container spacing={2}>
                            <Grid container item xs={12} spacing={2}>
                                <Item category={category} repair={repairs} setRepairs={SetToRepairs} setItem={setToItemName}  setCategory={setToCategory} remove={removeItem} updateItemList={updateItemList} />
                            </Grid>
                            {
                                itemList.map(item => (
                                    <Item key={item.id} item={item} remove={removeItem} updateItemList={updateItemList}
                                    />
                                ))
                            }
                            <Grid item xs={12}>
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