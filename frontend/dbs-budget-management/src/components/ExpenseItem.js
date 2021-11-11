

import React from 'react';
import { MdEdit, MdCancel } from 'react-icons/md';

const ExpenseItem = ({ expense, handleDelete, handleUpdate }) => {

   const { id, description, amount } = expense;

   return (
      <>
         <li className="item">
            <div className="info">
               <span className="expense">{description}</span>
               <span className="amount">${amount}</span>
            </div>

            <div>
               <button
                  className="edit-btn"
                  aria-label="update button"
                  onClick={() => handleUpdate(id)}
               >
                  <MdEdit />
               </button>

               <button
                  className="edit-btn"
                  aria-label="update button"
                  onClick={() => handleDelete(id)}
               >
                  <MdCancel />
               </button>
            </div>
         </li>
      </>
   )
}

export default ExpenseItem;
