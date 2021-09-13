import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';
const initialState = JSON.parse(localStorage.getItem('transactions')) || [
	{
		amount: 75,
		category: 'House',
		type: 'Expense',
		date: '2021-09-14',
		id: 'f5b796a9-b982-4c30-b0ea-c10fb021ccd7',
	},
	{
		amount: 55,
		category: 'Travel',
		type: 'Expense',
		date: '2021-09-13',
		id: '592a9e62-59a3-4f47-9fb8-af6da45d78df',
	},
	{
		amount: 4,
		category: 'Business',
		type: 'Income',
		date: '2021-09-14',
		id: '7153878e-ebc6-4e10-be58-170f40310059',
	},
	{
		amount: 100,
		category: 'Salary',
		type: 'Income',
		date: '2021-09-13',
		id: 'f79a4470-6e78-48cb-837f-46196c82ea1c',
	},
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
	const [transactions, dispatch] = useReducer(contextReducer, initialState);

	const deleteTransaction = (id) => {
		dispatch({ type: 'DELETE_TRANSACTION', payload: id });
	};

	const addTransaction = (transaction) => {
		dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
	};

	const balance = transactions.reduce(
		(acc, currVal) =>
			currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount,
		0
	);

	return (
		<ExpenseTrackerContext.Provider
			value={{
				deleteTransaction,
				balance,
				addTransaction,
				transactions,
			}}>
			{children}
		</ExpenseTrackerContext.Provider>
	);
};
