import './App.css';
import NewExpense from './components/Expenses/NewExpense';
import Expense from './components/Expenses/ExpenseItems';

function App() {
  const dateOf=new Date();
  const expenseArr=[{title:"Movies", amount:"Rs 200"},
  {title:"Medicines", amount:"Rs 100"},
  {title:"Soda", amount:"Rs 20"}]
  function saveExpense(data)
  {
   expenseArr.push(data);
   console.log(expenseArr);
  }
  return (
    <div className='app-items'> 
    <h1>Expense Tracker</h1>
    <NewExpense onsaveExpense={saveExpense}/>
       {
       expenseArr.map((ele)=>
        {
       return <Expense title={ele.title} price={ele.amount} date={dateOf}/>  
        })
        }
         </div>
       );
  }
export default App;

