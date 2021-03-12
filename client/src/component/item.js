import React, { useState, useCallback } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import debounce from 'lodash.debounce';

const Item = ({ remove, id, saveItem }) => {
    const [itemName, setItemName] = useState('');
    const [repairDesc, setRepairDesc] = useState('');

    const debounceCall = useCallback(
        debounce((id, value, name) => {saveItem(id, value, name)}, 500), []
    )

    const itemNameChange = (e) => {
        const itemNameInput = e.target.value;
        setItemName(itemNameInput);
        debounceCall(id, itemNameInput, 'itemName');
    }

    const repairDescChange = (e) => {
        const repairDescInput = e.target.value;
        setRepairDesc(repairDescInput);
        debounceCall(id, repairDescInput, 'repair');
    }

    return (
        <ListItem>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <TextField label="Item Name" variant="outlined" value={itemName} onChange={itemNameChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Repair" variant="outlined" value={repairDesc} onChange={repairDescChange}
                         />
                    </Grid>
                    <Grid item xs={4}>
                        <DeleteIcon style={{ color: 'white' }} onClick={() => remove(id)}/>
                    </Grid>
                </Grid>
            </Grid>)
        </ListItem>
    )
}

export default Item;