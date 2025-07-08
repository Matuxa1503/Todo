import { Header } from './components/Header/Header';
import { Tabbar } from './components/Tabbar/Tabbar';
import { TasksList } from './components/TasksList/TasksList';
import { TaskInput } from './components/TaskInput/TaskInput';
import './App.scss';
import { useEffect, useState } from 'react';
import type { Idata } from './components/interfaces';

function App() {
  const [tasks, setTasks] = useState<Idata[]>([{ isCompleted: true, task: '124dsf' }]);
  const [counter, setCounter] = useState<number>(0);

  const addTask = (data: Idata) => {
    setTasks((prev) => [...prev, data]);
  };

  useEffect(() => {
    console.log(tasks);

    const uncompletedTasks = tasks.filter((item) => !item.isCompleted).length;
    setCounter(uncompletedTasks);
  }, [tasks]);

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <TaskInput addTask={addTask} />
        <TasksList tasks={tasks} />
        <Tabbar counter={counter} />
      </div>
    </div>
  );
}

export default App;
