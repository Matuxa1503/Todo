import { describe, it, expect } from 'vitest';
import { getFilteredTasks } from './utils';

const mockTasks = [
  { id: 1, task: 'Task 1', isCompleted: false },
  { id: 2, task: 'Task 2', isCompleted: true },
  { id: 3, task: 'Task 3', isCompleted: false },
];

it('return empty array if not tasks', () => {
  const res = getFilteredTasks([], 'all');
  expect(res).toEqual([]);
});

it('return all tasks. Filter "all"', () => {
  const res = getFilteredTasks(mockTasks, 'all');
  expect(res).toHaveLength(3);
});

it('return only active tasks. Filter "active"', () => {
  const res = getFilteredTasks(mockTasks, 'active');
  expect(res).toEqual([
    { id: 1, task: 'Task 1', isCompleted: false },
    { id: 3, task: 'Task 3', isCompleted: false },
  ]);
});

it('return only completed tasks. Filter "completed"', () => {
  const res = getFilteredTasks(mockTasks, 'completed');
  expect(res).toEqual([{ id: 2, task: 'Task 2', isCompleted: true }]);
});
