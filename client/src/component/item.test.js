import { render, screen, fireEvent } from '@testing-library/react';
import Item from './item';



describe('item test', () => {
    const remove = jest.fn();
    const update = jest.fn();
    const propData = {
        id: '',
        itemName: '',
        repair: ' ',
    }
    render(<Item item={propData} remove={remove} updateItemList={update}/>);
    const delIcon = screen.getByTestId('delIcon')

    test('renders Item', () => {
        expect(screen.getByTestId('nameTxtField')).toBeInTheDocument;
    });

    test('onChange ', () => {
        delIcon.onclick = remove;
        fireEvent.click(delIcon);
        expect(remove).toHaveBeenCalledTimes(1);
    })
});