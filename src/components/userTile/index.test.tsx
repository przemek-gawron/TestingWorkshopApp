import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import UserTile from 'components/userTile';
import {mockUser} from 'testUtils/mocks/user';

test('show user title', () => {
  render(
    <NavigationContainer>
      <UserTile user={mockUser} />
    </NavigationContainer>,
  );

  const userName = `${mockUser.name.title} ${mockUser.name.first} ${mockUser.name.last}`;
  expect(screen.getByText(userName)).toBeOnTheScreen();
});
