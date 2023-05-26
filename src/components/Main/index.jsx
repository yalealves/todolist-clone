import React, { useContext } from 'react'
import { MainContainer, HeaderTasks, Text, Pill, CreatedTasks, ConcludedTasks, TaskList, EmptyTasks, TaskItem } from './style'
import { ToDoContext } from '../../context/ToDoContext';
import ClipboardIcon from '../../layout/ClipboardIcon'

import { HiOutlineTrash } from "react-icons/hi";

import { FaCheck } from "react-icons/fa";

function Main() {

  const {tasks, handleDeleteTask, handleConcludeTask, handleUnConcludeTask} = useContext(ToDoContext);

  return (
    <>
        <MainContainer>
            <HeaderTasks>
                <CreatedTasks>
                    <Text color="#4EA8DE" fontWeight="bold" size="14px" className='created-tasks-text'>Tarefas criadas</Text>
                    <Pill>{tasks.length}</Pill>
                </CreatedTasks>
                <ConcludedTasks>
                    <Text color="#8284FA" fontWeight="bold" size="14px" className='concluded-tasks-text'>Concluídas</Text>
                    <Pill>{tasks.length > 0 ? tasks.filter((task) => task.concluded === 1).length + ' de ' + tasks.length : tasks.length}</Pill>
                </ConcludedTasks>
            </HeaderTasks>
            <TaskList>
                {
                  tasks.length > 0 ? (
                    tasks.map((task) => (
                      <TaskItem key={task.title}>
                        <div className="task-details">
                          {task.concluded === 0 ? (
                            <div className="dot-inconcluded" onClick={() => handleConcludeTask(task.title)}></div>
                          ): (
                            <div className="dot-concluded" onClick={() => handleUnConcludeTask(task.title)}><FaCheck size={10} /></div>
                          )}
                          
                          <Text color={task.concluded === 0 ? '#F2F2F2' : '#808080'} fontWeight="normal" size="14px" textDecoration={task.concluded === 1 ? 'line-through' : 'none'}>
                            {task.title}
                          </Text>
                        </div>
                        <div className="task-actions">
                          <HiOutlineTrash size={20} onClick={() => handleDeleteTask(task.title)} color='#808080' className='delete-icon'/>
                        </div>
                      </TaskItem>
                    ))
                    
                  ) : (
                  <EmptyTasks>
                    <ClipboardIcon />
                      <div className="empty-tasks-text">
                          <Text color="#808080" fontWeight="bold" size="16px">Você ainda não tem tarefas cadastradas</Text>
                          <Text color="#808080" fontWeight="normal" size="16px">Crie tarefas e organize seus itens a fazer</Text>
                      </div>
                  </EmptyTasks>
                  )
                }
                
            </TaskList>
        </MainContainer>
    </>
  )
}

export default Main