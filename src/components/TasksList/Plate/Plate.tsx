import { type FC } from 'react';
import './Plate.scss';
import { CircleCheck } from 'lucide-react';
import type { Idata } from '../../interfaces';

type PlateProps = {
  task: Idata;
};

export const Plate: FC<PlateProps> = ({ task }) => {
  return (
    <div className="plate">
      {task.isCompleted ? (
        <CircleCheck className="plate__icon" size={40} color="green" />
      ) : (
        <CircleCheck className="plate__icon" size={40} color="gray" />
      )}
      <p className={`plate__title ${task.isCompleted ? 'crossed' : ''}`}>{task.task}</p>
    </div>
  );
};
