import './App.css';
import Expense from './components/Expenses/ExpenseItems'

function App() {
  const dateOf=new Date();
  const arr=[{title:"Movies", price:"Rs 200", locationOfExpense:"Delhi"},
  {title:"Medicines", price:"Rs 100",  locationOfExpense:"Bangaluru"},
  {title:"Soda", price:"Rs 20", locationOfExpense:"Lucknow"}]
  return (
    <div className='app-items'> 
    <h1>Expense Tracker</h1>
       {
       arr.map((ele)=>
        {
       return <Expense title={ele.title} price={ele.price} date={dateOf} locationOfExpense={ele.locationOfExpense}/>  
        })
        }
         </div>
       );
  }


export default App;
