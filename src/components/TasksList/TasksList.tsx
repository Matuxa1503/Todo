import { type FC } from 'react';
import './TasksList.scss';
import { Plate } from './Plate/Plate';
import type { Idata } from '../interfaces';

interface TasksListProps {
  tasks: Idata[];
}

export const TasksList: FC<TasksListProps> = ({ tasks }) => {
  return (
    <div className="blockTasks">
      {tasks.map((task) => (
        <Plate key={task.id} task={task} />
      ))}
    </div>
  );
};
