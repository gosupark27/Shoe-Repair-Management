import { render, screen, fireEvent} from '@testing-library/react';
import CustomerForm from './customerForm';


test('renders CustomerForm', () => {
  render(<CustomerForm />);
  const firstNameInput = screen.getByLabelText('First Name')
  expect(firstNameInput).toBeInTheDocument();

});

test('callApi is called when button is clicked', () => {
    const callApi = jest.fn();
    render(<CustomerForm/>)
    const button = screen.getByText('Create Ticket');
    button.onclick = callApi;
     fireEvent.click(button);
     expect(callApi).toHaveBeenCalled(1);
})
