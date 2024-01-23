import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUsers} from 'api/getUsers';
import {User} from 'api/getUsers/getUser.types';
import UsersList from 'components/usersList';

const Users = () => {
  // TODO: move users to redux/context or maybe redux on one branch, context on another to test both cases
  const [users, setUsers] = useState<User[]>([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const response = await getUsers();
      setUsers(response.data.results);
    }

    // eslint-disable-next-line promise/prefer-await-to-then
    fetchUsers().catch(() => setError(true));
  }, []);

  if (isError) {
    return (
      <View>
        {/* TODO: test if we display error after failing request */}
        <Text>Something went wrong</Text>
      </View>
    );
  }

  return (
    <View>
      {/* TODO: add floating button with modal to add new user - form testing */}
      {/* TODO: add some header */}
      {/* TODO: add some modal with timeout (advertisement) -> to write tests for code with timeouts */}
      <UsersList users={users} />
    </View>
  );
};

export default Users;
