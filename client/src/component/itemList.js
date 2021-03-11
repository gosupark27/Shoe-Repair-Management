import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import Item from './item';


const ItemList = ({ticketItems}) => {
    const [itemList, setItemList] = useState([]);

    const removeItem = (index) =>{
        const newItemList = itemList.filter(item => item.id !== index);
        setItemList(newItemList);
    }

    //useEffect to keep save the most recent changes made to itemList? 
    //useEffect(console.log(itemList),[itemList]);
    useEffect(() => {ticketItems(itemList); if(itemList.length !== 0){console.log(itemList[0].itemName, itemList[0].repair)}}, [itemList])

    const saveItem = (index, value, _prop) => {
        const newItemList = itemList.map((item) => {
            if(item.id === index)
            {
                item[_prop] = value;
            }
            return item;
        });
        setItemList(newItemList)
    }

    const addItem = () => { 
        let newId = uuidv4();
        setItemList([{id:newId, itemName:'new name', repair:'new repair'}])
     };


    return (
        <div>
            <List>
                {
                    itemList.map(item => (
                        <Item key={item.id} id={item.id} remove={removeItem} saveItem={saveItem} 
                        />
                    ))
                }
            </List>
            <Button variant="contained" color="primary" onClick= {()=>{ addItem() }}>
                Add Item
        </Button>
        </div>
    )
}

export default ItemList;