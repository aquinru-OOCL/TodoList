import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import TodoList from "./features/todos/components/TodoList";
import DoneList from "./features/todos/components/DoneList";
import NotFound from "./features/todos/components/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <span>
                    <Link to="/">go to todo list page</Link>
                    <br></br>
                    <Link to="/done">go to done list page</Link>
                </span>
                <Switch>
                    <Route exact path="/" component={TodoList}></Route>
                    <Route exact path="/done" component={DoneList}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        </div>
  );
}

export default App;
