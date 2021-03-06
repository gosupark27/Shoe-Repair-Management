import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Item = ({ remove, id, saveItemName, saveItem }) => {
    const [itemName, setItemName] = useState('');
    const [repairDesc, setRepairDesc] = useState('');

    return (

        <ListItem>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Item Name" variant="outlined" value={itemName} onChange={e => setItemName(e.target.value)}
                        onBlur={() => saveItem(id, itemName, 'itemName')} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Repair" variant="outlined" value={repairDesc} onChange={e => setRepairDesc(e.target.value)}
                        onBlur={() => saveItem(id, repairDesc, 'repair')} />
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