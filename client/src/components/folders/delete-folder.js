export const DeleteFolder = function (props) {

    const folderId = props.id;
    let requestInit = {
        method: "DELETE",
        body: {
            id: { folderId }
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }
    function DeleteFolder() {
        //fetch("http://localhost:8080/to-do/3");
        const resp = fetch("http://localhost:8080/folders/" + folderId, requestInit)
        .then(() => window.location.reload(false));
        
    }
    return (
        <div>            
            <button onClick={DeleteFolder} className="deleteButton">Delete Folder</button>
        </div>

    )
}
