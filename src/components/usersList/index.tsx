import {View, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {User} from 'api/getUsers/getUser.types';
import UserTile from 'components/userTile';

interface UsersListProps {
  users: User[];
}

const keyExtractor = (item: User, index: number) =>
  item.id.value || index.toString();

const UsersList = ({users}: UsersListProps) => {
  // TODO: add pagination to the list, button on the bottom to load more users and test it,
  // scroll to bottom, press on load more button and check if request was sent

  const renderItem = useCallback(({item}: {item: User}) => {
    return <UserTile user={item} />;
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default UsersList;
