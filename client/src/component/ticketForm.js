import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const TicketForm = () =>{
    //useState
    const [firstName, setFirstName] = useState(" ")
    const handleChange = (event) => {
        setFirstName(event.target.value);
        console.log(event.target.value);
      };

  
  return(
    <TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={handleChange} />
  )

}

export default TicketForm;