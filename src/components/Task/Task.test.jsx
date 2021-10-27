import { render, screen } from '@testing-library/react';
import Task from './Task'

test('renders my task', () => {
  const component = render(<Task />);

  expect(component).toMatchSnapshot()
});
