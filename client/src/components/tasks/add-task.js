import React from 'react';
import { useState} from 'react';
export const AddTask = function(props){
    const [description, setDescription] = useState("");
    const onInputChange = function (e){
        setDescription(e.target.value);
    }
    let bodyData = {
        description: description,
        checked: false
    }

    let requestInit = {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers:{
            'Content-Type': 'application/json'
          }
    }
    function SaveTask(){
        const resp = fetch("http://localhost:8080/to-do/" + props.folder_id,requestInit);
        const savedTaskId = JSON.stringify(resp);
        console.log(savedTaskId);
        props.AddToList({description});
    }
    return( 
        <div>
            <input onChange={onInputChange} />
            <button className="button"onClick={SaveTask}>Add task</button>
        </div>);
}


