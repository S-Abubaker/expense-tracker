import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <Typography variant='h6'>Income</Typography>
  <Typography variant='body1' className="money plus">${numberWithCommas(income)}</Typography>
        </div>
        <div>
          <Typography variant='h6'>Expense</Typography>
  <Typography variant='body1' className="money minus">${numberWithCommas(expense)}</Typography>
        </div>
      </div>
  )
}
