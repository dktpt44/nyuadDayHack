import { useState } from 'react';
import { Button, Collapse, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, ModalHeader, Modal, ModalBody, ModalFooter } from 'reactstrap';

import './showonetask.css';

const ShowOneTask = (props) => {

  const [collapseIsopen, setCollapseOpen] = useState(false);
  const [isModelOpen, setModelOpen] = useState(false);
  const [isInvalid, setIsinvalid] = useState(false);

  const [state, setState] = useState({
    nameVal: '', emailVal: '', descriptionVal: '', offerVal: '',
  });
  function handleInputChange(event) {
    setIsinvalid(false);
    const name = event.target.name;
    const value = event.target.value;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (state.emailVal === '' || state.titleVal === '' || state.offerVal === '') {
      setIsinvalid(true);
      return;
    }
    console.log(state);

    // TODO: send data to database
    setState({
      nameVal: '', emailVal: '', descriptionVal: '', offerVal: '',
    });
    setModelOpen(false);

  }


  return (
    <div className="container">

      <div className="taskDiv" onClick={() => {
                setCollapseOpen(!collapseIsopen);
              }}>

        <div className="taskHeader row">
          <div className="taskName col-md-7">

            <h5>
              {props.taskName}
            </h5>
          </div>

          <div className="dueDate col-md-2">
            <h6>
              {props.dueDate}
            </h6>
          </div>

          <div className="expandButtonDiv col-md-1 offset-md-2">
            <Button
              color="primary"
              onClick={() => {
                setCollapseOpen(!collapseIsopen);
              }}
              style={{
                padding: 0,
                border: 'none',
                backgroundColor: 'transparent',
              }}
            >
              <span className="expandButtonClass">
                <i className=" fas fa-plus-circle"></i>
              </span>
            </Button>
          </div>


        </div>
        <div className="taskExpand">
          <Collapse isOpen={collapseIsopen}>
            <Card>
              <CardBody>
                <b>Description:</b>
                <br />
                {props.taskDesc}
                <br />
                <br />
                <b>Offer:</b>
                <br />

                {props.taskOffer}
                <br />
                <Button
                  color="primary"
                  onClick={() => {
                    // Display a popup form
                    setModelOpen(true);

                  }}
                  style={{
                    marginTop: 16,
                    paddingLeft: 18,
                    paddingRight: 18
                  }}>
                  Offer help
                </Button>

              </CardBody>
            </Card>
          </Collapse>
        </div>

      </div>

      <Modal isOpen={isModelOpen}>
        <ModalHeader>
          Please Enter your Info
        </ModalHeader>
        <ModalBody>


          <Form>
            <Row>
              <Col md={6}>
                <FormGroup >
                  <Label for="nameVal">
                    Name *
                  </Label>
                  <Input name="nameVal" invalid={isInvalid} onChange={handleInputChange} value={state.nameVal} />

                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="emailVal">
                    Email *
                  </Label>
                  <Input name="emailVal" invalid={isInvalid} onChange={handleInputChange} value={state.emailVal} />

                </FormGroup>

              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup >
                  <Label for="offerVal">
                    Offer *
                  </Label>
                  <Input name="offerVal" invalid={isInvalid} onChange={handleInputChange} value={state.offerVal} />

                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <FormGroup >
                  <Label for="descriptionVal">
                    Description 
                  </Label>
                  <Input name="descriptionVal" onChange={handleInputChange} value={state.descriptionVal} type="textarea" rows="3" />

                </FormGroup>
              </Col>
            </Row>

          </Form>
        </ModalBody>
        <ModalFooter>
        <Button
            color="danger"
            onClick={() => {
              setModelOpen(false);
            }}
          >
            Close
          </Button>
          {' '}
          <Button
            color="success"
            onClick={handleSubmit}
          >
            Submit
          </Button>

        </ModalFooter>
      </Modal>

    </div>


  );
};

export default ShowOneTask;