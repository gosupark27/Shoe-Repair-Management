import React from 'react'
import {useLocation} from 'react-router-dom'

const EditTicket = () => {
    const location = useLocation()
    return (
        <div>
            <h1>
                Herro this is the edit view
                {console.log("This is coming from edit ticket component!", location.state)}
            </h1>
        </div>
    )
}

export default EditTicket;