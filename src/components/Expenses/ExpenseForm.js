import './NewExpense.css';
import './ExpenseForm.css';
//import {useState} from 'react';
function ExpenseForm(){
    // const[userInput, setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredDate:'',
    //     enteredAmount:''
    // })
    // function titleChanger(event)
    // {
    //     setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value}
    //     })
        
    // }
    // function dateChanger(event)
    // {
    //     setUserInput((prevState)=>{
    //      return {...prevState,enteredDate:event.target.value}
    //     })
    //         }
    // function amountChanger(event)
    // {
    //     setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount:event.target.value}
    //     })
    //      }
         function submitHandler(event)
         {
            event.preventDefault();
           const userInput={
            title:event.target.title.value,
            amount:event.target.amount.value,
            date:event.target.date.value
           }
            console.log(userInput);
        }
      return(
        <form onSubmit={submitHandler} >         
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Date :  <input name="date" type="date"/></label>
            </div>
            <div className="new-expense__control">
           <label> Title : <input name="title" type="text"/></label>
           </div>
           <div className="new-expense__control">        
            <label> Amount : <input name="amount"  type="text" /></label>
            </div>
            <div className="new-expense__actions">
            <button  className="new-expense button" type="submit">Add Expense</button>
            </div>
        </div>
        </form>

    )
}
export default ExpenseForm