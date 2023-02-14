import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const imgPath = "https://image.tmdb.org/t/p/w500/";

const image = {uri : 'https://img.freepik.com/free-photo/top-view-popcorn-yellow-background_23-2148425057.jpg?w=360&t=st=1676323194~exp=1676323794~hmac=7b90aebf4ceed0e1117ce53d1126b6081229c32c86475e0c201c3cf7ca04c39c'};

export default function Modules({navigation }) {

  return (
    <View style={styles.container}>

        <StatusBar style="auto" />

        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
          <ScrollView>
            <TouchableOpacity>
                <Text 
                    style={styles.btn}
                    onPress={()=>{
                        navigation.navigate('Home');
                        Alert.alert('Welcome Back')
                    }}>
                        Home
                    </Text>
                    <Text 
                        style={styles.btn}
                        onPress={()=>{
                            navigation.navigate('Movies');
                    }}>
                        Movies List
                </Text>
                    <Text 
                        style={styles.btn}
                        onPress={()=>{
                            navigation.navigate('CameraApp');
                    }}>
                        Camera
                </Text>
                    <Text 
                        style={styles.btn}
                        onPress={()=>{
                            navigation.navigate('PickImage');
                    }}>
                        Pick Image
                </Text>
                    <Text 
                        style={styles.btn}
                        onPress={()=>{
                            navigation.navigate('Clip');
                    }}>
                        Clip Board
                </Text>
                    <Text 
                        style={styles.btn}
                        onPress={()=>{
                            navigation.navigate('Battary');
                    }}>
                        Battary
                </Text>
                    <Text 
                        style={styles.btn}
                        onPress={()=>{
                            navigation.navigate('Calendar');
                    }}>
                        Calendar
                </Text>
                    <Text 
                        style={styles.btn}
                        onPress={()=>{
                            navigation.navigate('Contacts');
                    }}>
                        Contacts
                </Text>
                </TouchableOpacity>

          </ScrollView>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    btn:{
      flexDirection:'row',
      textAlign: "center",
      color:'#333',
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: '#ffffffb7',
      width: 200,
      padding:10 ,
      marginLeft:'auto', 
      marginRight:'auto' ,
      marginTop: 20,
      borderRadius: 10,
      elevation: 15,
      shadowColor: '#52006A',
    },
    movieImage:{
      height:300,
      width: 300,
      margin:30,
      borderRadius:10,
      elevation : 40,
      shadowColor : '#333'
    },
    txt:{
      padding: 10,
      color:'#fff'
    }
  });