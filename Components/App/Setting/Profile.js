import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import Fath from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
export default function Profile(props) {
  return (
    <View>
      <View style={style.ProfileHeader}>
        <View style={style.back}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ant name="left" size={40} color="white" />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 160,
            }}>
            <Text style={style.Text}>Setting</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={style.profilePic}>
            <Text style={style.ProfileText}>JD</Text>
          </View>
        </TouchableOpacity>
        <Text style={[style.Text, {paddingTop: 10}]}>John Doe</Text>
      </View>
      <View style={style.Body}>
        <View style={style.Items}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Ant name="car" color="blue" size={25} />
            <Text style={style.ItemsText}>Vehicle</Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={[style.ItemsText, {paddingRight: 10, color: 'blue'}]}>
              Bike
            </Text>
            <Ant name="right" color="grey" size={25} />
          </TouchableOpacity>
        </View>
        <View style={style.Items}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Fath name="navigation" color="blue" size={25} />
            <Text style={style.ItemsText}>Navigation App</Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={[style.ItemsText, {paddingRight: 10, color: 'blue'}]}>
              Google Maps
            </Text>
            <Ant name="right" color="grey" size={25} />
          </TouchableOpacity>
        </View>
        <View style={style.Items}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Ant name="setting" color="blue" size={25} />
            <Text style={style.ItemsText}>System Setting</Text>
          </View>
        </View>
        <View style={[style.Items, {borderBottomWidth: 0}]}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Entypo name="newsletter" color="blue" size={25} />
            <Text style={style.ItemsText}>Feed back</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  ProfileHeader: {
    alignItems: 'center',
    // height: 230,
    width: '100%',
    backgroundColor: '#2E3344',
    paddingBottom: 20,
  },
  back: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    backgroundColor: '#2E3344',
  },
  Text: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    letterSpacing: 2,
    fontSize: 17,
    textAlign: 'center',
  },
  profilePic: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 100,
    height: 100,
    width: 100,
    backgroundColor: 'white',
  },
  ProfileText: {
    letterSpacing: 3,
    fontWeight: 'bold',
    fontSize: 50,
  },
  Body: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 10,
  },
  Items: {
    padding: 30,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    width: '100%',
    backgroundColor: 'white',
  },
  ItemsText: {
    paddingLeft: 10,
    fontSize: 15,
  },
});
