import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import TicketForm from './component/ticketForm'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <TicketForm />
      </header>
    </div>
  );
}

export default App;
