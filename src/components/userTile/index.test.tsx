import React from 'react';
import {render, screen} from '@testing-library/react-native';
import UserTile from 'components/userTile';

test('show user title', () => {
  render(<UserTile />);
  expect(screen.getByText('UserTile')).toBeOnTheScreen();
});
