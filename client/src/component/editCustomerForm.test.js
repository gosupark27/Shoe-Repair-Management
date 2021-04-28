import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import EditCustomerForm from './editcustomerForm'
import { TicketProvider } from './Contexts/TicketContext'

describe('Testing EditCustomerForm component', () => {
    test('renders CustomerForm', () => {
      const { getByLabelText } = render(
        <TicketProvider>
          <EditCustomerForm />
        </TicketProvider>);
      expect(getByLabelText('Full Name')).toBeInTheDocument();
    });
    test('renders EditCustomerForm with prop', async () => {
      const fn = jest.fn()
      const{container}=render(
        <TicketProvider>
          <EditCustomerForm setShow={fn} />
        </TicketProvider>);
    //   const ticketNumber = container.querySelector('input[name="ticketNumber"]')
    //   const pickUpDate = container.querySelector('input[name="pickUpDate"]')
    //   const dropDate = container.querySelector('input[name="dropDate"]')
    //   const firstName = container.querySelector('input[name="firstName"]')
    //   const lastName = container.querySelector('input[name="lastName"]')
    //   const phone = container.querySelector('input[name="phone"]')
      const saveBtn = container.querySelector('button')
  
    //   await waitFor(() => {
    //     fireEvent.change(ticketNumber, {
    //       target: {
    //         value: "4567"
    //       }
    //     })
    //   })
    //   await waitFor(() => {
    //     fireEvent.change(pickUpDate, {
    //       target: {
    //         value: "12/12/21"
    //       }
    //     })
    //   })
    //   await waitFor(() => {
    //     fireEvent.change(dropDate, {
    //       target: {
    //         value: "12/21/21"
    //       }
    //     })
    //   })
    //   await waitFor(() => {
    //     fireEvent.change(firstName, {
    //       target: {
    //         value: "Josh"
    //       }
    //     })
    //   })
    //   await waitFor(() => {
    //     fireEvent.change(lastName, {
    //       target: {
    //         value: "Park"
    //       }
    //     })
    //   })
    //   await waitFor(() => {
    //     fireEvent.change(phone, {
    //       target: {
    //         value: "5203969285"
    //       }
    //     })
    //   })
  
      fireEvent.click(saveBtn)
      await waitFor(() => {expect(fn).toHaveBeenCalledTimes(1)})
    });
  })