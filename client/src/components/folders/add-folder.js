import React from 'react';
import { useState} from 'react';
export const AddFolder = function(props){
    const [name, setName] = useState("");
    const onInputChange = function (e){
        setName(e.target.value);
    }
    let bodyData = {
        name: name
    }

    let requestInit = {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers:{
            'Content-Type': 'application/json'
          }
    }
    function SaveFolder(){
        //fetch("http://localhost:8080/to-do/3");
        const resp = fetch("http://localhost:8080/folders/",requestInit);
        const savedFolderId = JSON.stringify(resp);
        console.log(savedFolderId);
        props.AddToList({name});
    }
    return( 
        <div>
            <input onChange={onInputChange} requiredTxt/>
            <button onClick={SaveFolder} className="addButton">Add Folder</button>
        </div>);
}


