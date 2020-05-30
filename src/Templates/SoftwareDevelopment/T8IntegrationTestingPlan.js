import React, {Component} from 'react'
import NavigationBar from '../../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class T8IntegrationTestingPlan extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>Integration Testing Plan</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td><b>Brief Description</b></td>
                                            <td>
                                                <p>An integration test plan is a collection of integration tests that focus on functionality. 
                                                    Bottom up integration testing proceeds as follows.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Template</b></td>
                                            <td>
                                                <a href="https://docs.google.com/document/d/1HaJK_0AjjxJ--rO3GiddWyrcuhFTGtR-pWKUdgHGe40/edit?usp=sharing">Integration Testing Plan Template</a>
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


export default T8IntegrationTestingPlan