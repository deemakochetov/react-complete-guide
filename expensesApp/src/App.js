import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css'

const INITIAL_EXPENSES = [
  {
    title: 'Car Insurance',
    amount: 298.49,
    date: new Date(2022, 10, 6),
    id: '23'
  },
  {
    title: 'Car Insurance',
    amount: 298.49,
    date: new Date(2022, 10, 6),
    id: '34'
  }
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((expensesData) => [...expensesData, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;