import { Dispatch } from "react";
import { ActionType} from "../actions/actionTypes";
import { Actions } from "../actions/actions"
import { Todo } from "store/types/storeType";

export const AddToDo = (todo:string) => {
    return(dispath:Dispatch<ActionType>) => {
        dispath({
            type: Actions.ADD_TODO,
            todo: todo
        })
    }
}

export const UpdateTodo = (todo:Todo) => {
    return(dispath:Dispatch<ActionType>) => {
        dispath({
            type: Actions.UPDATE_TODO,
            todo: todo
        })
    }
}

export const DeleteTodo = (id: number) => {
    return(dispath:Dispatch<ActionType>) => {
        dispath({
            type: Actions.DELETE_TODO,
            id: id
        })
    }
}

export const DoneTodo = (id: number) => {
    return(dispath:Dispatch<ActionType>) => {
        dispath({
            type: Actions.TODO_COMPLETED,
            id: id
        })
    }
}
