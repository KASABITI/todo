import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

test('renders without crashing', () => {
  const component = render(<TaskList />);

  expect(component).toMatchSnapshot()
});
