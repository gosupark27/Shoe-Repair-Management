import React, { useState } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import Item from './item';


const ItemList = () => {
    let newId = uuidv4();
    const [itemList, setItemList] = useState([{id:newId }]);

    const removeItem = (index) =>{
        const newItemList = itemList.filter(item => item.id !== index);
        setItemList(newItemList);
    }

    const saveItem = (saveItem) => {
        itemList.map(item => (item.id === saveItem.id ? saveItem : item))
    }

    const addItem = () => { 
        let newId = uuidv4();
        setItemList([...itemList, {id:newId}])
        //TODO: Remove 
        console.log(itemList);
     };


    return (
        <div>
            <List>
                {
                    itemList.map(item => (
                        <Item key={item.id} id={item.id} remove={removeItem}/>
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