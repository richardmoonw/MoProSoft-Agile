import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class MainScreen extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <p> The increase of the processes capabilities of a software development organization is regularly guided by a <b>process reference model</b>, 
                        for that reason the models should be attached to the environment and maturity of the organization.
                        The need for process reference models, specifically those designed for <b>small and medium organizations</b>, aroused the creation of standards 
                        that would fit the particular environment and accomplish objectives of those organizations.
                    </p>

                    <p> In 2002 the Ministry of Economy in Mexico, launched a call for proposals to create a process reference model that would accumulate up-to-date 
                        sets of best practices in the industry of software development of the country.
                        The proposal was developed together with the UNAM, the Mexican Association for the Quality in Software Engineering (AMCIS) and the Ministry of
                        Economy, under the coordination of Hanna Oktaba, a coauthor of this paper.</p>
                    <Row>
                        <Col md lg="2"></Col>
                        <Col md lg="8">
                            <img src={require('../assets/moprosoft_processes.jpg')} height= '627'  width='800' useMap="#moprosoft" alt="My Logo" />
                            <map name="moprosoft">
                                <Link redirect to="project_management"><area shape="rect" coords="165,460,360,560" /></Link>
                                <Link redirect to="software_development"><area shape="rect" coords="397,462,590,560" href="" alt="Moon" /></Link>
                            </map>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default MainScreen