import React, {useState} from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    // {
    //   name: 'Spinach',
    //   description: 'Groceries',
    //   amount: 1200,
    //   category: 'Food',
    //   date: 6/5/2024,
    // },
    // {
    //   name: 'Phone',
    //   description: 'Internet',
    //   amount: 2500,
    //   category: 'Utilities',
    //   date:6/5/2024,
    // },
    // {
    //   name: 'Netflix',
    //   description: 'Netflix Subscription',
    //   amount: 950,
    //   category: 'Entertainment',
    //   date:6/5/2024,
    // },
   
  ]);
  const [searchTerm, setSearchTerm] = useState ('');

  const handleAddExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };
  //filtering
  const filteredExpenses = expenses.filter((expense) => {
    const term = searchTerm.toLowerCase();
    return (
      expense.name.toLowerCase().includes(term) ||
      expense.description.toLowerCase().includes(term) ||
      expense.category.toLowerCase().includes(term) ||
      expense.date.toLowerCase().includes(term)
    );
  });
  
 
 
  return (
    <>
      <div className='App'>
        <h1>Expense Tracker</h1>
        <ExpenseForm onAddExpense={handleAddExpense}/>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
<ExpenseTable expenses={filteredExpenses} />

      </div>
    </>
  );
}

export default App;
