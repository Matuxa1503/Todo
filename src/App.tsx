import { Header } from './components/Header/Header';
import { Tabbar } from './components/Tabbar/Tabbar';
import { TasksList } from './components/TasksList/TasksList';
import { TaskInput } from './components/TaskInput/TaskInput';
import './App.scss';
import { useEffect, useState } from 'react';
import type { Idata } from './components/interfaces';

function App() {
  const [tasks, setTasks] = useState<Idata[]>([{ isCompleted: true, task: '124dsf', id: Date.now() }]);
  const [counter, setCounter] = useState<number>(0);

  const addTask = (data: Idata) => {
    setTasks((prev) => [...prev, data]);
  };

  const handleToggleTask = (id: number) => {
    const updateTask = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });

    setTasks(updateTask);
  };

  const removeCompletedTask = () => {
    const arr = tasks.filter((item) => !item.isCompleted);
    setTasks(arr);
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
        <TasksList tasks={tasks} handleToggleTask={handleToggleTask} />
        <Tabbar counter={counter} removeCompletedTask={removeCompletedTask} />
      </div>
    </div>
  );
}

export default App;
