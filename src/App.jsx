import React from 'react';
import ExpenseTable from '.components/ExpenseTable';
import './app.css';

function App() {
  const sampleExpenses = [
    {
      description: 'Groceries',
      amount: 1200,
      category: 'Food',
    },
    {
      description: 'Internet',
      amount: 2500,
      category: 'Utilities',
    },
    {
      description: 'Netflix Subscription',
      amount: 950,
      category: 'Entertainment',
    },
  ];
  return (
    <>
      <div className='App'>
        <h1>Expense Tracker</h1>
        <ExpenseTable expenses = {sampleExpenses}/>
      </div>
    </>
  );
}

export default App;
