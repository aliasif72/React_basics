import {useState} from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props)
{
   const deleteClickHandler=()=>{
    setDis(" ");
      }
  const disp=
  <li><Card className="expense-item">
      <ExpenseDate date={props.date}/>
           <div className="expense-item__description">
            <h3>{props.title}</h3>
              <div className="expense-item__price">{props.price}</div>
              </div>
            <button className="expense-item__button"  onClick={deleteClickHandler}>Delete</button>
         </Card></li>   
   const[dis,setDis] = useState(disp);
        return (
        dis
        )
}
export default ExpenseItem