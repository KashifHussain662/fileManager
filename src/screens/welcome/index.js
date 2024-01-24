import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, ImageBackground} from 'react-native';
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
        navigation.navigate('Home', {selectedImages: images, type: 'image'});
      })
      .catch(error => {
        console.log('ImagePicker Error:', error);
      });
  };

  const handleVideoPicker = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
      multiple: true,
      cropperChooseText: 'Select',
      cropperCancelText: 'Cancel',
    })
      .then(videos => {
        navigation.navigate('Home', {selectedImages: videos, type: 'video'});
      })
      .catch(error => {
        console.log('ImagePicker Error:', error);
      });
  };

  return (
    <ImageBackground source={images.icWelcome} style={styles.Back_Img}>
      <View style={styles.container}>
        <Text onPress={handleImagePicker} style={styles.title}>
          Upload Image
        </Text>
        <View>
          <Image source={images.icUploadImage} />
          <Text style={styles.badge}>(0)</Text>
        </View>

        <Text onPress={handleVideoPicker} style={styles.title}>
          Upload Video
        </Text>
        <View>
          <Image source={images.icUploadVideo} />
          <Text style={styles.badge}>(0)</Text>
        </View>
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
    backgroundColor: 'rgba(125, 165, 126, 0.84)',
    padding: 10,
    borderRadius: 12,
    color: 'rgba(255, 48, 48, 1)',
  },
  text: {
    color: 'black',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -3,
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    borderRadius: 10,
  },
});

export default Welcome;

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const BadgeBox = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.badge}>Badge</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: 200,
//     height: 200,
//     backgroundColor: 'lightblue',
//     position: 'relative',
//   },
//   badge: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: 'red',
//     color: 'white',
//     padding: 5,
//     borderRadius: 10,
//   },
// });

// export default BadgeBox;
