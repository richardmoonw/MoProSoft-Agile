import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

class A26MakeMaintenanceManual extends Component {
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
                                        <th>A6.1 Make/Rework the Maintenance Manual</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b>Roles</b></td>
                                            <td>
                                                <Link redirect to="developer"><p>Developer</p></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Brief Description</b></td>
                                            <td>
                                                <p>The developers document the Maintenance manual or modify the existing one.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Inputs</b></td>
                                            <td>
                                                <Link redirect to="tem_maintenance_manual"><p>Maintenance Manual (Optional)</p></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Outputs</b></td>
                                            <td>
                                                <Link redirect to="tem_maintenance_manual"><p>Maintenance Manual</p></Link>
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


export default A26MakeMaintenanceManual