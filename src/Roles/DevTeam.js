import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DevTeam extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>Dev Team</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Role Description</td>
                                            <td>
                                                <p>The development team has from three to nine members who carry out all tasks required to build increments of valuable 
                                                    output every sprint. 
                                                    The team is self-organizing. While no work should come to the team except through the product owner, and the scrum 
                                                    master is expected to protect the team from too much distraction, the team should still be encouraged to interact 
                                                    directly with customers and/or stakeholders to gain maximum understanding and immediacy of feedback.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Required Training</td>
                                            <td>
                                                <ul>
                                                    <li>Experience on Scrum and XP desirable.</li>
                                                    <li>Training on Test Driven Development and Testing.</li>
                                                    <li>Training on Software Documentation.</li>
                                                    <li>Training on the guidelines of quality and processes exclusive to the company.</li>
                                                    <li>Training on User Experience and up-to-date standards of human-computer interface and interaction.</li>
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


export default DevTeam