import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {images} from '../../theme';

const Welcome = ({navigation}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      cropperChooseText: 'Select',
      cropperCancelText: 'Cancel',
    })
      .then(images => {
        setSelectedImages(images.map(image => image.path));
      })
      .catch(error => {
        console.log('ImagePicker Error:', error);
      });
  };

  const goToHomeScreen = () => {
    navigation.navigate('Home', {selectedImages});
  };

  return (
    <ImageBackground source={images.icWelcome} style={styles.Back_Img}>
      <View style={styles.container}>
        <Text onPress={handleImagePicker} style={styles.title}>
          Upload Image
        </Text>
        <Image source={images.icUploadImage} />

        <Text onPress={handleImagePicker} style={styles.title}>
          Upload Video
        </Text>
        <Image source={images.icUploadVideo} />

        <TouchableOpacity style={styles.button}>
          <Text onPress={goToHomeScreen} style={styles.text}>
            See
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Back_Img: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    paddingHorizontal: 30,
    margin: 20,
    padding: 10,
    borderRadius: 12,
  },
  title: {
    fontWeight: '800',
    fontSize: 20,
    margin: 20,
    backgroundColor: 'red',
    padding: 10,
  },
  text: {
    color: 'black',
  },
});

export default Welcome;
