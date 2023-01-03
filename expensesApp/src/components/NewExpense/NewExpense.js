/* eslint-disable import/no-unresolved */
import './NewExpense.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

function NewExpense({ onAddExpense }) {
  const [formShowed, setFormShowed] = useState(false);

  const openFormHandler = () => setFormShowed(true);
  const cancelFormHandler = () => {
    setFormShowed(false);
  };
  const saveExpenceDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4()
    };
    onAddExpense(expenseData);
    setFormShowed(false);
  };

  return (
    <div className="new-expense">
      {formShowed ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenceDataHandler}
          onCancelForm={cancelFormHandler}
        />
      ) : (
        <button type="button" onClick={openFormHandler}>
          Add new expense
        </button>
      )}
    </div>
  );
}

export default NewExpense;
