import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUsers} from 'getUsers';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isError, setError] = useState(false);

  console.log('users', users);
  useEffect(() => {
    async function fetchUsers() {
      const response = await getUsers();
      setUsers(response.data.results[0]);
    }

    fetchUsers().catch(() => setError(true));
  }, []);

  return (
    <View>
      <Text>Users</Text>
      <Text>Users</Text>
      <Text>Users</Text>
      <Text>Users</Text>
    </View>
  );
};

export default Users;
