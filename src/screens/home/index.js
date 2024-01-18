import React from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';

const HomeScreen = ({route}) => {
  const {selectedImages} = route.params;

  return (
    <View style={styles.container}>
      {selectedImages && selectedImages.length > 0 && (
        <FlatList
          data={selectedImages}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{uri: item}}
                style={{width: 300, height: 300, margin: 10}}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default HomeScreen;
