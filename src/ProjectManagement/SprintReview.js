import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SprintReview extends Component {
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
                                        <th>Activity</th>
                                        <th>A2.8 Sprint Review</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b>Roles</b></td>
                                            <td>
                                                <p>Scrum Master.</p>
                                                <p>Product Owner.</p>
                                                <p>Dev Team.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Brief Description</b></td>
                                            <td>
                                                <p>The developer chooses a story from the backlog in the task manager, notifies that they are working on the story, and adds a branch to the configuration management system. The branch is traceable to the user story using some kind of identifier.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Inputs</b></td>
                                            <td>
                                               <p>N/A</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Outputs</b></td>
                                            <td>
                                                <p>Change Request</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <br/>   
                    </div>
                </Container>
            </div>
        )
    }
}


export default SprintReview