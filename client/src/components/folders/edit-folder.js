import React from 'react';
import { useState} from 'react';
export const UpdateFolder = function(props){
    const [name, setName] = useState("");
    const folderId = props.id;
    const onInputChange = function (e){
        setName(e.target.value);
    }
    let bodyData = {
        name: name
    }

    let requestInit = {
        method: "PUT",
        body: JSON.stringify(bodyData),
        headers:{
            'Content-Type': 'application/json'
          }
    }
    function UpdateFolder(){
        const link = "http://localhost:8080/folders/" + folderId;
        const resp = fetch("http://localhost:8080/folders/",requestInit);
        const savedFolderId = JSON.stringify(resp);
    }
    return( 
        <div>
            <input onChange={onInputChange} requiredTxt/>
            <button onClick={SaveFolder}>Add Folder</button>
        </div>);
}


