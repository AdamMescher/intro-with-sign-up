import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Input from './Input';

expect.extend(toHaveNoViolations);

describe('Input Component', () => {
  it('Should render without errors', () => {
    const name = 'firstName';
    const label = 'First Name';
    const placeholder = 'First Name';
    const errors = {
      firstName: false,
    };
    render(
      <Input
        label={label}
        name={name}
        placeholder={placeholder}
        errors={errors}
      />
    );
  });
  it('Should render without axe a11y errors', async () => {
    const name = 'firstName';
    const label = 'First Name';
    const placeholder = 'First Name';
    render(<Input label={label} name={name} placeholder={placeholder} />);
    expect(await axe(screen.getByRole('textbox'))).toHaveNoViolations();
  });
});
