import React, { useState, useEffect } from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

import { MdAttachMoney } from 'react-icons/md';

function App() {


  //******** Initial States ********//
  const [expenses, setExpenses] = useState([]);


  return (
    <>
      <main className="App">

        <div className="header-container">
          <div className="header-title">
            <MdAttachMoney />
            Project Expense Tracker
          </div>
        </div>


        <ExpenseForm />
        <ExpenseList />
        <Alert />
      </main>
    </>
  );
}

export default App;
