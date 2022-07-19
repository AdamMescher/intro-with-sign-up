import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Input from './Input';

expect.extend(toHaveNoViolations);

describe('Input Component', () => {
  it('Should render without errors', () => {
    render(<Input />);
  });
  it('Should render without axe a11y errors', async () => {
    render(<Input />);
    expect(await axe(screen.getByRole('textbox'))).toHaveNoViolations();
  });
});
