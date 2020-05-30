import React, {Component} from 'react'
import NavigationBar from '../../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class T14MaintenanceManual extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>Maintenance Manual</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td><b>Brief Description</b></td>
                                            <td>
                                                <p>This document contains the System Configuration and the information of the environment in which the system was
                                                    developed and tested.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Template</b></td>
                                            <td>
                                                <a href="https://docs.google.com/document/d/1E8inGu60SWz3A3P5WB2OOBoKru7R7cOmRbr_dRHGXRI/edit?usp=sharing">Maintenance Manual Template</a>
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


export default T14MaintenanceManual