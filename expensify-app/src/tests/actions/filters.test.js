import moment from 'moment';
import { 
    setTextFilter,
    sortByDate, 
    sortByAmount, 
    setStartDate, 
    setEndDate
} from '../../actions/filters';


// SET_START_DATE
test('should generate aet start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

// SET_END_DATE
test ('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

// SORT_BY_AMOUNT
test('should return the object for sort by amount', ()=>{
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

// SORT_BY_DATE
test('should return the objet for sort by date', ()=>{
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

// SET_TEXT_FILTER
test('should return the text to filter by as empty', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should return the text to filter by', ()=>{
    const text = 'test text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    });
});
