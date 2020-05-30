import React, {Component} from 'react'
import NavigationBar from '../../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class T13SystemTestingPlanReport extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>System Testing Plan Report</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td><b>Brief Description</b></td>
                                            <td>
                                                <p>This document provides the Test Summary for the system testing activities within a specific sprint for a specific system.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Template</b></td>
                                            <td>
                                                <a href="https://docs.google.com/document/d/1biieOIN9GL77ZwBZeM2txYw9mXdZ5ly_CHvecrsZk4g/edit?usp=sharing">System Testing Plan Report Template</a>
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


export default T13SystemTestingPlanReport