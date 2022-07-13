import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'store';
import { Todo } from 'store/types/storeType';
import { ButtonStyle } from './styledComponents/buttons.styled.components';
import { InputStyle } from './styledComponents/input.styled.component';
import TodoListComponent from './todolistComponents/TodoListComponent';

type InputComponentProp = {
  state: Todo[];
}

const InputComponent:React.FC<InputComponentProp> = ({state}) =>  {

  const [inputVal, setInputVal] = useState<string>("");

  const dispatch = useDispatch();

  const { AddToDo } = bindActionCreators(actionCreators,dispatch);

  const onChangedInput = (e:React.KeyboardEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  }

  const addToDO = () => {
    AddToDo(inputVal);
    setInputVal("");
  }  
  
  return (
    <>
      <InputStyle type="text" name=""  value={inputVal} onChange={onChangedInput} id="" />
      <ButtonStyle onClick={addToDO}>Add TODO</ButtonStyle>
      <TodoListComponent state={state}/>
    </>
  );
};

export default InputComponent