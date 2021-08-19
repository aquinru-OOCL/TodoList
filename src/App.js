import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import TodoList from "./features/todos/components/TodoList";
import DoneList from "./features/todos/components/DoneList";
import NotFound from "./features/todos/components/NotFound";
import { Tabs } from 'antd';
import { SnippetsOutlined, CarryOutOutlined } from '@ant-design/icons';
import { getTodos } from "./features/todos/apis/todos";
import { AddToDos } from "./features/todos/reducers/todoSlice";

function App() {
    const { TabPane } = Tabs;
    const linkTodoPage = <Link to="/"><SnippetsOutlined />All items</Link>;
    const linkDonePage = <Link to="/done"><CarryOutOutlined />Done items</Link>;
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos().then((response) => {
            dispatch(AddToDos(response.data));
        })
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab={linkTodoPage} key="1"></TabPane>
                    <TabPane tab={linkDonePage} key="2"></TabPane>
                </Tabs>
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