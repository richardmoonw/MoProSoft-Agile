import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import MainScreen from './MainScreen/MainScreen'
import ProjectManagement from './ProjectManagement/ProjectManagement'
import SoftwareDevelopment from './SoftwareDevelopment/SoftwareDevelopment'
import ReviewProjectDes from './ProjectManagement/ReviewProjectDes'
import DefineSmallReleases from './ProjectManagement/DefineSmallReleases'
import IdentifyStories from './ProjectManagement/IdentifyStories'
import OrderBacklog from './ProjectManagement/OrderBacklog'
import DefineStoryPoints from './ProjectManagement/DefineStoryPoints'
import AssingResources from './ProjectManagement/AssignResources'
import EvaluateCost from './ProjectManagement/EvaluateCost'
import ReviewRoadmap from './ProjectManagement/ReviewRoadmap'
import BacklogGrooming from './ProjectManagement/BacklogGrooming'
import ChooseStories from './ProjectManagement/ChooseStories'
import AssignStories from './ProjectManagement/AssignStories'
import Meetings from './ProjectManagement/Meetings'
import ReviewBurnDown from './ProjectManagement/ReviewBurnDown'
import ReviewTraceability from './ProjectManagement/ReviewTraceability'
import SprintReview from './ProjectManagement/SprintReview'
import SprintRetrospective from './ProjectManagement/SprintRetrospective'

const Index = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MainScreen} exact />
            <Route path="/project_management/" component={ProjectManagement} exact />
            <Route path="/software_development/" component={SoftwareDevelopment} exact />

            {/* Specific Project Management Pages */}
            <Route path="/review_project_des/" component={ReviewProjectDes} exact />
            <Route path="/define_small_rel/" component={DefineSmallReleases} exact />
            <Route path="/identify_stories/" component={IdentifyStories} exact />
            <Route path="/order_backlog/" component={OrderBacklog} exact />
            <Route path="/define_points/" component={DefineStoryPoints} exact />
            <Route path="/assign_resources/" component={AssingResources} exact />
            <Route path="/evaluate_cost/" component={EvaluateCost} exact />
            <Route path="/review_roadmap/" component={ReviewRoadmap} exact />
            <Route path="/backlog_grooming/" component={BacklogGrooming} exact />
            <Route path="/choose_stories/" component={ChooseStories} exact />
            <Route path="/assign_stories/" component={AssignStories} exact />
            <Route path="/meetings/" component={Meetings} exact />
            <Route path="/review_burndown/" component={ReviewBurnDown} exact />
            <Route path="/review_traceability/" component={ReviewTraceability} exact />
            <Route path="/sprint_review/" component={SprintReview} exact />
            <Route path="/sprint_retrospective/" component={SprintRetrospective} exact />
            
        </Switch>
    </BrowserRouter>
  );

ReactDOM.render(<Index />, document.getElementById('root'))