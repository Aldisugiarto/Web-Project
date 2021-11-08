/* Component    : TodoList data */
/* Date         : 3rd Nov 2021 */
/* Author       : Aldi */

/* ----------------------------------------------------------- */
/* Import module, style, or file */
import './TodoList.css'

const TodoList = (props) => {
    console.log(props.dataTodos)
    return(
        <ul>{
            props.dataTodos.map((todo)=>{
                return <li key={todo.id}>{todo.title}</li>
            })    
        }</ul>
    )
}

export default TodoList