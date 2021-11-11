

import React from 'react'
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses }) => {
   return (
      <> 
         <ul className="list">
            {expenses.map((expense) => {
               return (
                  <ExpenseItem
                     key={expense.id}
                     expense={expense}
                  />
               )
            })}
         </ul>

         {expenses.length > 0 && (
            <button className="btn">
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
