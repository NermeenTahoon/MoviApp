import { Button } from "@react-native-material/core";
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const image = {uri : 'https://img.freepik.com/free-photo/scattered-popcorn-box_23-2148133628.jpg?w=740&t=st=1676322615~exp=1676323215~hmac=b5ae5d07b016c928aa92cdac167f39aa023e0154c664ef465f1db13728af984f'}

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
            <TouchableOpacity>
                <Text 
                    style={styles.btn}
                    onPress={()=>{
                    navigation.navigate('Services');
                    Alert.alert('Hello, Welcome To Our Movie APP')
                }}>
                   Let's get Started
                </Text>
            </TouchableOpacity>
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
  text:{
    textAlign: "center",
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  btn:{
    textAlign: "center",
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#10A19D',
    width: 220,
    padding:10 ,
    marginLeft:'auto', 
    marginRight:'auto' ,
    borderRadius: 12,
    elevation: 15,
  }
});