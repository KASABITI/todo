import { render, screen } from '@testing-library/react';
import Header from '../Header/Header';

test('renders Todo', () => {
 
  const component = render(<Header />);

  expect(component).toMatchSnapshot()
});
