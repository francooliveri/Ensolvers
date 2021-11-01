import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { useState, useEffect } from 'react';
import { FolderContainer } from './folderContainer';
import { AddFolder } from './add-folder';
import TaskList from "../tasks/taskList";

function FolderList() {
  const [folderList, setFolderList] = useState([]);
  useEffect(function () {
    fetch("http://localhost:8080/folders/")
      .then(function (response) { return response.json(); })
      .then(function (fList) { setFolderList(fList) });
  }, setFolderList)

  const parsedFolderList = folderList.map(
    function (val) {
      return <FolderContainer id={val.id} name={val.name} />
    }
  )
  const appendFolder = function (folder) {
    setFolderList([...folderList, folder]);
    console.log(folderList);
  }

  return (
    <>
      {parsedFolderList}
      <AddFolder AddToList={appendFolder} />
    </>
  );
}
export default FolderList;