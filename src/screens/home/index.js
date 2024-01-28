import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  Button,
  ActivityIndicator,
} from 'react-native';

const width = Dimensions.get('window').width;

const Home = ({navigation, route}) => {
  const {selectedImages, type} = route.params;
  const [ads, setAds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.example.com/jazzcash/ads', {
  //         method: 'GET',
  //         headers: {
  //           Authorization: 'Bearer YOUR_API_KEY',
  //         },
  //         timeout: 10000,
  //       });

  //       const data = await response.json();
  //       setAds(data);
  //       console.log('API Response:', data); // Log the API response
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const handleNext = () => {
  //   const nextIndex = (currentIndex + 1) % ads.length;
  //   setCurrentIndex(nextIndex);
  // };

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#ffffff" />;
  // }

  // if (ads.length === 0) {
  //   return <Text>No ads available</Text>;
  // }

  // const imageUrl =
  //   ads[currentIndex].imageUrl || 'https://via.placeholder.com/200';

  return (
    <View style={styles.container}>
      {/* <View>
        <Text>Featured Ads</Text>
        <View>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Button title="Next" onPress={handleNext} />
        </View>
      </View> */}
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
                  type === 'image'
                    ? {uri: item.path}
                    : {uri: 'https://via.placeholder.com/200'}
                }
                style={type === 'image' ? styles.image : styles.videoIcon}
              />
              <Text style={styles.extensionText}>
                File Name: {item.fileName}
                {'\n'}
                Extension: {item.fileExtension}
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
  },
  image: {
    resizeMode: 'cover',
    width: 200,
    height: 200,
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
