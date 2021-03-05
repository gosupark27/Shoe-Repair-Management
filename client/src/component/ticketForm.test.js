import { render, screen, fireEvent} from '@testing-library/react';
import TicketForm from './ticketForm';


test('renders TicketForm', () => {
  render(<TicketForm />);
  const firstNameInput = screen.getByLabelText('First Name')
  expect(firstNameInput).toBeInTheDocument();

});

test('callApi is called when button is clicked', () => {
    const callApi = jest.fn();
    render(<TicketForm/>)
    const button = screen.getByText('Create Ticket');
    button.onclick = callApi;
     fireEvent.click(button);
     expect(callApi).toHaveBeenCalled(1);

    

})
