import React, { useContext, useState } from 'react'

import { ButtonNewTask, HeaderContainer, InputTask, Logo, NewTaskContainer, Text } from './style'

import LogoSvg from '../../layout/LogoSvg'

import { AiOutlinePlusCircle } from "react-icons/ai";
import { ToDoContext } from '../../context/ToDoContext';

function Header() {
  const {handleNewTask} = useContext(ToDoContext);
  const [newTask, setNewTask] = useState('');

  function handleCreateTask(){
    handleNewTask(newTask);
    setNewTask('');
  }
  
  return (
    <>
      <HeaderContainer>
          <Logo>
              <LogoSvg />
              <div>
                <Text size="40px" fontWeight={900} color="#4EA8DE">to</Text>
                <Text size="40px" fontWeight={900} color="#5E60CE">do</Text>
              </div>
          </Logo>
      </HeaderContainer>
      <NewTaskContainer>
        <InputTask placeholder="Adicione uma nova tarefa" onChange={(e) => setNewTask(e.target.value)} value={newTask}></InputTask>
        <ButtonNewTask onClick={handleCreateTask}>
          <span className='create-task-text'>Criar</span><AiOutlinePlusCircle size={15}/>
        </ButtonNewTask>
      </NewTaskContainer>
    </>
  )
}

export default Header