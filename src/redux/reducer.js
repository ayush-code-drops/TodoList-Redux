import { ADD_TODO, REMOVE_TODO, TODO_SUCCESS, TOGGLE_TODO } from "./actionTypes"

const initState = {
    todos:[]
}

export function reducer(state=initState,{type,payload}) {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos,payload]
            }
        case TOGGLE_TODO:
          
            return {
                ...state,
                todos: state.todos.map((item)=>(item.id===payload.id)?{...item,status:!Boolean(item.status)}:item)
            }
        case REMOVE_TODO:
            
            return {
                ...state,
                todos:state.todos.filter((item)=>item.id!==payload.id)
            }
        case TODO_SUCCESS:
            
            return {
                ...state,
                todos:payload
            }
        
        default:
            return state
    }
}