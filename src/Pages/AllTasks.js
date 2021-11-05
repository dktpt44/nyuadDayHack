import './AllTasks.css';
import ShowOneTask from '../Components/ShowOneTask';

const AllTasks = () => {

  const allTaskList =[
    {
      id:1,
      taskName: 'This is a dummy task.',
      taskDesc: 'This is a description for a very long offer',
      taskOffer: 'This is what i am offering right now.',
      dueDate: '20'
    },
    {
      id:1,
      taskName: 'This is a dummy task 2.',
      taskDesc: 'This is a descri asd ptioasdf n for a very long offer',
      taskOffer: 'This is what i aasdf sdf m offering right now.',
      dueDate: '20'
    },
    {
      id:1,
      taskName: 'This is a dummy task 2.',
      taskDesc: 'This is a descri asd ptioasdf n for a very long offer',
      taskOffer: 'This is what i aasdf sdf m offering right now.',
      dueDate: '20'
    }
  ];

  return (
    <div className="container">
      <div className="row">

        <h3>
          Task Requests
        </h3>

        {allTaskList.map((oneTask)=>(
          <ShowOneTask key={oneTask.id} 
          taskName={oneTask.taskName}
          taskDesc ={oneTask.taskDesc}
          taskOffer={oneTask.taskOffer} 
          dueDate={oneTask.dueDate}/>
        ))}
        

      </div>
    </div>
  );
};

export default AllTasks;