import { render, screen, fireEvent } from '@testing-library/react';
import TicketForm from './ticketForm';

describe('ticketForm test', () => {
  render(<TicketForm />);
  const ticketBtn = screen.getByText('Create Ticket')

  test('renders TicketForm', () => {
    expect(ticketBtn).toBeInTheDocument();
  });

  test('callApi is called when button is clicked', () => {
    const callApi = jest.fn();
    ticketBtn.onclick = callApi;
    fireEvent.click(ticketBtn);
    expect(callApi).toHaveBeenCalledTimes(1);
  });
});


