
export const DeleteTask = function (props) {

    const taskId = props.id;
    let requestInit = {
        method: "DELETE",
        body: {
            id: { taskId }
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }
    function DeleteTask() {
        //fetch("http://localhost:8080/to-do/3");
        const resp = fetch("http://localhost:8080/to-do/" + taskId, requestInit)
        .then(() => window.location.reload(false));
        
    }
    return (
        <div>            
            <button className="button" onClick={DeleteTask} className="deleteButton">Delete task</button>
        </div>

    )
}
