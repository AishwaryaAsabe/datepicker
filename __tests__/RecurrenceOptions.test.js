import { render, fireEvent } from '@testing-library/react';
import RecurrenceOptions from '../components/RecurrenceOptions';
import useRecurrenceStore from '../store/recurrenceStore';

jest.mock('../store/recurrenceStore');

describe('RecurrenceOptions', () => {
  it('renders recurrence options and handles selection', () => {
    const { setRecurrencePattern } = useRecurrenceStore.mockReturnValue({
      recurrencePattern: 'daily',
      setRecurrencePattern: jest.fn(),
    });

    const { getByText } = render(<RecurrenceOptions />);
    
    fireEvent.click(getByText('Weekly'));
    expect(setRecurrencePattern).toHaveBeenCalledWith('weekly');
  });
});
