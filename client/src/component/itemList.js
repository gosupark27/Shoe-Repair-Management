import React, { useState } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import Item from './item';


const ItemList = () => {
    let newId = uuidv4();
    const [itemList, setItemList] = useState([{id:newId, itemName:'', repair:'' }]);

    const removeItem = (index) =>{
        const newItemList = itemList.filter(item => item.id !== index);
        setItemList(newItemList);
    }

    const saveItemName = (index, value) => {
        const newItemList = itemList.map((item) => {
            if(item.id === index)
            {
                const updatedItem = {
                    ...item, 
                    itemName: value,
                };
                return updatedItem;
            }
            return item;
        });
        setItemList(newItemList)
        console.log(newItemList);
    }

    const saveItemRepair = (index, value) => {
        const newItemList = itemList.map((item) => {
            if(item.id === index)
            {
                const updatedItem = {
                    ...item, 
                    repair: value,
                };
                return updatedItem;
            }
            return item;
        });
        setItemList(newItemList)
        console.log(newItemList);
    }

    const addItem = () => { 
        let newId = uuidv4();
        setItemList([...itemList, {id:newId, itemName:'', repair:''}])
        //TODO: Remove 
        console.log(itemList);
     };


    return (
        <div>
            <List>
                {
                    itemList.map(item => (
                        <Item key={item.id} id={item.id} remove={removeItem} saveItemName={saveItemName} 
                        saveItemRepair = {saveItemRepair}/>
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