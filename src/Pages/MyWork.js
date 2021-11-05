import MyoneWork from '../Components/MyoneWork';
const MyWork = () => {

  const allTaskList = [
    {
      id: 1,
      taskName: 'This is a dummy task.',
      taskDesc: 'This is a description for a very long offer',
      taskOffer: 'This is what i am offering right now.',
      dueDate: '20',
      requestStatus:'Pending'
    }
  ];
  return (
    <div className="container">
      <div className="row">

        <h3>
          The tasks that I am working on
        </h3>

        {allTaskList.map((oneTask) => (
          <MyoneWork key={oneTask.id}
            taskName={oneTask.taskName}
            taskDesc={oneTask.taskDesc}
            taskOffer={oneTask.taskOffer}
            dueDate={oneTask.dueDate} 
            requestStatus={oneTask.requestStatus}/>
        ))}


      </div>
    </div>
  );
};

export default MyWork;