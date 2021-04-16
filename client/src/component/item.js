import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const Item = ({ remove, item, updateItemList }) => {

    const classes = useStyles()

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
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Item
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={item.itemName}
                                onChange={itemNameChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Men Dress Shoe</MenuItem>
                                <MenuItem value={20}>Women high heels</MenuItem>
                                <MenuItem value={30}>Purse</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                    <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Repair
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={item.repair}
                                onChange={repairDescChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Half Sole</MenuItem>
                                <MenuItem value={20}>Heels</MenuItem>
                                <MenuItem value={30}>Clean</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <DeleteIcon data-testid="delIcon" style={{ color: 'black' }} onClick={() => remove(item.id)} />
                    </Grid>
                </Grid>
            </Grid>)
        </ListItem>
    )
}

export default Item;