import './showmytask.css';

const MyoneWork = (props) => {
  const allRequests = props.requests;

  return (
    <div className="container">

      <div className="myTasksDivvvx">
        <div className="taskHeader row">
          <div className="col-12">
            <h5>
              {props.taskName}
            </h5>
          </div>
          <div className=" col-12">
            <p className="taskDueDate">
              Due Date: {props.dueDate}
            </p>

          </div>
        </div>
        <div className="row taskDueDate paddingDiv">
          <div className="col-12 offerxxx">
            <b>Offer:</b> {props.taskOffer}
          </div>
          <div className="col-12">
            <b>Description:</b>&nbsp;{props.taskDesc}</div>
        </div>
        <div className="row taskDueDate paddingDiv2">
          <div className="col-12"><b>Request Status:</b>&nbsp;<span className="reqStatus">{props.requestStatus}</span>
            
          </div>

        </div>

      </div>
    </div>


  );
};

export default MyoneWork;