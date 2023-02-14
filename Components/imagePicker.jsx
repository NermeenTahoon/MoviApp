import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, ImageBackground, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const imageBack = {uri : 'https://img.freepik.com/free-photo/top-view-popcorn-yellow-background_23-2148425057.jpg?w=360&t=st=1676323194~exp=1676323794~hmac=7b90aebf4ceed0e1117ce53d1126b6081229c32c86475e0c201c3cf7ca04c39c'}


export default function ImagePickerApp() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={imageBack} resizeMode='cover' style={styles.image}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 220, height: 220,margin:50}} />}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

    image: {
      flex: 1,
      justifyContent: 'center',
    }
})
