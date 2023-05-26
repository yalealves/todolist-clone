import { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const tasksLocalStorage = localStorage.getItem('tasksList');
        if (tasksLocalStorage) {
            setTasks(JSON.parse(tasksLocalStorage));
        }
    }, []);
    
    useEffect(() => {
        if(tasks.length !== 0){
            localStorage.setItem('tasksList', JSON.stringify(tasks));
        }
    }, [tasks]);
    
    function sortTasks() {
        setTasks((tasks) => {
            const concludedTasks = tasks.filter((task) => task.concluded === 1);
            const nonConcludedTasks = tasks.filter((task) => task.concluded === 0);
            return [...nonConcludedTasks, ...concludedTasks];
        });
    }

    function showToast(message, type = "success"){
        if(type === "success"){
            toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }

        if(type === "error"){
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }

    function handleNewTask (taskTitle){
        if (taskTitle.trim() === '') {
            showToast('É necessário informar o nome da tarefa.', 'error');
            return;
        }
        const existingTask = tasks.find((task) => task.title === taskTitle.trim());
        if (existingTask) {
            showToast('A tarefa já existe na lista', 'error');
            return;
        }
        const taskObj = {
            title: taskTitle,
            concluded: 0
        }
        setTasks([...tasks, taskObj]);
        showToast('Tarefa criada com sucesso!', 'success');
    }

    function handleDeleteTask(taskTitle){
        const tasksWithoutDeleted = tasks.filter((task) => task.title !== taskTitle);
        setTasks(tasksWithoutDeleted);
        if(tasksWithoutDeleted.length === 0){
            localStorage.setItem('tasksList', JSON.stringify(tasksWithoutDeleted));
        }
        showToast('Tarefa deletada com sucesso!', 'success');
    }

    function handleConcludeTask(taskTitle) {
        const taskConcluded = tasks.map(function(task) {
            if (task.title === taskTitle) {
            return { ...task, concluded: 1 };
            }
            return task;
        });
        setTasks(taskConcluded);
        sortTasks();
    }

    function handleUnConcludeTask(taskTitle) {
        const taskConcluded = tasks.map(function(task) {
            if (task.title === taskTitle) {
                return { ...task, concluded: 0 };
            }
                return task;
        });
        setTasks(taskConcluded);
        sortTasks();
    }

    return (
        <ToDoContext.Provider value={{tasks, setTasks, handleNewTask, handleDeleteTask, handleConcludeTask, handleUnConcludeTask}}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {children}
        </ToDoContext.Provider>
    );
}