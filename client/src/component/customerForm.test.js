import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CustomerForm from './customerForm'
import { TicketProvider } from './Contexts/TicketContext'

describe('Testing CustomerForm component', () => {
  test('renders CustomerForm', () => {
    const { getByText } = render(
                          <TicketProvider>
                            <CustomerForm />
                          </TicketProvider>);
    expect(getByText('Save Changes')).toBeInTheDocument();
  });
})

