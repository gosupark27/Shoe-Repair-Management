import React, { createContext, useState } from 'react';

export const TicketContext = createContext()

export const TicketProvider = (props) => {
    const [ticketDetails, setTicketDetails] = useState({})

    return (
        <TicketContext.Provider value={[ticketDetails, setTicketDetails]}>
            {props.children}
        </TicketContext.Provider >
    )
}
