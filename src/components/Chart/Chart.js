import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props)
{
    const dataArray=props.datapoints.map(datapoint=>{
       return datapoint.value
    })
    const totalMax=Math.max(...dataArray)*2;
    
  return (
    <div className="chart">
{props.datapoints.map((datapoint)=>{
     return <ChartBar key={datapoint.label}
     value={datapoint.value} 
     maxValue={totalMax}
     label={datapoint.label}/>
})}

  </div>
)}

export default Chart;