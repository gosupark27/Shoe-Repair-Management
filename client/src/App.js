import './App.css';
import TicketForm from './component/ticketForm'
import Login from './component/login'
import Navbar from './component/navbar'
import PermDrawer from './component/permanentDrawer'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <PermDrawer/>
      </header>
    </div>
  );
}

export default App;
