import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                                        <th>Specific Project Management</th>
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
                            <img src={require('../assets/specific_project.jpg')} height= '1250'  width='896' useMap="#moprosoft" alt="My Logo" />
                        </Row>
                        <br/>   
                    </div>
                </Container>
            </div>
        )
    }
}


export default ProjectManagement