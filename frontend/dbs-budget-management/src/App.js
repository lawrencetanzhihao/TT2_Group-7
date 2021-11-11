import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { v4 as uuidv4 } from 'uuid';
import { MdAttachMoney } from 'react-icons/md';

const initialExpenses = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : [];


function App() {


  //******** Initial States ********//
  const [expenses, setExpenses] = useState(initialExpenses);

  const [description, setDescription] = useState('');

  const [amount, setAmount] = useState('');

  const [alert, setAlert] = useState({ show: false });

  const [update, setUpdate] = useState(false);

  const [updateId, setUpdateId] = useState(0);


  useEffect(() => {
    console.log('useEffect called');
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses]);

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

    setTimeout(() => {
      setAlert({ show: false })
    }, [3000]);
  };


  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (description !== '' && amount > 0) {

      if (update) {
        let updateExpenses = expenses.map(item => {
          return item.id === updateId ? { ...item, description, amount } : item
        });

        setExpenses(updateExpenses);
        setUpdate(false);

        handleAlert({
          type: 'success',
          text: 'Expense Updated!'
        })

      } else {
        const singleExpense = { id: uuidv4(), description, amount };
        setExpenses([...expenses, singleExpense]);

        handleAlert({
          type: 'success',
          text: 'Expense Added!'
        })
      }

      setDescription('');
      setAmount('');
    } else {
      handleAlert({
        type: 'danger',
        text: `Input a description and an amount greater than 0!`
      });
    }
  };

  //update single expense
  const handleUpdate = (id) => {
    console.log(`Expenses updated: ${id}`);

    let updateExpenses = expenses.find(item => item.id === id);
    console.log(updateExpenses);

    let { description, amount } = updateExpenses;
    setDescription(description);
    setAmount(amount);

    setUpdate(true);

    setUpdateId(id);
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
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard userId={1} />
          </Route>
          <Route path="/budget">
            <main className="App">

              <div className="header-container">
                <div className="header-title">
                  <MdAttachMoney />
                  Budget Management Application
                </div>
              </div>

              <ExpenseForm
                description={description}
                amount={amount}
                handleDescription={handleDescription}
                handleAmount={handleAmount}
                handleSubmit={handleSubmit}
                update={update}
              />

              <ExpenseList
                expenses={expenses}
                handleDelete={handleDelete}
                clearItems={clearItems}
                handleUpdate={handleUpdate}
              />
            </main>

            {alert.show && <Alert type={alert.type} text={alert.text} />}
            <Alert />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
