import React from "react";
import { DeleteTask } from "./delete-task";
import "../../styles.css"

export const TaskContainer = function ({ id, description, checked, folder_id }) {

    let check = checked;
    let desc = description;
    let varId = id;
    function toggleTodo() {
        check = !check;        
        handleToggle();
    }

    function handleToggle(){
        bodyData.id = varId;
        bodyData.description = desc;
        bodyData.checked = check;
        requestInit.body = JSON.stringify(bodyData);
        console.log(requestInit);
        UpdateTask();
    }

    let bodyData = {
        id: id,
        description: description,
        checked: check
    }

    let requestInit = {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
            'Connection' : "keep-alive",
            'Content-Type': 'application/json'
        }
    }
    function UpdateTask() {
        let resp = fetch("http://localhost:8080/to-do/" + folder_id, requestInit)
        //.then(window.location.reload(false));
    }

    return (
        <div className="container">
            <input type="checkbox" onChange={toggleTodo} checked={check} />
            <span className="description">{description}</span>
            {/* <a href="#" className="link">Edit</a> */}
            <DeleteTask id={id}>Delete</DeleteTask>
        </div>);

}