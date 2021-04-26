import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useState, useContext } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import { TicketContext } from './Contexts/TicketContext'
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
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
        margin: theme.spacing(1),
        padding: theme.spacing(3),
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
}));


const Item = ({ id, remove, update }) => {

    const [ticketDetails] = useContext(TicketContext)
    const classes = useStyles()

    const itemNameChange = (e) => {
        const value = e.target.value
        update(id, value, 'itemName')
    }

    const categoryChange = (e) => {
        
        const value = e.target.value
        console.log('category change called', value, 'id:', id)
        update(id, value, 'category')

    }

    const repairChange = (e) => {
        const value = e.target.value
        update(id, value, 'repair')

    }

    const getItemName = (id) => {
        const item = ticketDetails.ticketItems.filter(item => item.id === id)
        if (item[0].itemName === "") {
            return ''
        }
        else
            return item[0].itemName
    }

    const getCategory = (id) => {
        const item = ticketDetails.ticketItems.filter(item => item.id === id)
        if (item[0].category === "") {
            return ''
        }
        else
            return item[0].category
    }

    const getRepair = (id) => {
        const item = ticketDetails.ticketItems.filter(item => item.id === id)
        return item[0].repair
    }



    const Category = [{ id: 1, name: 'Men' }, { id: 2, name: 'Women' }, { id: 3, name: 'Handbag' }, { id: 4, name: 'Luggage' }, { id: 5, name: 'Other' }]

    const MenItems = [{ id: 1, name: "Dress Shoe" }, { id: 2, name: "Cowboy Boots" }, { id: 3, name: "Sandals" }, { id: 4, name: "Sneakers" }, { id: 5, name: "Work boots" }, { id: 6, name: "Moccasin" }]

    const WomenItems = [{ id: 1, name: "Platforms" }, { id: 2, name: "Sandals" }, { id: 3, name: "Slingbacks" }, { id: 4, name: "Pump" }, { id: 5, name: "Wedge" }, { id: 6, name: " Knee Boots" }, { id: 7, name: "Thigh High Boots" },
    { id: 8, name: "Snow Boots" }, { id: 9, name: "Cowboy Boots" }, { id: 10, name: "Ankle Strap" }, { id: 11, name: "Moccasin" }]

    const HandbagItems = [{ id: 1, name: 'Shoulder Bags' }, { id: 2, name: "Tote Bags" }, { id: 3, name: "Crossbody Bags" }, { id: 4, name: "Satchels" }, { id: 5, name: "Clutch" }, { id: 6, name: "Bucket" }, { id: 7, name: "Messenger" }, { id: 8, name: "Hobo" }]

    const sortItems = (itemList) => {
        const sortedList = itemList.sort((a, b) => a.name.localeCompare(b.name))
        return sortedList
    }

    let itemOptions = []
    let repairOptions = []
    let categorySelect = getCategory(id)

    if (categorySelect.includes('Men')) { itemOptions = sortItems(MenItems) }
    else if (categorySelect.includes('Women')) { itemOptions = sortItems(WomenItems) }
    else if (categorySelect.includes('Handbag')) { itemOptions = sortItems(HandbagItems) }

    const shoeRepairs = ['New Heels', 'Half Soles', 'Full Soles', 'Taps', 'Clean', 'Dye']
    const purseRepairs = ['New Strap', 'Strap Repair', 'New Zipper', 'Slider Repair', 'Replace Slider', 'Clean', 'Dye']

    if (categorySelect === 'Men' || categorySelect === 'Women') {
        repairOptions = shoeRepairs.sort()
    }
    else if (categorySelect === 'Handbag') {
        repairOptions = purseRepairs.sort()
    }

    return (
        <Grid item xs={4}>
            <Container component={Paper} className={classes.formWrapper}>
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                    <DeleteIcon data-testid="delIcon" style={{ color: 'black' }} onClick={() => remove(id)} />
                </Grid>
                <Grid container item xs={12}>
                    <FormControl className={classes.formControl}>
                    <InputLabel>Pick Category</InputLabel>
                        <Select
                            value={getCategory(id)}
                            onChange={categoryChange}
                            displayEmpty={true}
                            fullWidth={true}
                            renderValue={() => getCategory(id)}
                            className={classes.selectEmpty}
                            defaultValue="Select Category"
                        >
                            {Category.map(item =>
                                <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                            )}
                        </Select>
                        <FormHelperText>Category</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                    <InputLabel>Pick Item</InputLabel>
                        <Select
                            value={[...getItemName(id)]}
                            onChange={itemNameChange}
                            displayEmpty={true}
                            renderValue={() => getItemName(id)}
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            {itemOptions?.map(item =>
                                <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                            )}
                        </Select>
                        <FormHelperText>Item Name</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Pick Repair</InputLabel>
                        <Select

                            multiple
                            value={getRepair(id)}
                            style={{ width: '100%' }}
                            onChange={repairChange}
                            input={<Input fullWidth={true} />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                    {selected.map((repair) => (
                                        <Chip key={repair} label={repair} className={classes.chip} />
                                    ))}
                                </div>
                            )}
                        >
                            {repairOptions?.map((repair) => (
                                <MenuItem key={repair} value={repair}>
                                    {repair}
                                </MenuItem>
                            ))}
                           
                        </Select>
                        <FormHelperText>Repair Name</FormHelperText>
                    </FormControl>
                </Grid>
            </Container>
        </Grid>
    )
}

export default Item;