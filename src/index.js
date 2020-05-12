import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import MainScreen from './MainScreen/MainScreen'
import ProjectManagement from './ProjectManagement/ProjectManagement';

const Index = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MainScreen} exact />
            <Route path="/project_management/" component={ProjectManagement} exact />
        </Switch>
    </BrowserRouter>
  );

ReactDOM.render(<Index />, document.getElementById('root'))