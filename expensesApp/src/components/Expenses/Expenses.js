import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses({ expenses }) {
  const [choosedYear, setChoosedYear] = useState(2022);

  const yearChangeHandler = (newYearValue) => {
    setChoosedYear(newYearValue);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === choosedYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={choosedYear}
          onYearChange={yearChangeHandler}
        />
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
