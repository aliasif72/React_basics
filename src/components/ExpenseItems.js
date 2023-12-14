import './ExpenseItems.css';
function Expense(props)
{
    const month= props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.getDate();
    const year=props.date.getFullYear();
        return (
        <div className="expense-item">
            <div>
                <div>{month} </div>
                <div>{day} </div>
                <div>{year} </div>
                </div>
                <div className="expense-item__description">
                <h3>{props.title}</h3>
                  <div className="expense-item__price">{props.price}</div>
                  <div className='expense-item__price'> {props.locationOfExpense}</div>
                </div>
             </div>   
        )
}

export default Expense