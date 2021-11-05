import { useState } from 'react';
import { Button, Collapse, Card, CardBody } from 'reactstrap';
import './showonetask.css';

const ShowOneTask = (props) => {

  const [collapseIsopen, setCollapseOpen] = useState(false);

  return (
    <div className="container">

      <div className="taskDiv">

        <div className="taskHeader row">
          <div className="taskName col-md-6">

            <h5>
              {props.taskName}
            </h5>
          </div>

          <div className="dueDate col-md-2">
            <h6>
              {props.dueDate}
            </h6>
          </div>

          <div className="expandButtonDiv col-md-2 offset-md-2">
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

                  }}
                  style={{
                    marginTop: 16,
                    paddingLeft: 18,
                    paddingRight:18
                  }}>
                    Offer help
                </Button>

              </CardBody>
            </Card>
          </Collapse>
        </div>

      </div>


    </div>


  );
};

export default ShowOneTask;