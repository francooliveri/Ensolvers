import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { AddTask } from "./add-task";
import ClearTasks from './clear-tasks';
import { TaskContainer } from "./taskContainer";

function TaskList() {
    const { folder_id } = useParams();

    const [taskList, setTaskList] = useState([]);
    const backURL = "http://localhost:8080/to-do/folder/" + folder_id;
    useEffect(function () {
        fetch(backURL)
            .then(function (response) { return response.json(); })
            .then(function (list) { setTaskList(list) });
    }, setTaskList)

    //promesa: el fetch es la promesa que pide al back, el .then hace que espere sincronicamente la respuesta
    //para continuar con el flujo 

    const parsedList = taskList.map(
        function (value) {
            return <TaskContainer id={value.id} description={value.description} checked={value.checked} folder_id={folder_id} />
        });  //retorna una lista de elementos <TaskContainer> con los valores del arreglo
    const appendTask = function (task) {
        setTaskList([...taskList, task]); //es una forma de concatenar un elemento a un array
    }
    return (
        <>
            {parsedList}
            <ClearTasks folder_id ={folder_id}/>
            <AddTask AddToList={appendTask} folder_id ={folder_id} />
        </>
    );
}
export default TaskList;
