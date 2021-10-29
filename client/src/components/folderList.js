import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { FolderContainer } from './components/folderContainer';
import { AddFolder } from './components/add-folder';

const[folderList, setFolderList] = useState([]);
  useEffect(function(){
    fetch("http://localhost:8080/folders/")
    .then(function(response) {return response.json();})
    .then(function (fList){ setFolderList(fList)});
  }, setFolderList)

  const parsedFolderList = folderList.map(
    function(val){
      return <FolderContainer id={val.id} name={val.name}/>
    }
  )

  const appendFolder = function (folder) {
    setFolderList([...folderList, folder]);
    console.log(folderList);
  }

  return (
    <Router>
        <Route path="/to-do/">
          {parsedList}
          <AddTask AddToList={appendTask} />
        </Route>
    </Router>
  );