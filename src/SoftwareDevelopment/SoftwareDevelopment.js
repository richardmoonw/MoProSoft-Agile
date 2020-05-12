import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SoftwareDevelopment extends Component {
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
                                    <th>Process</th>
                                    <th>Software Development and Maintenance</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>Category</b></td>
                                        <td>Operational (OPE)</td>
                                    </tr>
                                    <tr>
                                        <td><b>Purpose</b></td>
                                        <td>The purpose of Software Development and Maintenance is to systematically carry out the activities of analysis, design, construction, integration and testing of new or modified software products fulfilling the specified requirements. </td>
                                    </tr>
                                    <tr>
                                        <td><b>Objectives</b></td>
                                        <td>
                                            <ul>
                                                <li>To achieve that the output products are consistent with the input ones in each software development phase, through verification, validation and testing.</li>
                                                <li>To sustain the realization of future cycles or maintenance projects through the integration of the current cycle Software Configuration.</li>
                                                <li>To carry out the activities of the cycle phases fulfilling the current Development Plan.</li>
                                            </ul>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            </Col>
                        </Row>     
                    </div>

                    
                </Container>
            </div>
        )
    }
}


export default SoftwareDevelopment