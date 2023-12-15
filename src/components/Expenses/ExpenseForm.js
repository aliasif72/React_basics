import './NewExpense.css';
import Card from '../UI/Card';
function ExpenseForm(){
      return(
        <Card className="new-expense" >
        <div className="">
            <label>Date :  <input type="date"/></label>
           <label> Title : <input  type="text"/></label>        
            <label> Amount : <input type="text" size="7"/></label>
            <button className="new-expense button" type="button">Add Expense</button>
                    </div>
        </Card>
    )
}
export default ExpenseForm