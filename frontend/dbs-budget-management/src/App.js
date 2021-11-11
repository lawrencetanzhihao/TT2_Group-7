import React, { useState, useEffect } from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { v4 as uuidv4 } from 'uuid';

import { MdAttachMoney } from 'react-icons/md';

function App() {


  //******** Initial States ********//
  const [expenses, setExpenses] = useState([]);

  const [description, setDescription] = useState('');

  const [amount, setAmount] = useState('');




  //******** Functionality *******/
  //handle description
  const handleDescription = (e) => {
    console.log(`description: ${e.target.value}`);
    setDescription(e.target.value);
  };

  //handle amount
  const handleAmount = (e) => {
    console.log(`amount: ${e.target.value}`);
    setAmount(e.target.value);
  }

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (description !== '' && amount > 0) {
      const singleExpense = { id: uuidv4(), description, amount };
      setExpenses([...expenses, singleExpense]);

      setDescription('');
      setAmount('');
    }
  }
  

  return (
    <>
      <main className="App">

        <div className="header-container">
          <div className="header-title">
            <MdAttachMoney />
            Project Expense Tracker
          </div>
        </div>


        <ExpenseForm
          description={description}
          amount={amount}
          handleDescription={handleDescription}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          // update={update}
        />

        <ExpenseList
          expenses={expenses}
        />
        <Alert />
      </main>
    </>
  );
}

export default App;
