import React, { useState, useCallback } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';


const Item = ({ remove, item, updateItemList }) => {

    const itemNameChange = (e) => {
        const itemNameInput = e.target.value;
        updateItemList(item.id, itemNameInput, 'itemName');
    }

    const repairDescChange = (e) => {
        const repairDescInput = e.target.value;
        updateItemList(item.id, repairDescInput, 'repair');
    }

    return (
        <ListItem>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <TextField data-testid="nameTxtField" label="Item Name" variant="outlined" value={item.itemName} onChange={itemNameChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Repair" variant="outlined" value={item.repair} onChange={repairDescChange}
                         />
                    </Grid>
                    <Grid item xs={4}>
                        <DeleteIcon data-testid="delIcon" style={{ color: 'white' }} onClick={() => remove(item.id)}/>
                    </Grid>
                </Grid>
            </Grid>)
        </ListItem>
    )
}

export default Item;