import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Button,
  Alert,
} from 'react-native';
import PhotoEditor from '@baronha/react-native-photo-editor';
import Icon from 'react-native-vector-icons/FontAwesome';
import {images} from '../../theme';

const Viewer = ({route}) => {
  const {type = 'image', source = null} = route.params;
  const handleShare = () => {
    // Logic to handle share option
    Alert.alert('Share', 'Share option clicked');
  };

  const handleEdit = () => {
    // Logic to handle edit option
    Alert.alert('Edit', 'Edit option clicked');
  };

  const handleDelete = () => {
    // Logic to handle delete option
    Alert.alert('Delete', 'Delete option clicked');
  };

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
          {/* Options */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 5,
              backgroundColor: 'white',
              padding: 0,
            }}>
            <TouchableOpacity onPress={handleShare}>
              <View
                style={{
                  alignItems: 'center',
                  padding: 8,
                }}>
                <Image source={images.icEdit} style={{width: 22, height: 22}} />
                <Text style={{color: 'black'}}>Edit</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleEdit}>
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
            <TouchableOpacity onPress={handleDelete}>
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
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Viewer;
