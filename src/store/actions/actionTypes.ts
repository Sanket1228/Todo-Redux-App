import { Todo } from "../types/storeType";
import { Actions } from "./actions";

export type AddTodoAction = {
    type: Actions.ADD_TODO,
    todo: string
}

export type UpdateTodoAction = {
    type: Actions.UPDATE_TODO,
    todo: Todo
}

export type DeleteTodoAction = {
    type: Actions.DELETE_TODO,
    id: number
}

export type DoneTodoAction = {
    type: Actions.TODO_COMPLETED,
    id: number
}

export type ActionType = AddTodoAction | UpdateTodoAction | DeleteTodoAction | DoneTodoAction 