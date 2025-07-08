import type { Idata } from './interfaces';
import type { Filter } from './types';

export const getFilteredTasks = (tasks: Idata[], stateRadioBtn: Filter): Idata[] => {
  if (stateRadioBtn === 'active') {
    return tasks.filter((item) => !item.isCompleted);
  }

  if (stateRadioBtn === 'completed') {
    return tasks.filter((item) => item.isCompleted);
  }

  return tasks;
};
