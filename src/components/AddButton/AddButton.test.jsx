import { render, screen } from '@testing-library/react';
import AddButton from './AddButton';

test('renders without crashing', () => {
  const component = render(<AddButton />);

  expect(component).toMatchSnapshot()
});
