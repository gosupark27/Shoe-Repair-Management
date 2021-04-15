import React from 'react';
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TicketForm from './ticketForm';
import Login from './login';
import EditTicket from './editTicket'


const Navbar = () => {
    const routes = ["/login", "/ticket", "/view"]

    return (
        <Router>
            <Route path="/" render={(history) => (
                <div>
                    <AppBar>
                        <Tabs value={history.location.pathname !== '/' ? history.location.pathname : false}>  
                            <Tab label="Login" value={routes[0]} component={Link} to={routes[0]} />
                            <Tab label="Create Ticket" value={routes[1]} component={Link} to={routes[1]} />
                            <Tab label="View Tickets" value={routes[2]} component={Link} to={routes[2]} />
                        </Tabs>
                    </AppBar>
                </div>

            )}
            />

            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/ticket" component={TicketForm} />
                <Route path="/view" component="ViewForm" />
                <Route path="/edit" component={EditTicket} />
            </Switch>
        </Router>
    )
}

export default Navbar;
