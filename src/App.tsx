import { Header } from './components/Header/Header';
import { Tabbar } from './components/Tabbar/Tabbar';
import { TasksList } from './components/TasksList/TasksList';
import { TaskInput } from './components/TaskInput/TaskInput';
import './App.scss';
import { useEffect, useState } from 'react';
import type { Idata } from './components/interfaces';

function App() {
  const [tasks, setTasks] = useState<Idata[]>([{ isCompleted: true, task: '124dsf' }]);

  const addTask = (data: Idata) => {
    setTasks((prev) => [...prev, data]);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <TaskInput addTask={addTask} />
        <TasksList tasks={tasks} />
        <Tabbar />
      </div>
    </div>
  );
}

export default App;
