import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Video from 'react-native-video';

const Viewer = ({route}) => {
  const {type = 'image', source = null} = route.params;

  return (
    <View style={styles.container}>
      {type === 'image' && (
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: source}}
        />
      )}
      {type === 'video' && (
        <Video
          controls={true}
          source={{uri: source, type: 'mp4'}}
          style={styles.backgroundVideo}
          resizeMode="contain" // Ensure video content fits the container
        />
      )}
    </View>
  );
};

export default Viewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundVideo: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
