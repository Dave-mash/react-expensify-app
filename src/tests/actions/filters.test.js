import { 
  setStartDate, 
  setEndDate, 
  setTextFilter, 
  sortByDate, 
  sortByAmount 
} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE', 
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should setup text filter with text value', () => {
  const text = 'Coffee';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should setup text filter default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

test('should generate action object for sort by date', () => {
  const action = sortByDate('coffee');
  expect(action).toEqual({ type: 'SORT_BY_DATE' })
});

test('should generate action object for sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type:'SORT_BY_AMOUNT' })
});