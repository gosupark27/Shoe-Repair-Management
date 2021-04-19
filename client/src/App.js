import './App.css';
import TicketForm from './component/ticketForm'
import Login from './component/login'
import Navbar from './component/navbar'
import PermDrawer from './component/permanentDrawer'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EditTicket from './component/editTicket'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/ticket" component={TicketForm} />
        <Route path="/view" component="ViewForm" />
        <Route path="/edit" component={EditTicket} />
      </Switch>
      <div className="App">
        <header className="App-header">
          <PermDrawer />
        </header>
      </div>
    </Router>
  );
}

export default App;
