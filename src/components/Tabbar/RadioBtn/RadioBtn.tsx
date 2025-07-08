import { type FC } from 'react';
import './Radio.scss';
import type { Filter } from '../../../types';

type RadioBtnProps = {
  nameRadio: Filter;
  changedRadio: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stateRadio: string;
};

export const RadioBtn: FC<RadioBtnProps> = ({ nameRadio, changedRadio, stateRadio }) => {
  return (
    <div className="tabbar__radio">
      <label className="tabbar__label" htmlFor={nameRadio}>
        <input
          onChange={(e) => changedRadio(e)}
          type="radio"
          id={nameRadio}
          name="filter"
          value={nameRadio}
          checked={stateRadio === nameRadio}
        />
        {nameRadio}
      </label>
    </div>
  );
};
