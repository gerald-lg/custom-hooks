import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
  
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'addTodo',
            payload: todo,
        }

        dispatch( action );
    }

    const handleRemoveTodo = ( id ) => {
        const action = {
            type: 'removeTodo',
            payload: id
        }

        dispatch(action);
    }

    const handleToggleTodo = ( id ) => {
        const action = {
            type: 'toggleTodo',
            payload: id
        }

        dispatch(action);
    }
   

    return {
        todos, 
        allTodos: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,
        handleNewTodo, 
        handleRemoveTodo,
        handleToggleTodo
    }
}
