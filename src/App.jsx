import React, {useState} from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    // {
    //   name: 'Spinach',
    //   description: 'Groceries',
    //   amount: 1200,
    //   category: 'Food',
    //   Date: 6/5/2024,
    // },
    // {
    //   name: 'Phone',
    //   description: 'Internet',
    //   amount: 2500,
    //   category: 'Utilities',
    //   Date:6/5/2024,
    // },
    // {
    //   name: 'Netflix',
    //   description: 'Netflix Subscription',
    //   amount: 950,
    //   category: 'Entertainment',
    //   Date:6/5/2024,
    // },
  ]);
  const handleAddExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]) //adds new expense at the top
  }
  return (
    <>
      <div className='App'>
        <h1>Expense Tracker</h1>
        <ExpenseForm onAddExpense={handleAddExpense}/>
        <ExpenseTable expenses = {expenses}/>
      </div>
    </>
  );
}

export default App;
