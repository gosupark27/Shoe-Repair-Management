import React from 'react'
import {TextField} from '@material-ui/core'
import {useField} from 'formik'

const DateTimePicker = ({name, ...otherProps}) => {

    const[field, meta] = useField(name)

    const configDateTimePicker = {
        ...field,
        ...otherProps,
        type: 'date',
        variant:'outlined',
        fullWidth:false,
        InputLabelProps:{
            shrink:true
        }
    }

    if(meta.touched && meta && meta.error){
        configDateTimePicker.error = true;
        configDateTimePicker.helperText = meta.error;
    }

    return(
        <TextField {...configDateTimePicker}/>
    )
}

export default DateTimePicker