import React, {useState} from 'react';

const AddExpenseForm = ({onAddExpense}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const[category, setCategory] = useState('food');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refreshing of page

    if (!name || !description  || !amount ||!date  ) {
      alert ('please fill in all the fields.')
      return;
    }
    const newExpense = {
      name,
      description,
      amount: parseFloat(amount),
      category,
      date,
    };
    onAddExpense(newExpense); //call parent handler

    //reset fields
    setName ('');
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit = {handleSubmit}>
      <h2>Add Expense</h2>
      <div>
        <label>Name:</label><br />
        <input
         type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}
          />
          
      </div>
      <div>
        <label>Description:</label><br />
        <input
         type="text"
         value={description}
         onChange={(e) => setDescription(e.target.value)}
          />
          
      </div>
      <div>
        <label>Amount (Ksh):</label><br />
        <input
         type="number"
         value={amount}
         onChange={(e) => setAmount(e.target.value)}
          />
          
      </div>
      <div>
        <label>Category:</label><br />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transport">Transport</option>
        </select>
      </div>
      <div>
        <label>Date:</label><br />
        <input
         type="date"
         value={date}
         onChange={(e) => setDate(e.target.value)}
          />
          
      </div>
      <button type="submit">Add Expense</button>
     
    </form>
  );

};
export default AddExpenseForm;