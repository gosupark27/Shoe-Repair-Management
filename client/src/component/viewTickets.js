import React, { useEffect, useState } from 'react'
import TicketService from '../services/API'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Row from './Row'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
        marginLeft: theme.spacing(25),
    },
    tableCell: {
        maxWidth: 40,
    },
    searchBox: {
        margin: 0,
        padding: 0,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    inputLabelRoot: {
        fontSize: 13,
    },
    inputRoot: {
        width: '60%',
    },
}));

const ViewTickets = () => {
    const classes = useStyles()

    const [ticketList, setTicketList] = useState()
    useEffect(() => {
        TicketService.getAll()
            .then(tickets => setTicketList(tickets))
    }, [])

    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth='lg'>
                    <div className={classes.formWrapper}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label='Ticket Tables'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell>
                                            Ticket Number
                                            </TableCell>
                                        <TableCell align='right'>
                                            First Name
                                            </TableCell>
                                        <TableCell align='right'>Last Name</TableCell>
                                        <TableCell align='right'>Phone Number</TableCell>
                                        <TableCell align='right'>Drop Off Date</TableCell>
                                        <TableCell align='right'>Pick Up Date</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell classes={{ root: classes.searchBox }}>
                                            <Box justifyContent="flex-end">
                                                <TextField
                                                    size='small'
                                                    variant='outlined'
                                                    InputProps={{ classes: { root: classes.inputRoot } }}
                                                    InputLabelProps={{ classes: { root: classes.inputLabelRoot } }} />
                                            </Box>
                                        </TableCell>
                                        <TableCell />
                                        <TableCell classes={{ root: classes.searchBox }}>
                                            <TextField
                                                size='small'
                                                variant='outlined'
                                                InputProps={{ classes: { root: classes.inputRoot } }}
                                                InputLabelProps={{ classes: { root: classes.inputLabelRoot } }} />
                                        </TableCell>
                                        <TableCell classes={{ root: classes.searchBox }}>
                                            <TextField
                                                size='small'
                                                variant='outlined'
                                                InputProps={{ classes: { root: classes.inputRoot } }}
                                                InputLabelProps={{ classes: { root: classes.inputLabelRoot } }} />
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ticketList?.map(row => (
                                        <Row key={row._id} row={row} />
                                    ))}
                                </TableBody>

                            </Table>

                        </TableContainer>
                    </div>
                </Container>
            </Grid>
        </Grid>
    )
}

export default ViewTickets
