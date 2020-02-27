import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Ant from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
export default function DriverChat(props) {
  return (
    <View>
      <View style={style.cahtHEader}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ant name="left" size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingRight: 100}}>
          <Image
            style={{height: 40, width: 200, marginTop: 10}}
            resizeMethod="resize"
            resizeMode="contain"
            source={require('../../../assets/Reality+tv+Spain.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={style.BackView}>
        <Text
          style={{fontSize: 35, color: 'white', fontFamily: 'Montserrat-Bold'}}>
          Hello there <Entypo name="hand" color="yellow" size={25} />
        </Text>
        <Text style={style.Text}>
          Hello there and welcome to DeliviGo support
        </Text>
        <Text style={style.Text}>We are help to help!</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={style.BOdy}>
          <View>
            <Text style={[style.Text, {fontSize: 15, paddingTop: 10}]}>
              Start a conversation
            </Text>
            <Text style={[style.Text, {fontSize: 10, textAlign: 'center'}]}>
              Typically replied in 10m
            </Text>
          </View>
          <View style={style.CirclB}>
            <View style={style.Circle}></View>
            <View style={[style.Circle, {marginLeft: -12}]}></View>
            <View style={[style.Circle, {marginLeft: -12}]}></View>
            <View style={[style.Circle, {marginLeft: -12}]}></View>
            <View style={[style.Circle, {marginLeft: -12}]}></View>
          </View>
          <TouchableOpacity style={style.btn}>
            <Text style={style.Text}>New Conversation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => props.navigation.navigate('PreviousChat')}
            style={{
              margin: 15,
              padding: 10,
            }}>
            <Text style={{color: 'white'}}>See Previous</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  cahtHEader: {
    padding: 10,
    height: 80,
    width: wp('100%'),
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BackView: {
    position: 'relative',
    fontFamily: 'Montserrat-Bold',
    padding: 15,
    paddingLeft: 20,
    height: 250,
    width: wp('100%'),
    backgroundColor: '#35394A',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Light',
  },
  BOdy: {
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 10,
    marginTop: -130,
    height: 270,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(82, 100, 255, 0.9)',
    color: 'rgba(82, 104, 255, 0.9)',
  },
  CirclB: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 80,
    width: '100%',
    flexDirection: 'row',
  },
  Circle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'rgba(82, 100, 255, 0.9)',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    width: 250,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
  },
});
