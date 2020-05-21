import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ScrumMaster extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>Scrum Master</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Role Description</td>
                                            <td>
                                                <p>The Scrum Master is responsible for promoting and supporting Scrum. Scrum Masters do this by helping everyone understand Scrum theory, 
                                                    practices, rules, and values. The Scrum Master is a servant-leader for the Scrum Team. The Scrum Master helps those outside the Scrum 
                                                    Team understand which of their interactions with the Scrum Team are helpful and which aren’t. The Scrum Master helps everyone change 
                                                    these interactions to maximize the value created by the Scrum Team.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Required Training</td>
                                            <td>
                                                <ul>
                                                    <li>Experience in Scrum or certification in scrum master.</li>
                                                    <li>Experience with Management.</li>
                                                    <li>Experience with Human Resources.</li>
                                                    <li>Some Project Management experience may be helpful.</li>
                                                    <li>Training with communication and teamwork skills.</li>
                                                </ul>
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


export default ScrumMaster