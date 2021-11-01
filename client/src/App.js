import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import FolderList from './components/folders/folderList';
import TaskList from "./components/tasks/taskList";

function App() {

  return (
    <div className="centerContent">
    <Router>      
      <Switch>
        <Route exact path="/"component={FolderList}/>
        <Route exact path="/folders/"component={FolderList}/>  
        <Route exact path="/to-do/:folder_id/" component={TaskList}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;