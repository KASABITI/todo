import { render, screen } from '@testing-library/react';
import DateTime from './DateTime';

test('renders without crashing', () => {
  const component = render(<DateTime />);

  expect(component).toMatchSnapshot()
});