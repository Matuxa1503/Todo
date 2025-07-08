import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { Tabbar } from './Tabbar';

describe('Tabbar', () => {
  it('show counter and call cleaning', () => {
    const mockRemove = vi.fn();
    const mockSetRadio = vi.fn();

    render(<Tabbar counter={2} removeCompletedTask={mockRemove} setStateRadioBtn={mockSetRadio} />);
    expect(screen.getByText('2 items left')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Clear completed'));
    expect(mockRemove).toHaveBeenCalledTimes(1);
  });

  it('when choosing a radio it calls setStateRadioBtn', () => {
    const mockRemove = vi.fn();
    const mockSetRadio = vi.fn();

    render(<Tabbar counter={0} removeCompletedTask={mockRemove} setStateRadioBtn={mockSetRadio} />);
    const activeRadio = screen.getByDisplayValue('active');
    fireEvent.click(activeRadio);

    expect(mockSetRadio).toHaveBeenCalledWith('active');
  });
});
