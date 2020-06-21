import React from 'react';

export const Transaction = ({transObj}) => { 
    return (
        <li>
            <span>{transObj.description}</span>
            <span> {transObj.amount} </span>
          </li>
    )
}