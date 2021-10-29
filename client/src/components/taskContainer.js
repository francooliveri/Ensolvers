import React from "react";
import { DeleteTask } from "./delete-task";

export const TaskContainer = function ({id, description, checked}) {
    return (<div>
        <input type="checkbox" checked={checked}/>
        <span>{description}</span>
        <a href="#">Edit</a> 
        <DeleteTask id={id}>Delete</DeleteTask>
    </div>);

}