import { createContext } from "react";

const initialTransaction = [
    {amount: 500, description: 'Cash'},
    {amount: -200, description: 'Bill'}
]

export const TransactionContext = createContext(initialTransaction);
