import { useState, type FC } from 'react';
import './Tabbar.scss';

type Filter = 'all' | 'active' | 'completed';

export const Tabbar: FC = () => {
  const [stateRadio, setStateRadio] = useState<Filter>('all');

  const changeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as Filter;
    setStateRadio(value);
  };

  return (
    <div className="tabbar">
      <button className="tabbar__btn">+</button>
      <div className="tabbar__radio-group">
        <div className="tabbar__radio">
          <label className="tabbar__label" htmlFor="all">
            <input onChange={(e) => changeRadio(e)} type="radio" id="all" name="filter" value="all" checked={stateRadio === 'all'} />
            All
          </label>
        </div>
        <div className="tabbar__radio">
          <label className="tabbar__label" htmlFor="active">
            <input
              onChange={(e) => changeRadio(e)}
              type="radio"
              id="active"
              name="filter"
              value="active"
              checked={stateRadio === 'active'}
            />
            Active
          </label>
        </div>
        <div className="tabbar__radio">
          <label className="tabbar__label" htmlFor="completed">
            <input
              onChange={(e) => changeRadio(e)}
              type="radio"
              id="completed"
              name="filter"
              value="completed"
              checked={stateRadio === 'completed'}
            />
            Completed
          </label>
        </div>
      </div>
      <div className="tabbar__info">
        <button className="tabbar__btn-clear">Clear completed</button>
        <p className="tabbar__title">2 items left</p>
      </div>
    </div>
  );
};
