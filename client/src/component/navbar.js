import React from 'react';
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TicketForm from './customerForm';
import Login from './login';
import EditTicket from './editTicket'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
    root: {
        flexDirection: 'row',
        color: 'fff',
        width: '100%'
    }
})


const Navbar = () => {
    const routes = ["/login", "/ticket", "/view", "/edit"]
    const classes = useStyles()


    return (
        <Router>
            <Route path="/" render={(history) => (
                <div>
                    <AppBar>
                        <Toolbar>
                            <Tabs className={classes.root} value={history.location.pathname !== '/' ? history.location.pathname : false}>
                                <Tab label="Login" value={routes[0]} component={Link} to={routes[0]} />
                                <Tab label="Create Ticket" value={routes[1]} component={Link} to={routes[1]} />
                                <Tab label="View Tickets" value={routes[2]} component={Link} to={routes[2]} />
                                <Tab label="Edit Tickets" value={routes[3]} component={Link} to={routes[3]} />
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                </div>

            )}
            />

            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/ticket" component={TicketForm} />
                <Route path="/view" component="ViewForm" />
                <Route path="/edit" component={EditTicket} />
            </Switch>
        </Router>
    )
}

export default Navbar;
