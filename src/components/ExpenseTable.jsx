import React from 'react';

const ExpenseTable = ({expenses}) => {
  return (
    <div>
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ?(
            <tr>
              <td colspan="5" style={{textAlign:'center'}}>No expenses found</td>
            </tr>
          ) : (
            expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>

              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;