import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from '@material-ui/core/Divider';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from "@material-ui/core/Button"
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300
    },
    menuItem: {
        fontSize: 15,
        fontWeight: 900
    },
    menuText: {
        fontSize: 30,
        textAlign: 'center',
    },
    formWrapper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding:theme.spacing(3),
    },
}));


const Item = ({ repairs, remove, repairChips, category, setCategory, item, updateItemList, setItem, setRepairs, setChip }) => {

    const [itemSelect, setItemSelect] = useState('')
    const classes = useStyles()

    // const itemNameChange = (e) => {
    //     const itemNameInput = e.target.value
    //     setItemSelect(itemNameInput.substr(0, itemNameInput.indexOf(' ')))
    //     updateItemList(item.id, itemNameInput, 'itemName');
    // }

    // const repairDescChange = (e) => {
    //     const repairDescInput = e.target.value;
    //     updateItemList(item.id, repairDescInput, 'repair');
    // }

    const MenItems = [{ id: 1, name: "Dress Shoe" }, { id: 2, name: "Cowboy Boots" }, { id: 3, name: "Sandals" }, { id: 4, name: "Sneakers" }, { id: 5, name: "Work boots" }, { id: 6, name: "Moccasin" }]

    const WomenItems = [{ id: 1, name: "Platforms" }, { id: 2, name: "Sandals" }, { id: 3, name: "Slingbacks" }, { id: 4, name: "Pump" }, { id: 5, name: "Wedge" }, { id: 6, name: " Knee Boots" }, { id: 7, name: "Thigh High Boots" },
    { id: 8, name: "Snow Boots" }, { id: 9, name: "Cowboy Boots" }, { id: 10, name: "Ankle Strap" }, { id: 11, name: "Moccasin" }]

    const HandbagItems = [{ id: 1, name: 'Shoulder Bags' }, { id: 2, name: "Tote Bags" }, { id: 3, name: "Crossbody Bags" }, { id: 4, name: "Satchels" }, { id: 5, name: "Clutch" }, { id: 6, name: "Bucket" }, { id: 7, name: "Messenger" }, { id: 8, name: "Hobo" }]

    const sortItems = (itemList) => {
        const sortedList = itemList.sort((a, b) => a.name.localeCompare(b.name))
        return sortedList
    }

    let itemList = []

    if (category.includes('Men')) { itemList = sortItems(MenItems) }
    else if (category.includes('Women')) { itemList = sortItems(WomenItems) }
    else if (category.includes('Handbag')) { itemList = sortItems(HandbagItems) }
    //do we need an else statement here? 

    // const itemList = {
    //     Men: sortItems(MenItems),
    //     Women: sortItems(WomenItems),
    //     Handbag: sortItems(HandbagItems),
    // };

    const shoeRepairs = ['New Heels', 'Half Soles', 'Full Soles', 'Taps', 'Clean', 'Dye']
    const purseRepairs = ['New Strap', 'Strap Repair', 'New Zipper', 'Slider Repair', 'Replace Slider', 'Clean', 'Dye']

    let repairOptions = []

    if (category === 'Men' || category === 'Women') {
        repairOptions = shoeRepairs.sort()
    }
    else if (category === 'Handbag') {
        repairOptions = purseRepairs.sort()
    }

    const createRepairChip = () => {

    }

    const handleRepairChange = (event, value) => {
        setRepairs(value)
    }

    return (
        <Container component={Paper} className={classes.formWrapper}>
            <Grid container item xs={10}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Category</FormLabel>
                    <RadioGroup
                        aria-label="Cateogry"
                        name="Category"
                        value={category}
                        onChange={setCategory}
                        row={true}
                    >
                        <FormControlLabel value="Men" control={<Radio />} label="Men" />
                        <FormControlLabel value="Women" control={<Radio />} label="Women" />
                        <FormControlLabel value="Handbag" control={<Radio />} label="Handbag" />
                        <FormControlLabel value="Luggage" control={<Radio />} label="Luggage" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <DeleteIcon data-testid="delIcon" style={{ color: 'black' }} onClick={() => remove(item.id)} />
            </Grid>
            <Grid item xs={5}>
                <Autocomplete
                    options={itemList}
                    getOptionLabel={(itemList) => itemList.name}
                    getOptionSelected={(option, value) => option.name === value.name}
                    style={{ width: 300 }}
                    onChange={setItem}
                    renderInput={(params) => <TextField {...params} label="Item Name" variant="outlined" />}
                />
            </Grid>
            <Grid item xs={5}>
                <Autocomplete
                    options={repairOptions}
                    getOptionLabel={(repair) => repair}
                    getOptionSelected={(option, value) => option === value}
                    style={{ width: 300 }}
                    onChange={handleRepairChange}
                    renderInput={(params) => <TextField {...params} label="Repair" variant="outlined" />}
                />
            </Grid>
            <Grid item xs={12}>
                {repairChips}
            </Grid>
        </Container>
    )
}

export default Item;