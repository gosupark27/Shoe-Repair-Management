import React, { useContext, useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import CustomerForm from './customerForm'
import EditCustomerForm from './editCustomerForm'
import Item from './item'
import { TicketContext } from './Contexts/TicketContext'
import { ItemListContext } from './Contexts/ItemListContext'

const useStyles = makeStyles(theme => ({
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
}));

const EditTicketForm = () => {
    const classes = useStyles()
    const [ticketDetails] = useContext(TicketContext)
    const [itemList, setItemList] = useContext(ItemListContext)
    const [showComponent, setShowComponent] = useState(false)
    const [editId, setEditId] = useState({})

    const handleCustomerEdit = () => {
        setShowComponent(!showComponent)
    }

    const handleItemEdit = (id) => {
        setEditId({ ...editId, [id]: !editId[id] })
    }
    const removeItem = (index) => {
        const newItemList = itemList.filter(item => item.id !== index);
        setItemList(newItemList);
    }

    const updateItemList = (index, value, _prop) => {
        const newItemList = itemList.map((item) => {
            if (item.id === index) {
                if (_prop === 'repair') {
                    item[_prop].push(value)
                }
                item[_prop] = value;
            }
            return item;
        });
        setItemList(newItemList)
    }

    return (
        <Grid container style={{ margin: 10 }} spacing={2}>
            <Grid container item xs={12} alignItems='center' justify='center' >
                <Grid item xs={12}>
                    {showComponent ? (<CustomerForm setShow={handleCustomerEdit} />) : (<EditCustomerForm setShow={handleCustomerEdit} />)}
                </Grid>
            </Grid>
            <Grid container item xs={12} alignItems='center' justify='center' spacing={2}>
                {ticketDetails.ticketItems.map(item => (
                    editId[item.id] ? (
                        <>
                            <Item key={item.id} id={item.id} remove={removeItem} update={updateItemList} />
                        </>
                    )
                        : (
                            <Grid item xs={4} key={item.id}>
                                <Container maxWidth="sm">
                                    <Card>
                                        <CardHeader
                                            action={
                                                <IconButton aria-label="edit" onClick={handleItemEdit.bind(this, item.id)}>
                                                    <EditIcon />
                                                </IconButton>
                                            }
                                            title={`${item.category} - ${item.itemName}`}
                                            subheader='Repair Details'
                                        />
                                        <CardContent>
                                            <FormControl>
                                                <Select
                                                    disabled={true}
                                                    multiple
                                                    value={ticketDetails.ticketItems.filter(i => i.id === item.id)[0].repair}
                                                    input={<Input fullWidth={true} />}
                                                    renderValue={(selected) => (
                                                        <div className={classes.chips}>
                                                            {selected.map((repair) => (
                                                                <Chip key={repair} label={repair} className={classes.chip} />
                                                            ))}
                                                        </div>
                                                    )}
                                                >
                                                </Select>
                                            </FormControl>
                                        </CardContent>
                                    </Card>
                                </Container>
                            </Grid>
                        )
                ))}

            </Grid>
            {Object.keys(editId).length === 0 ? (<div></div>) : (
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Button color='primary' variant='contained' onClick={() => setEditId(0)}>Save Changes</Button>
                </Grid>
            )
            }
        </Grid >
    )
}

export default EditTicketForm