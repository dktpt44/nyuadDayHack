import './AllTasks.css';
import { useEffect, useState } from 'react';
import ShowOneTask from '../Components/ShowOneTask';
import MySpinner from '../Components/MySpinner';

const FIREBASE_DOMAIN = 'https://nyuaddayhackathon-default-rtdb.firebaseio.com/';

const AllTasks = () => {

  const [isLoading, setIsLoading] = useState(true);
  var [allTaskList, setAllTaskList] = useState([{ key: 1, abc: 1 }]);

  useEffect(() => {
    setIsLoading(true);
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
        setAllTaskList(allTasks);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">

        <h3>
          Task Requests
        </h3>
        {isLoading && <MySpinner />}

        <div className="col-12">
          {(allTaskList.length === 0) && <h4 style={{ fontWeight: 600, marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>No tasks found</h4>}
        </div>

        {!isLoading && allTaskList.map((oneTask) => (
          <ShowOneTask key={oneTask.nameVal}
            taskName={oneTask.titleVal}
            taskDesc={oneTask.descriptionVal}
            taskOffer={oneTask.offerVal}
            dueDate={oneTask.dueDateVal}
            taskId={oneTask.id} />
        ))}


      </div>
    </div>
  );
};

export default AllTasks;