import './AllTasks.css';
import ShowMyTask from '../Components/ShowMyTask';

const MyTasks = () => {

  const allTaskList = [
    {
      id: 1,
      taskName: 'This is a dummy task.',
      taskDesc: 'This is a description for a very long offer',
      taskOffer: 'This is what i am offering right now.',
      dueDate: '20',
      requests: [
   
      ]
    },
    {
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
        },
        {
          name: 'my name22',
          email: 'email@gmailasdfasdf.com',
          hisoffer: 'This is what tasdf sdfasdf he worker wants',
          hisDescription: 'This is what thasdf asdf sdf e worker wants'
        }
      ]
    }
  ];

  return (
    <div className="container">
      <div className="row">

        <h3>
          The tasks that I posted
        </h3>

        {allTaskList.map((oneTask) => (
          <ShowMyTask key={oneTask.id}
            taskName={oneTask.taskName}
            taskDesc={oneTask.taskDesc}
            taskOffer={oneTask.taskOffer}
            dueDate={oneTask.dueDate} 
            requests={oneTask.requests}/>
        ))}


      </div>
    </div>
  );
};

export default MyTasks;