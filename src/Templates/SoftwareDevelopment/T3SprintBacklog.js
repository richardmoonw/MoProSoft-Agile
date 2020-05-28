import React, {Component} from 'react'
import NavigationBar from '../../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class T3SprintBacklog extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>Sprint Backlog</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td><b>Brief Description</b></td>
                                            <td>
                                                <p>The sprint backlog is a list of tasks identified by the Scrum team to be completed during the Scrum sprint. 
                                                    During the sprint planning meeting, the team selects some number of product backlog items, usually in the form 
                                                    of user stories, and identifies the tasks necessary to complete each user story.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Template</b></td>
                                            <td>
                                                <a href="https://docs.google.com/document/d/1Fahled5vdwNi5eD9q6zooZ4QbF3QXDxnC3LvdJlFI2U/edit?usp=sharing">Sprint Backlog Guideline</a>
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


export default T3SprintBacklog