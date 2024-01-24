import React, {useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import PhotoEditor from '@baronha/react-native-photo-editor';

const Viewer = ({route}) => {
  const {type = 'image', source = null} = route.params;

  const openPhotoEditor = async () => {
    try {
      const result = await PhotoEditor.open({
        path: source,
        outputFormat: 'JPEG',
        quality: 0.8,
        onDone: () => {
          console.log('Photo editing done');
        },
        onCancel: () => {
          console.log('Photo editing cancelled');
        },
      });
    } catch (error) {
      console.error('Error opening photo editor:', error);
    }
  };

  useEffect(() => {
    //  photo editor automatically open.
    // openPhotoEditor();
  }, []);

  return (
    <View style={styles.container}>
      {type === 'image' && (
        <>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{uri: source}}
          />
          <TouchableOpacity onPress={openPhotoEditor} style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Photo</Text>
          </TouchableOpacity>
        </>
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
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  editButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
  },
});

export default Viewer;
