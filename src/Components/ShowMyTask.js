import './showmytask.css';
import RequestLayout from '../Components/RequestLayout';

const ShowMyTask = (props) => {
  const allRequests = props.requests[0];

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
          <div className="col-12"><b>Requests:</b>&nbsp;<span className="reqLen">{allRequests.length}</span>
            <div className="col-12 paddleftx">
              <ul>
                {allRequests.map((oneReq)=>(<RequestLayout key={oneReq.reqemailVal} name={oneReq.reqnameVal} email={oneReq.reqemailVal} hisoffer={oneReq.reqofferVal} hisdescription={oneReq.reqdescriptionVal}/>))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>


  );
};

export default ShowMyTask;