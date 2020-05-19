import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

class ProjectManagement extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>Specific Project Management</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <thead>
                                        <th>Process</th>
                                        <th>A1.3 Specific Project Management</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b>Category</b></td>
                                            <td>Operational (OPE)</td>
                                        </tr>
                                        <tr>
                                            <td><b>Purpose</b></td>
                                            <td>The purpose of Specific Project Management is to establish and systematically carry out the activities that allow raising the requirements of a project in the expected time and cost. </td>
                                        </tr>
                                        <tr>
                                            <td><b>Objectives</b></td>
                                            <td>
                                                <ul>
                                                    <li>To achieve the project's objectives in time and cost through its resources coordination and management.</li>
                                                    <li>To keep the customer informed by conducting meetings of the project's progress.</li>
                                                    <li>To attend the changes requests through its reception and analysis.</li>
                                                </ul>
                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="0" md lg="1"></Col>
                            <img src={require('../assets/specific_project.jpg')} height= '1250'  width='896' useMap="#specific_project" alt="My Logo" />
                            <map name="specific_project">
                                <Link redirect to="review_project_des"><area shape="rect" coords="162,85,278,122" /></Link>
                                <Link redirect to="define_small_rel"><area shape="rect" coords="162,146,278,187"/></Link>
                                <Link redirect to="identify_stories"><area shape="rect" coords="385,217,495,258"/></Link>
                                <Link redirect to="order_backlog"><area shape="rect" coords="385,282,495,322"/></Link>
                                <Link redirect to="define_points"><area shape="rect" coords="615,354,727,384"/></Link>
                                <Link redirect to="assign_resources"><area shape="rect" coords="615,402,727,443"/></Link>
                                <Link redirect to="evaluate_cost"><area shape="rect" coords="162,462,278,503"/></Link>
                                <Link redirect to="review_roadmap"><area shape="rect" coords="375,530,498,562"/></Link>
                                <Link redirect to="backlog_grooming"><area shape="rect" coords="380,588,493,629"/></Link>
                                <Link redirect to="choose_stories"><area shape="rect" coords="612,659,733,699"/></Link>
                                <Link redirect to="assign_stories"><area shape="rect" coords="612,717,733,757"/></Link>
                                <Link redirect to="meetings"><area shape="rect" coords="612,781,733,830"/></Link>
                                <Link redirect to="review_burndown"><area shape="rect" coords="612,852,733,892"/></Link>
                                <Link redirect to="review_traceability"><area shape="rect" coords="612,917,733,957"/></Link>
                                <Link redirect to="sprint_review"><area shape="rect" coords="387,997,501,1029"/></Link>
                                <Link redirect to="sprint_retrospective"><area shape="rect" coords="612,1068,733,1100"/></Link>
                            </map>
                        </Row>
                        <br/>   
                    </div>
                </Container>
            </div>
        )
    }
}


export default ProjectManagement