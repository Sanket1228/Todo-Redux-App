import { Actions } from "../actions/actions";
import { ActionType } from "../actions/actionTypes";
import { TodoList } from "../types/storeType";

const initialState:TodoList = [];

export const todoReducer = (state: TodoList = initialState, action: ActionType) => {
    switch(action.type){
        case Actions.ADD_TODO: 
            return [...state, {id: state.length++, todo: action.todo, timestamp: Date.now(), done: false, isUpdateStart: false}];
        case Actions.DELETE_TODO:
            return [...state.filter((todo) => todo.id !== action.id)];
        case Actions.UPDATE_TODO:         
            return state.map((todo) => {
                if(todo.id === action.todo.id){
                    return {...todo, todo:action.todo.todo};
                } 
                return todo;
            });
        case Actions.TODO_COMPLETED:
            return state.map((todo) => {
                if(todo.id === action.id){
                    return {...todo, done:!todo.done};
                } 
                return todo;
            });
        default:
            return [...state];
    }
}

export default todoReducer;