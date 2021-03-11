import {FC} from "react";
import {TodoType} from "../TodoPage";


type PropsType = {
    todos: TodoType[],
    completeHandler: (id: number) => void
    removeHandler: (id: number) => void
}
export const TodoList: FC<PropsType> = ({todos, completeHandler, removeHandler}) => {
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <li className={'todo'} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed}
                                   onChange={() => completeHandler(todo.id)}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={() => removeHandler(todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}