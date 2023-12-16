import './App.css';
import NewExpense from './components/Expenses/NewExpense';
import Expense from './components/Expenses/ExpenseItems';
import { useState } from 'react';

function App() {
  const expenseArr=[{title:"Movies", amount:"Rs 200",date:new Date()},
  {title:"Medicines", amount:"Rs 100", date:new Date()},
  {title:"Soda", amount:"Rs 20", date:new Date()}]
  const[Arr,setArr]=useState(expenseArr);
  function saveExpense(data)
  {
    setArr((prevState)=>([...prevState,data]));
    expenseArr.push(data);
   console.log(Arr);
 
  }
  return (
    <div className='app-items'> 
    <h1>Expense Tracker</h1>
    <NewExpense onsaveExpense={saveExpense}/>
       {
       expenseArr.map((ele)=>
        {
       return <Expense title={ele.title} price={ele.amount} date={ele.date}/>  
        })
        }
         </div>
       );
  }
export default App;

