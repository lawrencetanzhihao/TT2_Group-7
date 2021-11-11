

import React from 'react'
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses, clearItems, handleDelete, handleUpdate }) => {
   return (
      <> 
         <ul className="list">
            {expenses.map((expense) => {
               return (
                  <ExpenseItem
                     key={expense.id}
                     expense={expense}
                     handleDelete={handleDelete}
                     // handleUpdate={handleUpdate}
                  />
               )
            })}
         </ul>

         {expenses.length > 0 && (
            <button className="btn" onClick={clearItems}>
               Clear Expenses
               <MdDelete className="clear-btn" />
            </button>
         )}


         <div className="total-expenses">
            total expenses:
            <span className="total">
               ${expenses.reduce((accumulator, current) => {
                  return (accumulator += parseInt(current.amount));
               }, 0)}
            </span>
         </div>
      </>
   )
}

export default ExpenseList;
