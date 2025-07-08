import { type FC } from 'react';
import './Plate.scss';
import { CircleCheck } from 'lucide-react';
import type { Idata } from '../../interfaces';

type PlateProps = {
  task: Idata;
  handleToggleTask: (id: number) => void;
};

export const Plate: FC<PlateProps> = ({ task, handleToggleTask }) => {
  return (
    <div className="plate">
      <CircleCheck
        className="plate__icon"
        size={50}
        color={`${task.isCompleted ? 'green' : 'gray'}`}
        onClick={() => handleToggleTask(task.id)}
      />
      <p className={`plate__title ${task.isCompleted ? 'crossed' : ''}`}>{task.task}</p>
    </div>
  );
};
