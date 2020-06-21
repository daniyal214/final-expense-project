import React from 'react';

import './App.css';

import Header from './Header';
import Balance from './Balance';
import AccSummary from './AccSummary';
import TransactionHistory from './Transactionhistory';
import AddTransaction from './AddTransaction';





function App() {
  return (
    <div className='container'>
      <Header />
      <Balance />
      <AccSummary />
      <TransactionHistory />
      <AddTransaction />
      </div>
      
  );
}

export default App;
