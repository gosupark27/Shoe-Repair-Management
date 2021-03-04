import { render, screen, fireEvent} from '@testing-library/react';
import TicketForm from './ticketForm';


test('renders TicketForm', () => {
  render(<TicketForm />);
  const firstNameInput = screen.getByLabelText('First Name')
  expect(firstNameInput).toBeInTheDocument();

});

test('callApi is called when button is clicked', () => {
    const fn = jest.fn();
    render(<TicketForm/>)
    const button = screen.getByText('Create Ticket');
    expect(button).toBeInTheDocument();

    

})
