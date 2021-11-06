import './AllTasks.css';
import ShowMyTask from '../Components/ShowMyTask';
import { Input, Button } from 'reactstrap';
import MySpinner from '../Components/MySpinner';
import { useEffect, useState } from 'react';

const FIREBASE_DOMAIN = 'https://nyuaddayhackathon-default-rtdb.firebaseio.com/';

const MyTasks = () => {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [allTaskList, setAllTaskList] = useState([]);
  const [finalDat, setFinalDat] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const dummy = '';
    localStorage.getItem('userEmailx', dummy);
    if (dummy === null) {
      setEnteredEmail('')
    } else {
      setEnteredEmail(dummy);
    }
  }, []);

  const fetchRequests = () => {
    localStorage.setItem('userEmailx', enteredEmail);
    setShowLoading(true);
    fetch(`${FIREBASE_DOMAIN}/alltasks.json`)
      .then(response => response.json())
      .then((data) => {
        const allTasks = [];
        for (const key in data) {
          const taskObj = {
            id: key,
            ...data[key],
          };
          allTasks.push(taskObj);
        }
        allTasks.reverse();
        const filteredtsk = allTasks.filter(oneTas => oneTas.emailVal === enteredEmail);
        setAllTaskList(filteredtsk);

        filteredtsk.forEach((thisTsk) => {
          fetch(`${FIREBASE_DOMAIN}/allrequests.json`)
            .then(res => res.json())
            .then((dat) => {
              const allReqs = [];
              for (const key in dat) {
                const taskObj = {
                  id: key,
                  ...dat[key],
                };
                allReqs.push(taskObj);
              }
              allReqs.reverse();
              const filteredreq = allReqs.filter(oneReq => oneReq.taskId === thisTsk.id);
              const fnalDat = [{
                thisTsk,
                requests: filteredreq
              }
              ];

              const allDat = finalDat;
              allDat.push(fnalDat);
              console.log(allDat);
              setFinalDat(allDat[0]);
            });
        });

        // fetching all requests.

        setShowLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setShowLoading(false);
      });



  }

  function handleChange(event) {
    setEnteredEmail(event.target.value);
    if(enteredEmail===""||enteredEmail.length===1){
      setFinalDat([]);
    }
  }

  /*
 id: 2,
       taskName: 'This is a dummy task 2.',
       taskDesc: 'This is a descri asd ptioasdf n for a very long offer',
       taskOffer: 'This is what i aasdf sdf m offering right now.',
       dueDate: '20',
       requests: [
         {
           name: 'my name',
           email: 'email@gmail.com',
           hisoffer: 'This is what the worker wants',
           hisDescription: 'This is what the worker wants'
         }
       ]
  */

  return (
    <div className="container">
      <div className="row">

        <h3>
          Check my active tasks
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
        {(allTaskList.length === 0) && <h4 style={{ fontWeight: 600, marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>No tasks found</h4>}

        {showLoading && <MySpinner />}

        {(finalDat.length !== 0) && finalDat.map((oneTask) => (
          <ShowMyTask key={oneTask.thisTsk.id}
            taskName={oneTask.thisTsk.titleVal}
            taskDesc={oneTask.thisTsk.descriptionVal}
            taskOffer={oneTask.thisTsk.offerVal}
            dueDate={oneTask.thisTsk.dueDateVal}
            requests={[oneTask.requests]} />
        ))}


      </div>
    </div>
  );
};

export default MyTasks;