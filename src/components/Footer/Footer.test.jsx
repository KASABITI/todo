import { render, screen } from '@testing-library/react';
import Footer from './Footer'

test('renders @webcom', () => {
  const component = render(<Footer />);

  expect(component).toMatchSnapshot()
});
