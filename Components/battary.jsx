import * as React from 'react';
import * as Battery from 'expo-battery';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = {uri : 'https://img.freepik.com/free-photo/top-view-popcorn-yellow-background_23-2148425057.jpg?w=360&t=st=1676323194~exp=1676323794~hmac=7b90aebf4ceed0e1117ce53d1126b6081229c32c86475e0c201c3cf7ca04c39c'};

export default class BattaryApp extends React.Component {
  state = {
    batteryLevel: null,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async _subscribe() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    this.setState({ batteryLevel });
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      this.setState({ batteryLevel });
      console.log('batteryLevel changed!', batteryLevel);
    });
  }

  _unsubscribe() {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
            <Text style={styles.txt}>Current Battery Level: {this.state.batteryLevel}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
