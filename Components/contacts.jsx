import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import * as Contacts from 'expo-contacts';

const image = {uri : 'https://img.freepik.com/free-photo/top-view-popcorn-yellow-background_23-2148425057.jpg?w=360&t=st=1676323194~exp=1676323794~hmac=7b90aebf4ceed0e1117ce53d1126b6081229c32c86475e0c201c3cf7ca04c39c'};

export default function AppContacts() {
useEffect(() => {
  (async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails],
      });

      if (data.length > 0) {
        const contact = data[0];
        console.log(contact);
      }
    }
  })();
}, []);

return (
<View style={styles.container}>
<ImageBackground source={image} resizeMode='cover' style={styles.image}>
<Text style={styles.txt}>Contacts Module Example</Text>
</ImageBackground>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
image: {
    flex: 1,
    justifyContent: 'center',
  },
txt:{
    color:'#333' , 
    fontSize:20 , 
    fontWeight:'bold' , 
    textAlign:'center',
    backgroundColor:'#fff',
    width:300,
    borderRadius:20,
    margin:30}
});