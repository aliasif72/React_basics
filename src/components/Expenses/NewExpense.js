import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props)
{
    const [form,setForm]=useState(false);

    function newExpense(data){
        props.onsaveExpense(data);
        setForm(false);
    }

    function showForm()
    {
        setForm(true);
    }

    function stopForm()
    {
       setForm(false);
    }

    return(
        <div className='new-expense'>
       {!form && <button onClick={showForm} >Add Expense</button>}
         {form && <ExpenseForm onNewExpense={newExpense}
          onCancel={stopForm}/>}
        </div>
    )
}

export default NewExpense;