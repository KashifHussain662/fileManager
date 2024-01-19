import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Video from 'react-native-video';

const Viewer = ({route}) => {
  const {type = 'image', source = null} = route.params;

  return (
    <View style={styles.container}>
      {type == 'image' && (
        <Image
          resizeMethod="contain"
          style={styles.image}
          source={{uri: source}}
        />
      )}
      {type == 'video' && (
        <Video
          controls={true}
          source={{uri: source, type: 'mp4'}}
          style={styles.backgroundVideo}
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
    width: '100%',
    height: '100%',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
