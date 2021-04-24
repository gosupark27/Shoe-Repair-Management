import React from 'react'
import {Button} from '@material-ui/core'
import {useFormikContext} from 'formik'

const ButtonWrapper = ({children, }) => {
    
    const{submitForm}=useFormikContext()

    const handleSubmit = () => {
        submitForm()
    }

    const configButton = {
        variant:'contained',
        onClick: handleSubmit,
        color: 'primary',
        fullWidth:false,
    }
    
    return(
        <Button {...configButton}>
            {children}
        </Button>
    )
}

export default ButtonWrapper
