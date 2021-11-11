

import React from 'react'
import { MdAddCircle, MdCheckCircle } from 'react-icons/md';

const ExpenseForm = ({ description, amount, handleDescription, handleAmount, handleSubmit, update }) => {
   return (
      <form onSubmit={handleSubmit}>
         <div className="form-center">
            <div className="form-group">
               <label htmlFor="description">description</label>
               <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={description}
                  onChange={handleDescription}
               />
            </div>

            <div className="form-group">
               <label htmlFor="amount">amount</label>
               <input
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={handleAmount}
               />
            </div>
         </div>

         <button type="submit" className="btn">
            {update
               ?
                  <div className="update-text">
                     <span>update</span>
                     <MdCheckCircle className="update-btn" />
                  </div>
               :
                  <div className="add-text">
                     <span>add new expense</span>
                     <MdAddCircle className="add-btn" />
                  </div>
            }
         </button>
      </form>
   )
}

export default ExpenseForm;
