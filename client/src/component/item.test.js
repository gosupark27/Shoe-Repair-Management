import { render, screen} from '@testing-library/react';
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
    test('renders Item', () => {
        expect(screen.getByTestId('nameTxtField')).toBeInTheDocument;
    });
});