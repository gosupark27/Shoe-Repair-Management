import React from 'react';
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TicketForm from './ticketForm';
import Login from './login';


const Navbar = () => {
    const routes = ["/login", "/ticket", "/view"]

    return (
        <Router>
            <Route path="/" render={(history) => (
                <div>
                    <AppBar>
                        <Tabs>
                            <Tab label="Login" value={history.location.pathname} component={Link} to={routes[0]} />
                            <Tab label="Create Ticket" value={history.location.pathname} component={Link} to={routes[1]} />
                            <Tab label="View Tickets" value={history.location.pathname} component={Link} to={routes[2]} />
                        </Tabs>
                    </AppBar>
                </div>

            )}
            />

            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/ticket" component={TicketForm} />
                <Route path="/view" component="ViewForm" />
            </Switch>
        </Router>
    )
}

export default Navbar;
