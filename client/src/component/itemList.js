import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import Item from './item';

const ItemList = ({setTicketItems}) => {
    const [itemList, setItemList] = useState([]);

    const removeItem = (index) =>{
        const newItemList = itemList.filter(item => item.id !== index);
        setItemList(newItemList);
    }

    useEffect(() => {setTicketItems(itemList)}, [itemList])

    const updateItemList = (index, value, _prop) => {
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
        setItemList([...itemList, {id:newId, itemName:'', repair:''}])
     };

    return (
        <div>
            <List>
                {
                    itemList.map(item => (
                        <Item key={item.id} item={item} remove={removeItem} updateItemList={updateItemList} 
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