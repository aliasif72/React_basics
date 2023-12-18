import './App.css';
import NewExpense from './components/Expenses/NewExpense';
import Expense from './components/Expenses/ExpenseItems';
import { useState } from 'react';

const dummyExpense=[{id:"e1",title:"Movies", amount:"Rs 200",date:new Date()},
{id:"e2", title:"Medicines", amount:"Rs 100", date:new Date()},
{id:"e3", title:"Soda", amount:"Rs 20", date:new Date()}];

function App() {
  const[expenseArr,setExpenseArr]=useState(dummyExpense);
  function saveExpense(data)
  {
    setExpenseArr((prevExpenseArr)=>{
    return [data,...prevExpenseArr]
  })
     console.log(expenseArr);
     console.log(data);
   }
  return (
    <div className='app-items'> 
    <h1>Expense Tracker</h1>
    <NewExpense onsaveExpense={saveExpense}/>
       {
       expenseArr.map((ele)=>
        {
       return <Expense key={ele.id} title={ele.title} price={ele.amount} date={ele.date}/>  
        })
        }
         </div>
       );
  }
export default App;

