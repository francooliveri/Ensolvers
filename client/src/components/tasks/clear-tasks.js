import React from 'react'

export default function ClearTasks(props) {

let requestInit = {
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json'
    }
}
function ClearTasks() {
    const resp = fetch("http://localhost:8080/to-do/clear/" + props.folder_id, requestInit)
    //.then(window.location.reload(false));
    
}

return (
    <div>
        <button className="button" onClick={ClearTasks}>Clear tasks</button>
    </div>
)
}
