import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ExampleForm from './ExampleForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <Container className="app">
        <Row>
          <Col>
            <h1>Playing with Reactstrap</h1>
            
          </Col>
        </Row>
        <Row className="demo">
          <Col>.col</Col>
        </Row>
        <Row className="demo">
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row className="demo">
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
        <Row className="demo">
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row className="demo">
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row className="demo">
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
        </Row>
        <Row className="demo">
          <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
        </Row>
        <Row className="demo">
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        </Row>
        <Row className="mt-5">
          <Col sm="3" className="bg-secondary" style={{position:'relative'}}>
            <div style={{position:'sticky', top:'1rem'}}> 
              <h3>Some helper text</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus quam, accumsan et lectus id, condimentum convallis augue.</p>
            </div>


          </Col>
          <Col sm="6">
            <Row>
              <Col className="justify-content-end d-flex">
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="">
                <DropdownToggle caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem disabled>Action (disabled)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </Col>
            </Row>
            <ExampleForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
