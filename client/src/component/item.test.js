import { render, screen, fireEvent} from '@testing-library/react';
import Item from './item';


test('renders Item', () => {
  render(<Item item={item}/>);
  const itemNameInput = screen.getByLabelText('Item Name')
  expect(itemNameInput).toBeInTheDocument();
});