import Login from './component/login'
import PermDrawer from './component/permanentDrawer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditTicket from './component/editTicketForm'
import MultiStepTicket from './component/multiStepTicket'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/ticket" component={MultiStepTicket} />
        <Route path="/view" component="ViewForm" />
        <Route path="/edit" component={EditTicket} />
      </Switch>
      <PermDrawer />
    </Router>
  );
}

export default App;
