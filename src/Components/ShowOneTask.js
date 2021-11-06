import { useState } from 'react';
import { Button, Collapse, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, ModalHeader, Modal, ModalBody, ModalFooter } from 'reactstrap';
import MySpinner from '../Components/MySpinner';

import './showonetask.css';

const FIREBASE_DOMAIN = 'https://nyuaddayhackathon-default-rtdb.firebaseio.com/';

const ShowOneTask = (props) => {

  const [collapseIsopen, setCollapseOpen] = useState(false);
  const [isModelOpen, setModelOpen] = useState(false);
  const [isInvalid, setIsinvalid] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [state, setState] = useState({
    reqnameVal: '',taskId:'',  reqemailVal: '', reqdescriptionVal: '', reqofferVal: '',taskName:'',taskDueDate:'', reqStatusVal:'pending'
  });
  function handleInputChange(event) {
    setIsinvalid(false);
    const name = event.target.name;
    const value = event.target.value;
    setState(prevState => ({
      ...prevState,
      taskId:props.taskId,
      taskName:props.titleVal,
      taskDueDate:props.dueDateVal,
      [name]: value
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (state.reqemailVal === '' || state.reqtitleVal === '' || state.reqofferVal === '') {
      setIsinvalid(true);
      return;
    }

    // TODO: send data to database
    fetch(`${FIREBASE_DOMAIN}/allrequests.json`, {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json()).then(() => {setShowLoading(false);
      setModelOpen(false);}).catch(() => {
      console.log("ERRor!");
      setModelOpen(false);
    });

    setState({
      reqnameVal: '', reqemailVal: '', reqdescriptionVal: '', reqofferVal: '',taskName:'',taskDueDate:'', reqStatusVal:'pending'
    });
    

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
                  <Label for="reqnameVal">
                    Name *
                  </Label>
                  <Input name="reqnameVal" invalid={isInvalid} onChange={handleInputChange} value={state.reqnameVal} />

                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="reqemailVal">
                    Email *
                  </Label>
                  <Input name="reqemailVal" invalid={isInvalid} onChange={handleInputChange} value={state.reqemailVal} />

                </FormGroup>

              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup >
                  <Label for="reqofferVal">
                    Offer *
                  </Label>
                  <Input name="reqofferVal" invalid={isInvalid} onChange={handleInputChange} value={state.reqofferVal} />

                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <FormGroup >
                  <Label for="reqdescriptionVal">
                    Description
                  </Label>
                  <Input name="reqdescriptionVal" onChange={handleInputChange} value={state.reqdescriptionVal} type="textarea" rows="3" />

                </FormGroup>
              </Col>
            </Row>

          </Form>
          {showLoading && <MySpinner/> }
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