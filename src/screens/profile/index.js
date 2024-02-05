// Import necessary components and libraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  //   ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import DarkModeSwitch from '../../components/darkMode';

const EditProfileScreen = () => {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    phone: '',
    whatsapp: '',
    address: '',
    profileImage: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch user profile data from the API and update the state
    fetchUserProfile();
  }, []);

  const fetchUserProfile = () => {
    // Assume you have an API endpoint to fetch user profile data based on user ID
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    const userId = '123'; // Replace with the actual user ID
    fetch(`YOUR_API_ENDPOINT/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUserData({
          id: data.id,
          name: data.name,
          phone: data.phone,
          whatsapp: data.whatsapp,
          address: data.address,
          profileImage: data.profileImage, // Assuming the API returns the image URL
        });
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  };

  const handleSelectProfilePicture = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        setUserData(prevData => ({...prevData, profileImage: image.path}));
      })
      .catch(error => {
        console.error('Error selecting profile picture:', error);
      });
  };

  const handleUpdateProfile = () => {
    // Implement the logic to update the user profile using the API
    // This is a placeholder and needs to be replaced with your actual API endpoint and logic
    Alert.alert('Update Profile', 'Profile updated successfully!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelectProfilePicture}>
        <Image
          source={{uri: userData.profileImage}}
          style={styles.profileImage}
        />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Icon name="person-outline" size={20} color="#333" />
        <TextInput
          style={styles.input}
          value={userData.name}
          onChangeText={text => setUserData({...userData, name: text})}
          placeholder="Enter Name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#333" />
        <TextInput
          style={styles.input}
          value={userData.phone}
          onChangeText={text => setUserData({...userData, phone: text})}
          placeholder="Enter Phone"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="logo-whatsapp" size={20} color="#333" />
        <TextInput
          style={styles.input}
          value={userData.whatsapp}
          onChangeText={text => setUserData({...userData, whatsapp: text})}
          placeholder="Enter WhatsApp"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="location-on" size={20} color="#333" />
        <TextInput
          style={styles.input}
          value={userData.address}
          onChangeText={text => setUserData({...userData, address: text})}
          placeholder="Enter Address"
        />
      </View>

      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleUpdateProfile}>
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Update Profile</Text>
        )}
      </TouchableOpacity>
      <DarkModeSwitch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default EditProfileScreen;
