import './NewExpense.css';
import './ExpenseForm.css';
function ExpenseForm(){
      return(
        <form>         
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Date :  <input type="date"/></label>
            </div>
            <div className="new-expense__control">
           <label> Title : <input  type="text"/></label>
           </div>
           <div className="new-expense__control">        
            <label> Amount : <input type="text" /></label>
            </div>
            <div className="new-expense__actions">
            <button className="new-expense button" type="submit">Add Expense</button>
            </div>
        </div>
        </form>

    )
}
export default ExpenseForm