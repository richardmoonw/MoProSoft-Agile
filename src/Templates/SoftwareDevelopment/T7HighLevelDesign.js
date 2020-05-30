import React, {Component} from 'react'
import NavigationBar from '../../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class T7HighLevelDesign extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>High-level design</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td><b>Brief Description</b></td>
                                            <td>
                                                <p>High-level design explains the architecture that would be used for developing a software product. These 
                                                    diagrams provide an overview of an entire system, identifying the main components that would be developed for the 
                                                    product and their interfaces.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Template</b></td>
                                            <td>
                                                <a href="https://docs.google.com/document/d/1oJrEinshDJXCeLaiumkz-1Y0CZyxC2k6kmxC0mfpzuw/edit?usp=sharing">High Level Design Template</a>
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


export default T7HighLevelDesign