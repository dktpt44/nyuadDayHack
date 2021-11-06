import { Input, Button } from 'reactstrap';
import MySpinner from '../Components/MySpinner';
import MyoneWork from '../Components/MyoneWork';
import { useState } from 'react';

const FIREBASE_DOMAIN = 'https://nyuaddayhackathon-default-rtdb.firebaseio.com/';

const MyWork = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [allRequests, setAllRequests] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  function handleChange(event) {
    setEnteredEmail(event.target.value);
    if(enteredEmail===""||enteredEmail.length===1){
      //todo: reset array

    }
  }
  const fetchRequests = () => {
    console.log("Fetching");
    setShowLoading(true);
    fetch(`${FIREBASE_DOMAIN}/allrequests.json`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        const allReqs = [];
        for (const key in data) {
          const taskObj = {
            id: key,
            ...data[key],
          };
          allReqs.push(taskObj);
        }
        allReqs.reverse();
        const filteredtsk = allReqs.filter(oneTas => oneTas.reqemailVal === enteredEmail);

        setAllRequests(filteredtsk);

        setShowLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setShowLoading(false);
      });



  }


  return (
    <div className="container">
      <div className="row">

        <h3>
          Check my offerings
        </h3>

        <div className="col-12">
          <h5 className="formHeadding">
            Email:
          </h5>
          <Input className="inputClss" type="email" name="myname" placeholder="Enter email to fetch your requests." value={enteredEmail} onChange={handleChange} />
          <Button className="submitBtn" color="success" onClick={(event) => {
            event.preventDefault();
            fetchRequests();
          }}>Submit</Button>
        </div>

        {(allRequests.length === 0) && <h4 style={{ fontWeight: 600, marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>No requests found</h4>}

        {showLoading && <MySpinner />}

        {allRequests.map((oneTask) => (
          <MyoneWork key={oneTask.id}
            taskName={oneTask.taskName}
            taskDesc={oneTask.reqdescriptionVal}
            taskOffer={oneTask.reqofferVal}
            dueDate={oneTask.taskDueDate}
            requestStatus={oneTask.reqStatusVal} />
        ))}


      </div>
    </div>
  );
};

export default MyWork;