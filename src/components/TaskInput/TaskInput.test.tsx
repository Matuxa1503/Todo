import { render, screen, fireEvent } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import { TaskInput } from './TaskInput';

it('write text and call addTask when form is submitted', () => {
  const mock = vi.fn();
  render(<TaskInput addTask={mock} />);

  const input = screen.getByPlaceholderText('Name task');
  fireEvent.change(input, { target: { value: 'Новая задача' } });

  const button = screen.getByRole('button');
  fireEvent.click(button);

  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith(
    expect.objectContaining({
      task: 'Новая задача',
      isCompleted: false,
    })
  );
});
