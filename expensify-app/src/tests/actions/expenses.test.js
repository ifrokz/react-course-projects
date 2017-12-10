import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// removeExpense
test ('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect ( action ).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

// editExpense
test ('should edit the expense object', () => {
    const action = editExpense('123abc', {name: "Bill", amount: '222'});
    expect ( action ).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            name: 'Bill',
            amount : '222'
        }
    });
});

// addExpense

test('should setup add expense action object with provided values.', () => {
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object without provided values.', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

