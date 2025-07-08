import { Header } from './components/Header/Header';
import { Tabbar } from './components/Tabbar/Tabbar';
import { TasksList } from './components/TasksList/TasksList';
import { TaskInput } from './components/TaskInput/TaskInput';
import './App.scss';
import { useEffect, useState } from 'react';
import type { Idata } from './interfaces';
import type { Filter } from './types';
import { getFilteredTasks } from './utils/utils';

function App() {
  const [tasks, setTasks] = useState<Idata[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [stateRadioBtn, setStateRadioBtn] = useState<Filter>('all');
  const filteredTasks = getFilteredTasks(tasks, stateRadioBtn);

  useEffect(() => {
    const uncompletedTasks = tasks.filter((item) => !item.isCompleted).length;
    setCounter(uncompletedTasks);
  }, [tasks]);

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

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <TaskInput addTask={addTask} />
        <TasksList tasks={filteredTasks} handleToggleTask={handleToggleTask} />
        <Tabbar counter={counter} removeCompletedTask={removeCompletedTask} setStateRadioBtn={setStateRadioBtn} />
      </div>
    </div>
  );
}

export default App;
