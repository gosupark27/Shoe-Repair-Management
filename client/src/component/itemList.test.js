import { render, screen} from '@testing-library/react';
import ItemList from './itemList';


test('renders ItemList', () => {
  render(<ItemList />);
  const itemListBtn = screen.getByText('Add Item')
  expect(itemListBtn).toBeInTheDocument();
});