import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { TaskContainer } from './components/taskContainer';
import { FolderContainer } from './components/folderContainer';
import { AddTask } from './components/add-task';
import { AddFolder } from './components/add-folder';

function App() {
  const [taskList, setTaskList] = useState([]); //hook - renderiza cada vez que taskList se actualice
  useEffect(function () {           //cuando se ejecute un cambio en taskList se ejecuta la funcion
    fetch("http://localhost:8080/to-do/") //Esta es la peticion REST, buscar POST, PUT, etc.
      .then(function (response) { return response.json(); })
      .then(function (list) { setTaskList(list); });
  }, [setTaskList])
  //promesa: el fetch es la promesa que pide al back, el .then hace que espere sincronicamente la respuesta
  //para continuar con el flujo 
  const parsedList = taskList.map(
    function (value) {
      return <TaskContainer id={value.id} description={value.description} checked={value.checked} />
    });  //retorna una lista de elementos <TaskContainer> con los valores del arreglo
  const appendTask = function (task) {
    setTaskList([...taskList, task]); //es una forma de concatenar un elemento a un array
  }
  // return (
  //   <>
  //     {parsedList}
  //     <AddTask AddToList={appendTask} />
  //   </>

  const[folderList, setFolderList] = useState([]);
  useEffect(function(){
    fetch("http://localhost:8080/folders/")
    .then(function(response) {return response.json();})
    .then(function (fList){ setFolderList(fList)});
  }, [setFolderList])

  const parsedFolderList = folderList.map(
    function(val){
      return <FolderContainer id={val.id} name={val.name}/>
    }
  )

  const appendFolder = function (folder) {
    setFolderList([...folderList, folder]);
    console.log(folderList);
  }

  return (
    <Router>
      <Switch>
        <Route path="/to-do/">
          {parsedList}
          <AddTask AddToList={appendTask} />
        </Route>
        <Route path="/folders/">
          {parsedFolderList}
        <AddFolder AddToList={appendFolder} />
          <FolderContainer />
        </Route>
      </Switch>
    </Router>
  );
}



export default App;
