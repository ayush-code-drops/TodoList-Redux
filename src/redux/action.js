import {TOGGLE_TODO,REMOVE_TODO,ADD_TODO, TODO_SUCCESS} from './actionTypes'

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}
export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: {
            id
        }
    }
}

export const todoSuccess = (payload)=>{
    return {
        type: TODO_SUCCESS,
        payload
    }
}