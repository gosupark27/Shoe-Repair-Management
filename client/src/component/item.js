import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Item = ({ setItem }) => {
    const [itemName, setItemName] = useState('');
    const [repair, setRepair] = useState('');

    return (

        <ListItem>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Item Name" variant="outlined" value={itemName} onChange={e => setItemName(e.target.value)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Repair" variant="outlined" value={repair} onChange={e => setRepair(e.target.value)} />
                    </Grid>
                    <Grid item xs={4}>
                        <DeleteIcon style={{ color: 'white' }} />
                    </Grid>
                </Grid>
            </Grid>
        </ListItem>
    )
}

export default Item;