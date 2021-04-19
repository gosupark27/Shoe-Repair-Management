import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import Item from './item';
import Grid from '@material-ui/core/Grid';

const ItemList = ({ setTicketItems }) => {
    const [itemList, setItemList] = useState([]);

    const removeItem = (index) => {
        const newItemList = itemList.filter(item => item.id !== index);
        setItemList(newItemList);
    }

    useEffect(() => { setTicketItems(itemList) }, [itemList])

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

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {
                    itemList.map(item => (
                        <Item key={item.id} item={item} remove={removeItem} updateItemList={updateItemList}
                        />
                    ))
                }
            </Grid>
            <Grid container alignItems='center' justify='center' item xs={12}>
                <Button variant="contained" color="primary" onClick={() => { addItem() }}>
                    Add Item
                </Button>
            </Grid>
        </Grid>
    )
}

export default ItemList;