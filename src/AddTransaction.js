


import React from 'react';




function AddTransaction() {
  return (
    <div>

    <h2 className='AddTrans'> <br /> Add New Transaction</h2>
    <hr />
    <form className = 'transaction-form'>
      <label>
        Enter Description <br />
        <input type='text'
        placeholder='Enter Detail of Transaction'/> <br />
      </label>

      <label>
        Enter Amount <br />
        <input type='Number'
        placeholder='Enter Transaction Amount'/>
      </label>
      <br />
      <input className='button' type="submit" value="Add Transaction"/>

    </form>
    </div>
  );
}

export default AddTransaction;