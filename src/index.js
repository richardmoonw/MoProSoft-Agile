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

import A1ReviewRoadmap from './SoftwareDevelopment/A1ReviewRoadmap'
import A2BacklogGrooming from './SoftwareDevelopment/A2BacklogGrooming'
import A3ChooseStories from './SoftwareDevelopment/A3ChooseStories'
import A4AssignStories from './SoftwareDevelopment/A4AssignStories'
import A5MakeSystemTesting from './SoftwareDevelopment/A5MakeSystemTesting'
import A6ReviewSystemTesting from './SoftwareDevelopment/A6ReviewSystemTesting'
import A7MakeUsersManual from './SoftwareDevelopment/A7MakeUsersManual'
import A8ReviewUsersManual from './SoftwareDevelopment/A8ReviewUsersManual'
import A9SynchronizeTaskManager from './SoftwareDevelopment/A9SynchronizeTaskManager'
import A10AddSystemTestingPlan from './SoftwareDevelopment/A10AddSystemTestingPlan'
import A11MakeMockups from './SoftwareDevelopment/A11MakeMockups'
import A12ReviewHighLevelDesign from './SoftwareDevelopment/A12ReviewHighLevelDesign'
import A13MakeIntegrationTesting from './SoftwareDevelopment/A13MakeIntegrationTesting'
import A14ReviewIntegrationTesting from './SoftwareDevelopment/A14ReviewIntegrationTesting'
import A15AddHighlevelDesign from './SoftwareDevelopment/A15AddHighlevelDesign'
import A16DevelopComponents from './SoftwareDevelopment/A16DevelopComponents'
import A17ReviewTraceability from './SoftwareDevelopment/A17ReviewTraceability'
import A18IntegrateUserStories from './SoftwareDevelopment/A18IntegrateUserStories'
import A19PerformIntegrationTesting from './SoftwareDevelopment/A19PerformIntegrationTesting'
import A20MergeTestedComponents from './SoftwareDevelopment/A20MergeTestedComponents'
import A21MakeOperationsManual from './SoftwareDevelopment/A21MakeOperationsManual'
import A22ReviewOperationsManual from './SoftwareDevelopment/A22ReviewOperationsManual'
import A23PerformSystemTesting from './SoftwareDevelopment/A23PerformSystemTesting'
import A24UpdateUsersManual from './SoftwareDevelopment/A24UpdateUsersManual'
import A25AddFinalChanges from './SoftwareDevelopment/A25AddFinalChanges'
import A26MakeMaintenanceManual from './SoftwareDevelopment/A26MakeMaintenanceManual'
import A27ReviewMaintenanceManual from './SoftwareDevelopment/A27ReviewMaintenanceManual'
import A28SprintReview from './SoftwareDevelopment/A28SprintReview'
import A29SprintRetrospective from './SoftwareDevelopment/A29SprintRetrospective'

import ScrumMaster from './Roles/ScrumMaster'
import ProductOwner from './Roles/ProductOwner'

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

            {/* Software Development and Maintenance Pages */}
            <Route path="/sd_review_rodemap/" component={A1ReviewRoadmap} exact />
            <Route path="/sd_backlog_grooming/" component={A2BacklogGrooming} exact />
            <Route path="/sd_choose_stories/" component={A3ChooseStories} exact />
            <Route path="/sd_assign_stories/" component={A4AssignStories} exact />
            <Route path="/sd_make_system_testing_plan/" component={A5MakeSystemTesting} exact />
            <Route path="/sd_review_system_testing_plan/" component={A6ReviewSystemTesting} exact />
            <Route path="/sd_make_manual/" component={A7MakeUsersManual} exact />
            <Route path="/sd_review_manual/" component={A8ReviewUsersManual} exact />
            <Route path="/sd_synchronize_management_system/" component={A9SynchronizeTaskManager} exact />
            <Route path="/sd_add_to_managment_system/" component={A10AddSystemTestingPlan} exact />
            <Route path="/sd_make_high_level_design/" component={A11MakeMockups} exact />
            <Route path="/sd_review_high_level_design/" component={A12ReviewHighLevelDesign} exact />
            <Route path="/sd_make_integration_testing_plan/" component={A13MakeIntegrationTesting} exact />
            <Route path="/sd_review_integration_testing_plan/" component={A14ReviewIntegrationTesting} exact />
            <Route path="/sd_high_management_system/" component={A15AddHighlevelDesign} exact />
            <Route path="/sd_develop_TDD/" component={A16DevelopComponents} exact />
            <Route path="/sd_traceability_requirements/" component={A17ReviewTraceability} exact />
            <Route path="/sd_stories_management_system/" component={A18IntegrateUserStories} exact />
            <Route path="/sd_perform_integration_testing/" component={A19PerformIntegrationTesting} exact />
            <Route path="/sd_merge_to_main/" component={A20MergeTestedComponents} exact />
            <Route path="/sd_make_operations_manual/" component={A21MakeOperationsManual} exact />
            <Route path="/sd_review_operations_manual/" component={A22ReviewOperationsManual} exact />
            <Route path="/sd_system_testing/" component={A23PerformSystemTesting} exact />
            <Route path="/sd_update_user_manual/" component={A24UpdateUsersManual} exact />
            <Route path="/sd_review_user_manual/" component={A8ReviewUsersManual} exact />
            <Route path="/sd_final_changes_managment_system/" component={A25AddFinalChanges} exact />
            <Route path="/sd_make_maintenance_manual/" component={A26MakeMaintenanceManual} exact />
            <Route path="/sd_review_maintenance_manual/" component={A27ReviewMaintenanceManual} exact />
            <Route path="/sd_sprint_review/" component={A28SprintReview} exact />
            <Route path="/sd_sprint_retrospective/" component={A29SprintRetrospective} exact />

            {/* Roles */}
            <Route path="/scrum_master/" component={ScrumMaster} exact />
            <Route path="/product_owner/" component={ProductOwner} exact />
            
        </Switch>
    </BrowserRouter>
  );

ReactDOM.render(<Index />, document.getElementById('root'))