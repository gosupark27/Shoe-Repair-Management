import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Check from '@material-ui/icons/Check'
import StepConnector from '@material-ui/core/StepConnector'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CreateTicketForm from './createTicketForm'
import EditTicketForm from './editTicketForm'
import { TicketProvider, TicketContext } from './Contexts/TicketContext'
import { ItemListProvider } from './Contexts/ItemListContext'
import TicketService from '../services/API'

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Create Ticket', 'Confirm Ticket Details'];
}

function getStepContent(step, next) {

  switch (step) {
    case 0:
      return (
        <CreateTicketForm nextStep={next} />
      );
    case 1:
      return (
        <EditTicketForm nextStep={next} />
      );
    case 2:
      return ' <ViewTickets/>';
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const[ticketDetails, setTicketDetails] = useContext(TicketContext)
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  console.log(ticketDetails)

  const handleReset = () => {
    setActiveStep(0);
    setTicketDetails('')

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const callApi = (values) => {
    // TicketService.create(values)
    //     .then(savedTicket => {
            
    //     })
    handleNext()
}

  return (
        <div className={classes.root}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  Load {'<ViewTicket/> with newly created ticket at the top'}
              </Typography>
                <Button onClick={handleReset} variant='contained' color='primary' className={classes.button}>
                  Create New Ticket
                </Button>

              </div>
            ) : (
              <div className={classes.instructions}>
                {getStepContent(activeStep)}
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
              </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length -1 ? callApi : handleNext }
                    className={classes.button}
                  >
                    {activeStep === steps.length -1 ? 'Save Ticket' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
  );
}
