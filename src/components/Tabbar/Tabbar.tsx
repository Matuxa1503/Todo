import { useEffect, useState, type FC } from 'react';
import './Tabbar.scss';
import { RadioBtn } from './RadioBtn/RadioBtn';
import type { Filter } from '../../types';

type TabbarProps = {
  counter: number;
  removeCompletedTask: () => void;
  setStateRadioBtn: (value: Filter) => void;
};

export const Tabbar: FC<TabbarProps> = ({ counter, removeCompletedTask, setStateRadioBtn }) => {
  const [stateRadio, setStateRadio] = useState<Filter>('all');

  useEffect(() => {
    setStateRadioBtn(stateRadio);
  }, [stateRadio, setStateRadioBtn]);

  const changedRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as Filter;
    setStateRadio(value);
  };

  return (
    <div className="tabbar">
      <div className="tabbar__radio-group">
        <RadioBtn nameRadio={'all'} changedRadio={changedRadio} stateRadio={stateRadio} />
        <RadioBtn nameRadio={'active'} changedRadio={changedRadio} stateRadio={stateRadio} />
        <RadioBtn nameRadio={'completed'} changedRadio={changedRadio} stateRadio={stateRadio} />
      </div>
      <div className="tabbar__info">
        <button onClick={() => removeCompletedTask()} className="tabbar__btn-clear">
          Clear completed
        </button>
        <p className="tabbar__title">{counter} items left</p>
      </div>
    </div>
  );
};
