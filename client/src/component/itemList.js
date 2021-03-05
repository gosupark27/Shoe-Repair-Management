import React, { useState } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { useId } from "react-id-generator";
import Item from './item';


const ItemList = () => {
    const [itemList, setItemList] = useState([{id:0 }]);

    //Get new id only when component is rendered...
    const id = useId();

    const removeItem = () =>{

    }

    const saveItem = (saveItem) => {
        itemList.map(item => (item.id === saveItem.id ? saveItem : item))
    }

    const addItem = () => { setItemList([...itemList, {}]) };


    return (
        <div>
            <List>
                {
                    itemList.map(item => (
                        <Item id={id}/>
                    ))
                }


            </List>
            <Button variant="contained" color="primary" onClick= {()=>{ addItem(); saveItem() }}>
                Add Item
        </Button>
        </div>
    )
}

export default ItemList;