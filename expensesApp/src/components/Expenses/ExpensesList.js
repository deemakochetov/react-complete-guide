import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

function ExpensesList({ filteredExpenses }) {
  if (filteredExpenses.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
