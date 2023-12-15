import './App.css';
import ExpenseForm from './components/Expenses/ExpenseForm';
import Expense from './components/Expenses/ExpenseItems'

function App() {
  const dateOf=new Date();
  const arr=[{title:"Movies", price:"Rs 200"},
  {title:"Medicines", price:"Rs 100"},
  {title:"Soda", price:"Rs 20"}]
  return (
    <div className='app-items'> 
    <h1>Expense Tracker</h1>
    <ExpenseForm/>
       {
       arr.map((ele)=>
        {
       return <Expense title={ele.title} price={ele.price} date={dateOf}/>  
        })
        }
         </div>
       );
  }
export default App;
