import React, { useState } from 'react'
import ItemForm from './itemForm'
import CustomerForm from './customerForm'
import Grid from '@material-ui/core/Grid';

const CreateTicketForm = () => {
    

    return (
        <Grid container>
            <Grid item xs={12}>
                <ItemForm />
            </Grid>
            <Grid item xs={12}>
                <CustomerForm />
            </Grid>
        </Grid>
    )

}

export default CreateTicketForm
