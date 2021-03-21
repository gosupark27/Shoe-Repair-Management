import { render, screen } from '@testing-library/react';
import TicketForm from './ticketForm';

describe('ticketForm test', () => {
  test('renders TicketForm', () => {
    render(<TicketForm test={callApi}/>);
    const ticketBtn = screen.getByText('Create Ticket')  
    expect(ticketBtn).toBeInTheDocument();
  });
});