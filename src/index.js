import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import MainScreen from './MainScreen/MainScreen'
import ProjectManagement from './ProjectManagement/ProjectManagement';
import SoftwareDevelopment from './SoftwareDevelopment/SoftwareDevelopment'

const Index = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MainScreen} exact />
            <Route path="/project_management/" component={ProjectManagement} exact />
            <Route path="/software_development/" component={SoftwareDevelopment} exact />
        </Switch>
    </BrowserRouter>
  );

ReactDOM.render(<Index />, document.getElementById('root'))