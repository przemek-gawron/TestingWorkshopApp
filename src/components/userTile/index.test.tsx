import { render, screen } from '@testing-library/react-native';
import UserTile from 'components/userTile';

test('form submits two answers', () => {
  render(<UserTile/>);
  expect(screen.getByText('UserTile')).toBeOnTheScreen();
});