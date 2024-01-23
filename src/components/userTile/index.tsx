import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {User} from 'api/getUsers/getUser.types';
import {theme} from 'theme';

interface UserTileProps {
  user: User;
}

const UserTile = ({user}: UserTileProps) => {
  // TODO: test if we can navigate to user details screen and back to users list

  const {navigate} = useNavigation();
  const onTilePressHandler = () => navigate('UserDetails' as never);

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onTilePressHandler}
      style={styles.container}>
      <View style={styles.imageContainer}>
        {/* TODO: use some default picure if not provided */}
        {/* add test to check if default picture is displayed */}
        <Image
          source={{uri: user.picture.large}}
          style={styles.image}
          accessibilityIgnoresInvertColors
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {user.name.title} {user.name.first} {user.name.last}
        </Text>
        <Text>Phone: {user.phone}</Text>
        <Text>Email: {user.email}</Text>
        <Text>
          Adress: {user.location.street.name} {user.location.street.number},{' '}
          {user.location.city}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: theme.colors.lightGray,
    borderColor: theme.colors.information,
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 8,
    borderWidth: 0.5,
    // flexDirection: 'row',
    padding: 15,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  infoContainer: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default UserTile;
