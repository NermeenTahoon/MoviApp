import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImgCard from "./card";

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

const image = {uri : 'https://img.freepik.com/free-photo/top-view-popcorn-yellow-background_23-2148425057.jpg?w=360&t=st=1676323194~exp=1676323794~hmac=7b90aebf4ceed0e1117ce53d1126b6081229c32c86475e0c201c3cf7ca04c39c'};


export default function Movies({navigation}) {
  const [movie, setMovie] = useState([]);
  getMovie(apiUrl);
  function getMovie(url) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovie(data.results);
      });
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground source={image} resizeMode='cover' style={styles.image}>

        <TouchableOpacity>
            <Text 
                style={styles.btn}
                onPress={()=>{
                  navigation.navigate('Home');
                  Alert.alert('Welcome Back')
            }}>
                Home
            </Text>
          </TouchableOpacity>
          <ScrollView>
            {movie.map((item, index) => {
              return (
                <TouchableOpacity onPress={()=>{navigation.navigate('Details',{movieid:item.id});}}>
                  <ImgCard
                    key={index}
                    mvName={item.title}
                    imgLink={imgPath + item.poster_path}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
      </ImageBackground>

    </View>
  );
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
  }
});
