import './App.css';
import NewExpense from './components/Expenses/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

const dummyExpense=[{id:"e1",title:"Movies", amount:200 ,date:new Date()},
{id:"e2", title:"Medicines", amount:100 , date:new Date()},
{id:"e3", title:"Soda", amount:20, date:new Date()}];
let num=4;

function App() {
  const[expenseArr,setExpenseArr]=useState(dummyExpense);
  function saveExpense(data)
  {
    data.id="e"+ num++;
    setExpenseArr((prevExpenseArr)=>{
    return [data,...prevExpenseArr]
  })
      
}
  return (
    <div className='app-items'> 
    <h1>Expense Tracker</h1>
    <NewExpense onsaveExpense={saveExpense}/>
       {
        <Expenses items={expenseArr}/>  
              }
         </div>
       );
  }
export default App;

