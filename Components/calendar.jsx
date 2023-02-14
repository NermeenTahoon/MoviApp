import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform, ImageBackground } from 'react-native';
import * as Calendar from 'expo-calendar';

const image = {uri : 'https://img.freepik.com/free-photo/top-view-popcorn-yellow-background_23-2148425057.jpg?w=360&t=st=1676323194~exp=1676323794~hmac=7b90aebf4ceed0e1117ce53d1126b6081229c32c86475e0c201c3cf7ca04c39c'};

export default function AppCalender() {
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        console.log({ calendars });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
            <Text style={styles.txt}>Calendar Module Example</Text>
            <Button title="Create a new calendar" onPress={createCalendar} />
        </ImageBackground>
      
    </View>
  );
}

async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Expo Calendar' };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: 'Expo Calendar',
    color: 'blue',
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'personal',
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
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
    margin:30},
   
});
