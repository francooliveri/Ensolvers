import React, {useState} from "react";
import { DeleteTask } from "./delete-task";
import "../../styles.css"

export const TaskContainer = function ({ id, description, checked, folder_id }) {

    const [internalChecked, setInternalChecked] = useState(checked);
    
    function toggleTodo() {
        let check = !internalChecked;
        /*
        Cree la variable interna porque enviar internalChecked como parametro creaba el bodyRequest con el parámetro invertido
        antes de corregirlo a lo que se mostraba en el componente checkbox
        */
        setInternalChecked(check);        
        handleToggle(check);
    }

    function handleToggle(check){
        let bodyData = {
            id: id,
            description: description,
            checked: check,
            folder_id: folder_id
        }
        UpdateTask(bodyData);
    }

    
    function UpdateTask(bodyData) {
        let requestInit = {
            method: "PUT",
            body: JSON.stringify(bodyData),
            headers: {
                'Connection' : "keep-alive",
                'Content-Type': 'application/json'
            }
        }
        console.log(requestInit);
        //let resp = fetch("http://localhost:8080/to-do/" + folder_id, requestInit)
        let resp = fetch("http://localhost:8080/to-do/" + id, requestInit)
        //.then(window.location.reload(false));
    }

    return (
        <div className="container">
            <input type="checkbox" onChange={toggleTodo} checked={internalChecked} />
            <span className="description">{description}</span>
            <DeleteTask id={id}>Delete</DeleteTask>
        </div>);

}