import React from 'react';
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TicketForm from './ticketForm';
import Login from './login';
import Profile from './profile';
import AuthenticationButton from './authentication-button'
import ProtectedRoute from '../auth/protected-route'

const useStyles = makeStyles({
    rightAlign: {
      marginLeft: "auto"
    }
  });


const Navbar = () => {
    const routes = ["/ticket", "/view", "/login", "/profile"]
    const classes = useStyles();

    return (
        <Router>
            <Route path="/" render={(history) => (
                <div>
                    <AppBar>
                        <Tabs value={history.location.pathname !== "/" ? history.location.pathname:false}>
                            <AuthenticationButton/>
                            <Tab label="Create Ticket" value={routes[0]} component={Link} to={routes[0]} />
                            <Tab label="View Tickets" value={routes[1] } component={Link} to={routes[1]} />
                            <Tab label="Profile" value={ routes[3]} component={Link} to={routes[3]} />
                        </Tabs>
                    </AppBar>
                </div>

            )}
            />

            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/ticket" component={TicketForm} />
                <Route path="/view" component="ViewForm" />
                <Route path="/profile" component={Profile} />
            </Switch>
        </Router>
    )
}

export default Navbar;
