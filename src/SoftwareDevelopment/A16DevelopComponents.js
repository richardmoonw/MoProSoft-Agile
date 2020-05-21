import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class A16DevelopComponents extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>Software Development and Maintenance</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <thead>
                                        <th>Activity</th>
                                        <th>A4.1 Develop/Rework the components based on TDD</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b>Roles</b></td>
                                            <td>
                                                <p>Developer.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Brief Description</b></td>
                                            <td>
                                                <p>In this activity the Developer codes the stories with the Test Driven Development approach. This approach basically implies that the Test Cases are coded in the automated testing system before writing code.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Inputs</b></td>
                                            <td>
                                                <p>User stories</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Outputs</b></td>
                                            <td>
                                                <p>Software</p>
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


export default A16DevelopComponents