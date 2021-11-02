import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import TaskList from "../tasks/taskList";
import { DeleteFolder } from "./delete-folder";


export const FolderContainer = function ({ id, name }) {
    const link = '';
    return (

        <div className="container">
            <span> - </span>
            <span className="description">{name}</span>
            <Link to={"/to-do/" + id} className="link" folder_id={id}>View</Link>
            <DeleteFolder id={id}>Delete</DeleteFolder>
        </div>);

}