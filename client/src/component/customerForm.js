import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TicketService from '../services/API';
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik';
import Container from '@material-ui/core/Container';
import * as Yup from 'yup';
import Textfield from './FormsUI/Textfield/index'
import Button from './FormsUI/Button/index'
import DateTimePicker from './FormsUI/DateTimePicker/index'

const useStyles = makeStyles(theme => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
}));

const TicketForm = ({setTicket}) => {
    const date = new Date()
    const today = `${date.getFullYear()}-${((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1)))}-${((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))}`
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [phone, setPhone] = useState('')
    // const [pickUpDate, setPickUpDate] = useState(date.toString())
    // const [ticketNumber, setTicketNumber] = useState('')
    // const [dropDate, setDropDate] = useState(date.toString())
    const [ticketItems, setTicketItems] = useState([])

    const classes = useStyles();

    let history = useHistory()

    const setTicketItem = (itemList) => {
        setTicketItems(itemList)
    }


    const callApi = (values) => {
        TicketService.create(values)
            .then(savedTicket => {
                return history.push("/edit", savedTicket)
            })

    }

    const INITIAL_FORM_STATE = {
        firstName: '',
        lastName: '',
        phone: '',
        ticketNumber: '',
        dropDate: today,
        pickupDate: '',
        ticketItems:'',

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
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth='md' >
                    <div className={classes.formWrapper}>
                        <Formik
                            initialValues={{ ...INITIAL_FORM_STATE }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={values => {
                                setTicket(...values)
                            }}
                        >
                            <Form>
                                <Grid container spacing={2}>

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

                                    <Grid item xs={12}>
                                        <Button>
                                            Next
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>

                        </Formik>
                    </div>
                </Container>
            </Grid>
        </Grid>


    )

}

export default TicketForm;