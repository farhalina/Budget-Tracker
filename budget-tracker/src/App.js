import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget  from './Components/Budget';
import Remaining from './Components/Remaining';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
    <div className='container'>
      <h1 className='mt-3'> Budget Tracker</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <Remaining/>
        </div>
        <div className='col-sm'>
          <ExpenseTotal/>
        </div>
      </div>
      <h3 className='mt-3'>
        Purchase History
      </h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList/>
        </div>
      </div>
      <h4 className='mt-3'>Add Purchase</h4>
      <div className='mt-3'>
        <div className='col-sm'>
          <AddExpenseForm/>
        </div>
      </div>
    </div>
    </AppProvider>
  )
};

export default App;