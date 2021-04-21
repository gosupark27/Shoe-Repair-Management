import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useHistory} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    nestedList: {
        marginLeft: theme.spacing(2)
    },
    drawerTitle: {
        marginTop: theme.spacing(2),
        fontWeight:800,
    },
}));

const PermanentDrawer = () => {
    const classes = useStyles();
    const [open, setOpen] = useState({});
    const history = useHistory()

    const itemClick = (name) => {
        let input = { [name]: !open[name] };
        setOpen(input);
    };

    return (
        <div className={classes.root}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
            anchor="left"
          >
            <div style={{padding:20}}>
                <Typography varaint='h2'>
                    
                    <Box m={1} fontSize={20} fontWeight='fontWeightBold'>
                    Shoe Repair Management
                    </Box>
                </Typography>
            </div>
            <Divider/>
            <List>
              <ListItem button>
              <ListItemIcon><ScheduleIcon/></ListItemIcon>
                <ListItemText primary="Schedule" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button onClick={itemClick.bind(this, "ticket")}>
              <ListItemIcon><ListAltIcon/></ListItemIcon>
                <ListItemText primary="Ticket" />
                
                {open["ticket"] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
    
              <Collapse in={open.ticket}>
                <List className={classes.nestedList}>
                  <ListItem button onClick={() => history.push('/ticket')}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ViewHeadlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="View" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
    
            <Divider />
    
            <List>
              <ListItem button onClick={itemClick.bind(this, "customer")}>
              <ListItemIcon><PersonIcon/></ListItemIcon>
                <ListItemText primary="Customer" />
                {open["customer"] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open.customer}>
                <List className={classes.nestedList}>
                  <ListItem button>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ViewHeadlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="View" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
            <Divider />
            <List>
              <ListItem button>
              <ListItemIcon><SettingsIcon/></ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </List>
            <Divider />
          </Drawer>
        </div>
      );
}

export default PermanentDrawer