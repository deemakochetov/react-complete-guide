/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onSaveExpenseData, onCancelForm }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onSaveExpenseData({
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: +enteredAmount
    });
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={changeTitleHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeAmountHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={changeDateHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancelForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
