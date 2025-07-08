import { useState, type FC } from 'react';
import './TaskInput.scss';
import type { Idata } from '../interfaces';

interface TaskInputProps {
  addTask: (data: Idata) => void;
}

export const TaskInput: FC<TaskInputProps> = ({ addTask }) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.length > 0) {
      const data = {
        isCompleted: false,
        task: value,
        id: Date.now(),
      };

      addTask(data);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input placeholder="Name task" value={value} onChange={(e) => setValue(e.target.value)} className="form__input" type="text" />
      <button className="form__btn" type="submit">
        +
      </button>
    </form>
  );
};
