import { type FC } from 'react';
import './TasksList.scss';
import { Plate } from './Plate/Plate';
import type { Idata } from '../../interfaces';

interface TasksListProps {
  tasks: Idata[];
  handleToggleTask: (id: number) => void;
}

export const TasksList: FC<TasksListProps> = ({ tasks, handleToggleTask }) => {
  return (
    <div className="blockTasks">
      {tasks.length === 0 && <p className="plug">No Tasks</p>}
      {tasks.map((task) => (
        <Plate key={task.id} task={task} handleToggleTask={handleToggleTask} />
      ))}
    </div>
  );
};
