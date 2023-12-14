import {useState} from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function Expense(props)
{
   const clickHandler=()=>{
    setDis(" ");
      }
  const disp=<Card className="expense-item">
      <ExpenseDate date={props.date}/>
           <div className="expense-item__description">
            <h3>{props.title}</h3>
              <div className="expense-item__price">{props.price}</div>
              <div className="expense-item__price"> {props.locationOfExpense}</div>
            </div>
            <button className="expense-item__button"  onClick={clickHandler}>Delete</button>
         </Card>   
   const[dis,setDis] = useState(disp);
          
        return (
        dis
        )
}


export default Expense