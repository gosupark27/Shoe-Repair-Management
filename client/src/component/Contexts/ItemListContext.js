import React, { createContext, useState } from 'react';

export const ItemListContext = createContext()

export const ItemListProvider = (props) => {
    const [itemList, setItemList] = useState()

    return (
        <ItemListContext.Provider value={[itemList, setItemList]}>
            {props.children}
        </ItemListContext.Provider >
    )
}
