import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {User} from 'api/getUsers/getUser.types';
import {theme} from 'theme';

interface UserTileProps {
  user: User;
}

const UserTile = ({user}: UserTileProps) => {
  // TODO: wrap around touchable and navigate to user details screen
  // test if we can navigate to user details screen and back to users list
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: user.picture.large}}
          style={styles.image}
          accessibilityIgnoresInvertColors
        />
      </View>
      {/* TODO: use some default picure if not provided */}
      {/* add test to check if default picture is displayed */}
      <Text>UserTile</Text>
    </View>
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
    flexDirection: 'row',
    padding: 15,
  },
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export default UserTile;
