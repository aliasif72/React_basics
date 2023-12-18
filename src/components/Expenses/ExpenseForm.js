import './NewExpense.css';
import './ExpenseForm.css';
import {useState} from 'react';
function ExpenseForm(props){
    const[userInput, setUserInput]=useState({
        enteredTitle:'',
        enteredDate:'',
        enteredAmount:''
    })
    function titleChanger(event)
    {
        setUserInput((prevState)=>{
        return {...prevState,enteredTitle:event.target.value}
        })
        
    }
    function dateChanger(event)
    {
        setUserInput((prevState)=>{
         return {...prevState,enteredDate:event.target.value}
        })
            }
    function amountChanger(event)
    {
        setUserInput((prevState)=>{
        return {...prevState,enteredAmount:event.target.value}
        })
         }
         
         function submitHandler(event)
         {
            event.preventDefault();
           const expenseInput={
                   title:userInput.enteredTitle,
                   amount:userInput.enteredAmount, 
                   date:userInput.enteredDate
                }
            props.onNewExpense(expenseInput);
            setUserInput({
                    enteredTitle:'',
                    enteredDate:'',
                    enteredAmount:''
                });          
                  }

      return(
        <form onSubmit={submitHandler} >         
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Date :  <input name="date" value={userInput.enteredDate} onChange={dateChanger} type="date"/></label>
            </div>
            <div className="new-expense__control">
           <label> Title : <input name="title" value={userInput.enteredTitle} onChange={titleChanger} type="text"/></label>
           </div>
           <div className="new-expense__control">        
            <label> Amount : <input name="amount"  value={userInput.enteredAmount} onChange={amountChanger} type="text" /></label>
            </div>
            <div className="new-expense__actions">
            <button  className="new-expense button" type="submit">Add Expense</button>
            </div>
        </div>
        </form>

    )
}
export default ExpenseForm