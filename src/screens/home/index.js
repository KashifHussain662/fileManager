import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {images} from '../../theme';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = ({navigation, route}) => {
  const {selectedImages, type} = route.params;

  const getFileExtension = filePath => {
    return filePath.split('.').pop();
  };
  return (
    <View style={styles.container}>
      {selectedImages && selectedImages.length > 0 && (
        <FlatList
          data={selectedImages}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          style={{paddingVertical: 16}}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Viewer', {source: item.path, type: type})
              }
              style={styles.itemContainer}>
              <Image
                source={
                  type === 'image' ? {uri: item.path} : images.icUploadVideo
                }
                style={type == 'image' ? styles.image : styles.videoIcon}
              />

              <Text style={styles.extensionText}>
                {getFileExtension(item.path)}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  itemContainer: {
    backgroundColor: '#000',
    width: width / 2 - 16,
    height: 180,
    margin: 6,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '87.5%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  videoIcon: {
    width: 60,
    height: 60,
  },
  extensionText: {
    color: 'white',
    marginTop: 4,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '900',
  },
});

export default Home;
