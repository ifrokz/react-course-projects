import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';






// timestamps (milliseconds)
// January 1st 1970 (unix epoch)
// 33400, 10, 203




store.subscribe ( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500} ) );

// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'fkasdjfioew',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent', 
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Jen',
//     age: 24
// }

// console.log({
//     age: 11,
//     ...user,
//     gender: 'Female'
// })