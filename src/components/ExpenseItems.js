import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
function Expense(props)
{
        return (
        <div className="expense-item">
          <ExpenseDate date={props.date}/>
               <div className="expense-item__description">
                <h3>{props.title}</h3>
                  <div className="expense-item__price">{props.price}</div>
                  <div className='expense-item__price'> {props.locationOfExpense}</div>
                </div>
             </div>   
        )
}

export default Expense