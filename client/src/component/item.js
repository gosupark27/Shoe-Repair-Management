import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300
    },
    menuItem:{
      fontSize:15,
      fontWeight:900
    },
    menuText:{
      fontSize:30,
      textAlign:'center',
    }
  }));


const Item = ({ remove, item, updateItemList }) => {

    const classes = useStyles()

    const itemNameChange = (e) => {
        const itemNameInput = e.target.value;
        console.log(e.target)
        console.log(e.target.name)
        updateItemList(item.id, itemNameInput, 'itemName');
    }

    const repairDescChange = (e) => {
        const repairDescInput = e.target.value;
        updateItemList(item.id, repairDescInput, 'repair');
    }

    const itemList = {
        Men: [{ id: 1, name: "Dress Shoe" }, { id: 2, name: "Boots" }],
        Women: [{ id: 1, name: "High Heels" }, { id: 2, name: "Sandals" }],
        Purse: [{ id: 1, name: 'Purse' }]
    };



    return (
        <ListItem>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink>
                                Item
                            </InputLabel>
                            <Select
                                value={item.itemName}
                                onChange={itemNameChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >

                                {Object.keys(itemList).map(
                                        (identityTypeKey) => {
                                            let children = [];

                                            children.push(<Divider />);
                                            children.push(<ListItemText className={classes.menuText}>{identityTypeKey}</ListItemText>);
                                            children.push(<Divider />);
                                            itemList[identityTypeKey].forEach(identity => {
                                                children.push(
                                                    <MenuItem className={classes.menuItem} key={identity.id} value={`${identityTypeKey} ${identity.name}`}>
                                                        {identity.name}
                                                    </MenuItem>
                                                );
                                            });

                                            return children;
                                        }
                                    )}
                                   
                            </Select>
                        </FormControl>
                    </Grid>
                        <Grid item xs={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink>
                                    Repair
                            </InputLabel>
                                <Select
                                    value={item.repair}
                                    onChange={repairDescChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Half Sole'}>Half Sole</MenuItem>
                                    <MenuItem value={'Heels'}>Heels</MenuItem>
                                    <MenuItem value={'Clean'}>Clean</MenuItem>
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