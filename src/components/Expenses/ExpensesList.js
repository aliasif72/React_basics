import './ExpensesList.css'
import ExpenseItem from './ExpenseItems'

function ExpensesList(props)
{
    
    if (props.items.length === 0) {
       return <h2 className='expenses-list__fallback'>Found no expenses.</h2>   
      }

      return <ul className="expenses-list">
         {props.items.map((expense) => (
         <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.amount}
            date={expense.date}
          />
         ))}
      </ul>

      }


export default ExpensesList;