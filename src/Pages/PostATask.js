import { Form, FormGroup, Label, Input, Row, Col, Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import MySpinner from '../Components/MySpinner';
import './postatask.css';

const FIREBASE_DOMAIN = 'https://nyuaddayhackathon-default-rtdb.firebaseio.com/';

const PostATask = () => {

  const [isInvalid, setIsinvalid] = useState(false);
  const [isModelOpen, setModelOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [state, setState] = useState({
    emailVal: '', nameVal: '', titleVal: '', dueDateVal: '', descriptionVal: '', offerVal: '',
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
    setModelOpen(true);
    setShowLoading(true);


    // TODO: send data to database
    fetch(`${FIREBASE_DOMAIN}/alltasks.json`, {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json()).then(() => setShowLoading(false)).catch(() => {
      console.log("ERRor!");
    });


  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>
            Make a task request
          </h3>

        </div>
        <div className="col-12">

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={5}>
                <FormGroup>
                  <Label for="emailVal">
                    Email *
                  </Label>
                  <Input name="emailVal" invalid={isInvalid} onChange={handleInputChange} value={state.emailVal} />

                </FormGroup>

              </Col>
              <Col md={5}>
                <FormGroup >
                  <Label for="nameVal">
                    Name (optional)
                  </Label>
                  <Input name="nameVal" invalid={isInvalid} onChange={handleInputChange} value={state.nameVal} />

                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={5}>
                <FormGroup >
                  <Label for="titleVal">
                    Task Title*
                  </Label>
                  <Input name="titleVal" invalid={isInvalid} onChange={handleInputChange} value={state.titleVal} />
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup >
                  <Label for="dueDateVal">
                    Due date *
                  </Label>
                  <Input name="dueDateVal" invalid={isInvalid} onChange={handleInputChange} value={state.dueDateVal} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={10}>
                <FormGroup >
                  <Label for="descriptionVal">
                    Description *
                  </Label>
                  <Input name="descriptionVal" onChange={handleInputChange} value={state.descriptionVal} type="textarea" rows="3" />

                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={10}>
                <FormGroup >
                  <Label for="offerVal">
                    Offer *
                  </Label>
                  <Input name="offerVal" invalid={isInvalid} onChange={handleInputChange} value={state.offerVal} />

                </FormGroup>
              </Col>
            </Row>
            <Button className="marginTopss" color="success">
              Submit
            </Button>
          </Form>
        </div>

      </div>

      <Modal isOpen={isModelOpen}>
        <ModalBody>
          {showLoading && <MySpinner/> }
          
          {!showLoading && <span>Congratulations, request posted.</span>}
          
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              setModelOpen(false);
              setState({
                emailVal: '', nameVal: '', titleVal: '', dueDateVal: '', descriptionVal: '', offerVal: '',
              });
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PostATask;