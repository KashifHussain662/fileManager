import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import PhotoEditor from '@baronha/react-native-photo-editor';
import RNFS from 'react-native-fs'; // Add this import
import {images} from '../../theme';
import Toast from 'react-native-toast-message';

const Viewer = ({route}) => {
  const {type = 'image', source = null} = route.params;
  const [editedImagePath, setEditedImagePath] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleEdit = async () => {
    try {
      const result = await PhotoEditor.open({
        path: source,
        outputFormat: 'JPEG',
        quality: 0.8,
        onDone: async result => {
          if (result.error) {
            console.error('Photo editing error:', result.error);
            Alert.alert('Error', 'Failed to save changes');
          } else {
            console.log('Photo editing done:', result);
            // Update state with the edited image path
            setEditedImagePath(result.path);

            // Save the edited image to the gallery
            try {
              const galleryPath = RNFS.DocumentDirectoryPath + '/Gallery';
              await RNFS.mkdir(galleryPath);
              const fileName = 'edited_image.jpg';
              const destPath = galleryPath + '/' + fileName;
              await RNFS.moveFile(result.path, destPath);
              Alert.alert('Success', 'Image saved to gallery');
            } catch (error) {
              console.error('Error saving to gallery:', error);
              Alert.alert('Error', 'Failed to save image to gallery');
            }
          }
        },
        onCancel: () => {
          console.log('Photo editing cancelled');
        },
      });
    } catch (error) {
      console.error('Error opening photo editor:', error);
      Alert.alert('Error', 'Failed to open photo editor');
    }
  };

  useEffect(() => {
    // photo editor automatically open.
    // openPhotoEditor();
  }, []);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    const message = isFavorite
      ? 'Removed from favorites'
      : 'Added to favorites';
    // Alert.alert('Favorite', message);

    // Show toast message
    Toast.show({
      type: isFavorite ? 'success' : 'error',
      position: 'top',
      text1: 'Favorite Status',
      text2: message,
      visibilityTime: 2000, // 2 seconds
      autoHide: true,
    });
  };

  const handleDelete = () => {
    // Logic to handle share option
    Alert.alert('Delete', 'Delete option clicked');
  };

  const handleShare = () => {
    // Logic to handle edit option
    Alert.alert('Share', 'Share option clicked');
  };

  return (
    <View style={styles.container}>
      {type === 'image' && (
        <>
          {editedImagePath ? (
            // Display the edited image
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{uri: editedImagePath}}
            />
          ) : (
            // Display the original image
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{uri: source}}
            />
          )}
          {/* Options */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 5,
              backgroundColor: 'white',
              padding: 0,
            }}>
            <TouchableOpacity onPress={handleEdit}>
              <View
                style={{
                  alignItems: 'center',
                  padding: 8,
                }}>
                <Image source={images.icEdit} style={{width: 22, height: 22}} />
                <Text style={{color: 'black'}}>Edit</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleFavorite}>
              <View
                style={{
                  alignItems: 'center',
                  padding: 8,
                }}>
                <Image
                  source={images.icfavorite}
                  style={{width: 22, height: 22}}
                />
                <Text style={{color: 'black'}}>Favorite</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleDelete}>
              <View
                style={{
                  alignItems: 'center',
                  padding: 8,
                }}>
                <Image
                  source={images.icDelete}
                  style={{width: 22, height: 22}}
                />
                <Text style={{color: 'black'}}>Delete</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShare}>
              <View
                style={{
                  alignItems: 'center',
                  padding: 8,
                }}>
                <Image
                  source={images.icshare}
                  style={{width: 22, height: 22}}
                />
                <Text style={{color: 'black'}}>Share</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Viewer;
