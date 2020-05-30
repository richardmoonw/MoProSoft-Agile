import React, {Component} from 'react'
import NavigationBar from '../../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class T1ProjectDescription extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>Project Description</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td><b>Brief Description</b></td>
                                            <td>
                                                <p>This document provides the details of the problem the project will address, a set of goals for the project and 
                                                    the overall objectives for the project.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Template</b></td>
                                            <td>
                                                <a href="https://docs.google.com/document/d/1bElXvfw1pdcMqWdNKdC3sjsqiY5GlqkDDB5cprZ_Hw4/edit?usp=sharing">Project Description Template</a>
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


export default T1ProjectDescription