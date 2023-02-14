import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import * as Clipboard from 'expo-clipboard';

const image = {uri : 'https://img.freepik.com/free-photo/top-view-popcorn-yellow-background_23-2148425057.jpg?w=360&t=st=1676323194~exp=1676323794~hmac=7b90aebf4ceed0e1117ce53d1126b6081229c32c86475e0c201c3cf7ca04c39c'};


export default function BoardClip() {
  const [copiedText, setCopiedText] = React.useState('');

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('hello world');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  return (
    <View style={styles.container}>
       <ImageBackground source={image} resizeMode='cover' style={styles.image}>
       <Button title="Click here to copy Clipboard" onPress={copyToClipboard} />
      <Button title="View copied text" onPress={fetchCopiedText} />
      <Text style={styles.copiedText}>{copiedText}</Text>
       </ImageBackground>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copiedText: {
    color:'#333' , 
    fontSize:20 , 
    fontWeight:'bold' , 
    textAlign:'center',
    backgroundColor:'#fff',
    width:300,
    borderRadius:20,
    margin:30
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },

});