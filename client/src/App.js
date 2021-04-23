import Login from './component/login'
import PermDrawer from './component/permanentDrawer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditTicket from './component/editTicket'
import MultiStepTicket from './component/multiStepTicket'
import ViewTickets from './component/viewTickets'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/ticket/create" component={MultiStepTicket} />
        <Route path="/ticket/view" component={ViewTickets} />
        <Route path="/edit" component={EditTicket} />
      </Switch>
      <PermDrawer />
    </Router>
  );
}

export default App;
