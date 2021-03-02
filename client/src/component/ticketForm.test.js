import { render, screen} from '@testing-library/react';
import TicketForm from './ticketForm';


test('renders TicketForm', () => {
  render(<TicketForm />);
  const firstNameInput = screen.getByLabelText('First Name')
  expect(firstNameInput).toBeInTheDocument();

});
