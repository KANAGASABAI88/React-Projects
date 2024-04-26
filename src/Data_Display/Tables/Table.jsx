// const columns = ['Name', 'Age', 'Gender'];
//   const data = [
//     ['ajith', 30, 'Male'],
//     ['priya', 25, 'Female'],
//     ['surya', 40, 'Male']
//   ];
import './tables.css'
import PropTypes from 'prop-types';
export default function Table({columns,data}){


return(
    <div>
        <table className="table">
            <thead>
                <tr>
                    {columns.map((columns,index)=>(
                        <th key={index}>{columns}</th>
                        
                    
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row,rowindex)=>(<tr key={rowindex}>{row.map((cell,cellIndex)=>(
                    <td key={cellIndex}>{cell}</td>
                ))}</tr>))}
            </tbody>

        </table>
    </div>
)








}
Table.propTypes= {
    columns: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    
    
  };
