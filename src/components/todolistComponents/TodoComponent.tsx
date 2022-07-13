import { ButtonStyle } from "components/styledComponents/buttons.styled.components";
import { TodoStyle } from "components/styledComponents/todo.styled.components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "store";
import { Todo } from "store/types/storeType";

type TodoComponentProp = {
  state: Todo[];
  todo: Todo;
}

const TodoComponent:React.FC<TodoComponentProp> = ({todo, state}) => {

  const [inputVal, setInputVal] = useState<string>("")

  const [isUpdateStart, setIsUpdateStart] = useState<boolean>(false)

  const [isDone, setIsDone] = useState<boolean>(false)

  const dispatch = useDispatch();

  const { DeleteTodo,DoneTodo, UpdateTodo } = bindActionCreators(actionCreators,dispatch);

  const deleteTodo = () => {
    DeleteTodo(todo.id);
  }

  const updateTodo = () => {
    setIsUpdateStart(!isUpdateStart);
    setInputVal(todo.todo)
    UpdateTodo({
      id: todo.id,
      todo: inputVal,
      timestamp: Date.now(),
      done: false
    })
  }

  const onChangeInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
  }

  const doneTodo = () => {
    setIsDone(!isDone);
    DoneTodo(todo.id);
  }

  
  return (
    <TodoStyle color={isDone ? "green" : "red"}>   
        { 
          isUpdateStart !== true
          ? 
          todo.todo
          :
          <input type="text" value={inputVal} onChange={onChangeInput} />
        }  
        
        {
          todo.done !== true ? 
          <>
            <ButtonStyle onClick={deleteTodo}> Delete </ButtonStyle>
            <ButtonStyle onClick={updateTodo}> Update </ButtonStyle> 
            <ButtonStyle onClick={doneTodo}> Done </ButtonStyle>
          </>
          :
          <>
            <ButtonStyle onClick={deleteTodo}> Delete </ButtonStyle>
            <ButtonStyle onClick={doneTodo}> Undone </ButtonStyle>
          </>
        }
    </TodoStyle>
  )
}

export default TodoComponent