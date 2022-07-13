import { Todo } from "store/types/storeType";
import TodoComponent from "./TodoComponent";

type TodoListComponentProp = {
    state: Todo[],
}

const TodoListComponent:React.FC<TodoListComponentProp> = ({state}) => {

  return (
  
    <div>
        {
          state.map((todo)=>
          <>
            {
              <TodoComponent state={state} todo={todo}/>
            }
          </>
          )
        }
    </div>
  )
}

export default TodoListComponent