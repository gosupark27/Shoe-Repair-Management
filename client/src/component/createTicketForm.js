import React from 'react'
import ItemForm from './itemForm'
import CustomerForm from './customerForm'
import Grid from '@material-ui/core/Grid';

const CreateTicketForm = ({next}) => {
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <ItemForm />
            </Grid>
            <Grid item xs={12}>
                <CustomerForm next={next}/>
            </Grid>
        </Grid>
    )

}

export default CreateTicketForm
