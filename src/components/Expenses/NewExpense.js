import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props)
{
    function newExpense(data){
        props.onsaveExpense(data);
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onNewExpense={newExpense} />
        </div>
    )
}

export default NewExpense;