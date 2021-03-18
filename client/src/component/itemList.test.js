import { fireEvent, render, screen } from '@testing-library/react';
import ItemList from './itemList';

describe('itemList test', () => {
    const fn = jest.fn();
    render(<ItemList ticketItems={fn} />);
    const itemListBtn = screen.getByText('Add Item')

    test('renders ItemList', () => {
        expect(itemListBtn).toBeInTheDocument();
    });

    test('addItem is called when button is clicked', () => {
        const onClick = jest.fn();
        itemListBtn.onclick = onClick;
        fireEvent.click(itemListBtn);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});