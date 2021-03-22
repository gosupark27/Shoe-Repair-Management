import { fireEvent, render, screen } from '@testing-library/react';
import ItemList from './itemList';

describe('itemList test', () => {
    const fn = jest.fn();
    render(<ItemList setTicketItems={fn} />);
    const itemListBtn = screen.getByText('Add Item')

    test('renders ItemList', () => {
        expect(itemListBtn).toBeInTheDocument();
    });
});