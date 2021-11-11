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

  const [alert, setAlert] = useState({ show: false });




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

  //handle alert 
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
  }
  

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (description !== '' && amount > 0) {
      const singleExpense = { id: uuidv4(), description, amount };
      setExpenses([...expenses, singleExpense]);

      setDescription('');
      setAmount('');

      handleAlert({
        type: 'danger',
        text: `Input a description and an amount greater than 0!`
      });
    }
  }

  //delete single expense
  const handleDelete = (id) => {
    console.log(`Expenses deleted: ${id}`);

    let deleteExpenses = expenses.filter((item) => item.id !== id);
    console.log(deleteExpenses);
    setExpenses(deleteExpenses);

    handleAlert({
      type: 'success',
      text: 'Expense Deleted!'
    })
  }
  
  //clear all expenses
  const clearItems = () => {
    console.log('Clear all expenses');
    setExpenses([]);

    handleAlert({
      type: 'success',
      text: 'All Expenses Cleared!'
    })
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
          handleDelete={handleDelete}
          clearItems={clearItems}
        />
      </main>

      {alert.show && <Alert type={alert.type} text={alert.text} />}
        <Alert />
    </>
  );
}

export default App;
