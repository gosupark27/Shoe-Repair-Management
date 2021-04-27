import PermDrawer from './component/permanentDrawer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditTicket from './component/editTicketForm'
import MultiStepTicket from './component/multiStepTicket'
import { TicketProvider } from './component/Contexts/TicketContext'
import { ItemListProvider } from './component/Contexts/ItemListContext'

function App() {

  return (
    
        <Router>
          <Switch>
            <Route path="/ticket" render={ () => <TicketProvider><ItemListProvider><MultiStepTicket/></ItemListProvider></TicketProvider>} />
            <Route path="/view" component="ViewForm" />
            <Route path="/edit" component={EditTicket} />
          </Switch>
          <PermDrawer />
        </Router>
  );
}

export default App;
