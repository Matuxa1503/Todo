import { type FC } from 'react';
import './TaskInput.scss';

export const TaskInput: FC = () => {
  return (
    <form className="form">
      <input placeholder="Name task" className="form__input" type="text" />
      <button className="form__btn" type="submit">
        +
      </button>
    </form>
  );
};
