import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ItemListContext = createContext()

export const ItemListProvider = (props) => {
    const [itemList, setItemList] = useState()

    // const removeItem = (index) => {
    //     const newItemList = itemList.filter(item => item.id !== index);
    //     setItemList(newItemList);
    // }

    // const updateItemList = (index, value, _prop) => {
    //     console.log('updateItemList is called')
    //     const newItemList = itemList.map((item) => {
    //         if (item.id === index) {
    //             if (_prop === 'repair') {
    //                 item[_prop].push(value)
    //             }
    //             item[_prop] = value;
    //         }
    //         return item;
    //     });
    //     console.log('updateItemList is called')
    //     setItemList(newItemList)
    // }

    // const addItem = () => {
    //     let tempId = uuidv4();
    //     let newItem = { id: tempId, itemName: '', repair: [], category: '' }
    //     setItemList([...itemList, newItem])
    // };

    return (
        <ItemListContext.Provider value={[itemList, setItemList]}>
            {props.children}
        </ItemListContext.Provider >
    )
}
