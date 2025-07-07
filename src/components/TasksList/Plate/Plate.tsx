import { type FC } from 'react';
import './Plate.scss';
import { CircleCheck } from 'lucide-react';

export const Plate: FC = () => {
  return (
    <div className="plate">
      <CircleCheck className="plate__icon" size={40} color="gray" />
      {/* <CircleCheck className="plate__icon" size={40} color="green" /> */}
      <p className="plate__title">lorem*1</p>
    </div>
  );
};
