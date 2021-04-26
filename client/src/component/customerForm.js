import React, { useContext, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TicketService from '../services/API';
//Delete
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik';
import Container from '@material-ui/core/Container';
import * as Yup from 'yup';
import Textfield from './FormsUI/Textfield/index'
import Button from './FormsUI/Button/index'
import DateTimePicker from './FormsUI/DateTimePicker/index'
import Paper from '@material-ui/core/Paper';
import {TicketContext} from './Contexts/TicketContext'
import EditTicketForm from './editTicketForm'

const useStyles = makeStyles(theme => ({
    formWrapper: {
        margin: theme.spacing(1),
        padding:theme.spacing(1),
    },
}));

const CustomerForm = ({next}) => {

    const[ticketDetails, setTicketDetails] = useContext(TicketContext)
    const [showComponent, setShowComponent] = useState(false)
     
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [phone, setPhone] = useState('')
    // const [pickUpDate, setPickUpDate] = useState(date.toString())
    // const [ticketNumber, setTicketNumber] = useState('')
    // const [dropDate, setDropDate] = useState(date.toString())
    //const [ticketItems, setTicketItems] = useState([])

    const classes = useStyles();

    let history = useHistory()

    // const setTicketItem = (itemList) => {
    //     setTicketItems(itemList)
    // }


    //todo: Move this to editTicket?
    const callApi = (values) => {
        TicketService.create(values)
            .then(savedTicket => {
                return history.push("/edit", savedTicket)
            })

    }

    // const INITIAL_FORM_STATE = {
    //     firstName: '',
    //     lastName: '',
    //     phone: '',
    //     ticketNumber: '',
    //     dropDate: today,
    //     pickupDate: '',
    //     ticketItems:[],
    //     'ticketItems.item':{
    //         category:'',
    //         itemName:'',
    //         repairs:[],
    //         tempId:'',
    //     },
    //     'ticketItems.item.repairs.repair':{
    //         name:'',
    //         price:'',
    //     }
    // };

    const INITIAL_FORM_STATE = {
        firstName: ticketDetails.firstName,
        lastName: ticketDetails.lastName,
        phone: ticketDetails.phone,
        ticketNumber: ticketDetails.ticketNumber,
        dropDate: ticketDetails.dropDate,
        pickupDate: ticketDetails.pickUpDate,
    };

    const FORM_VALIDATION = Yup.object().shape({
        firstName: Yup.string()
            .required('Required')
            .matches(/^[A-Za-z ]*$/, 'Please enter valid first name'),
        lastName: Yup.string()
            .nullable()
            .required('Required')
            .matches(/^[A-Za-z ]*$/, 'Please enter valid last name'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Must be exactly 10 digits')
            .max(10, 'Must be exactly 10 digits')
            .required('Required'),
        ticketNumber: Yup.number()
            .integer()
            .typeError('Please enter a valid ticket number')
            .required('Required'),
        dropDate: Yup.date()
            .required('Required')
            .typeError('Please enter a valid date'),
        pickupDate: Yup.date()
            .required('Required')
            .typeError('Please enter a valid date'),
    });

    return (
        <div>
            {showComponent ? (<EditTicketForm/>) : (
            <Grid container>
                <Grid item xs={12}>
                    <Container maxWidth='lg' >
                        <div>
                            <Formik
                                initialValues={{ ...INITIAL_FORM_STATE }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={values => {
                                    setTicketDetails({...ticketDetails,...values})
                                    setShowComponent(!showComponent)
                                }}
                            >
                                <Form>
                                    <Grid container className={classes.formWrapper} component={Paper} spacing={2}>
    
    
    
                                        <Grid item xs={6}>
                                            <Textfield name='ticketNumber' label='Ticket Number' />
                                        </Grid>
    
                                        <Grid item xs={6}>
                                            <DateTimePicker name='dropDate' label='Drop Off' />
                                        </Grid>
    
                                        <Grid item xs={6}>
                                            <Textfield name='firstName' label='First Name' />
                                        </Grid>
    
                                        <Grid item xs={6}>
                                            <Textfield name='lastName' label='Last Name' />
                                        </Grid>
    
                                        <Grid item xs={6}>
                                            <Textfield name='phone' label='Phone' />
                                        </Grid>
    
                                        <Grid item xs={6}>
                                            <DateTimePicker name='pickupDate' label='Pick Up' />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{textAlign:'right'}}>
                                            <Button>
                                                Save Changes
                                            </Button>
                                        </Grid>
                                </Form>
    
                            </Formik>
                        </div>
                    </Container>
                </Grid>
            </Grid>
            )}
        </div>

    )

}

export default CustomerForm;