import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox'

test('renders without crashing', () => {
  const component = render(<Checkbox />);

  expect(component).toMatchSnapshot()
});
