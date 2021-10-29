import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { DeleteFolder } from "./delete-folder";


export const FolderContainer = function ({ id, name }) {
    const link = 'folders/' + id;
    return (
    <div>
        <span>{name}</span>
        {/* <a href={link}>View</a> */}
        <Link to={link}>View</Link>

        <a href="#">Edit</a>
        <DeleteFolder id={id}>Delete</DeleteFolder>
    </div>);

}