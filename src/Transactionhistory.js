


import React, { useContext } from 'react';
import { TransactionContext } from './TransContext';
import { Transaction } from './Transaction';





function TransactionHistory() {
  

  let  {transactions}  = useContext(TransactionContext);
  return (
    <div>
      <h2> History </h2>
      <hr />
      <ul className='transaction-list'>
        {transactions.map(transObj => (
          <Transaction key={transactions.id} transactions = {transactions} />
        ))}
                  
              
              
          
          
       
        
        
      </ul>
    </div>
  );
}

export default TransactionHistory;