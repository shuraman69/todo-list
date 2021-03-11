import React, {useEffect, useState} from "react";
import {TodoForm} from "./TodoForm/TodoForm";
import {TodoList} from "./TodoList/TodoList";

export type TodoType = {
    title: string
    id: number
    completed: boolean
}

export const TodoPage = () => {
    const [todos, setTodos] = useState<TodoType[]>([])
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || "[]") as TodoType[]
        setTodos([...todos])
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const todo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [todo, ...prev])
    }

    const completeHandler = async (id: number) => {
        await setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = true
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }
    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList removeHandler={removeHandler}
                      completeHandler={completeHandler} todos={todos}/>
        </>
    )
}