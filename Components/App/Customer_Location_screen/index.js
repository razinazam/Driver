import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import CircularTimer from 'react-native-circular-timer';
import {Icon, Fab} from 'native-base';
import Ant from 'react-native-vector-icons/AntDesign';
import Font from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
export default function index() {
  const [ShowFab, setShowfab] = useState(false);
  const Customer_Details = useSelector(state => console.log(state));
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={style.location}>
          <Text style={style.LocationText}>Customer Location</Text>
          <Text style={style.LocationText2}>
            13 D3 Near River Lake,Columbia
          </Text>
        </TouchableOpacity>
        <View style={style.name}>
          <Text style={style.nameText}>Angelina Rose</Text>
        </View>
      </View>
      <View style={style.Timer}>
        <CircularTimer
          circleColor={'#5860ff'}
          borderWidth={2}
          Minute={25}
          textStyle={{color: 'white', fontSize: 18, lineHeight: 17}}
          secondText={{fontSize: 10, color: 'white', lineHeight: 10}}
          radius={30}
          showSecond={false}
          seconds={60}
          borderColor={
            60 < 120 ? '#cb3837' : 10 * 60 < 300 ? '#FFCD3A' : '#00C642'
          }
        />
      </View>
      <View style={style.Fab}>
        <Fab
          active={ShowFab}
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: '#5067FF'}}
          position="bottomRight"
          onPress={() => setShowfab(!ShowFab)}>
          {ShowFab == false ? <Ant name="plus" /> : <Ant name="close" />}
          <Button style={{backgroundColor: '#2E3344', flexDirection: 'row'}}>
            {ShowFab == true ? (
              <Text
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 60,
                  padding: 5,
                  backgroundColor: '#2E3344',
                  color: 'white',
                }}>
                Go Offline
              </Text>
            ) : (
              <React.Fragment></React.Fragment>
            )}

            <View>
              <Font name="not-interested" size={20} color="white" />
            </View>
          </Button>
          <Button style={{backgroundColor: '#2E3344', flexDirection: 'row'}}>
            {ShowFab == true ? (
              <Text
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 60,
                  padding: 5,
                  backgroundColor: '#2E3344',
                  color: 'white',
                }}>
                Upcoming Task
              </Text>
            ) : (
              <React.Fragment></React.Fragment>
            )}

            <View>
              <Ant name="filetext1" size={20} color="white" />
            </View>
          </Button>
          <Button style={{backgroundColor: '#2E3344', flexDirection: 'row'}}>
            {ShowFab == true ? (
              <Text
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 60,
                  padding: 5,
                  backgroundColor: '#2E3344',
                  color: 'white',
                }}>
                Previous Actions
              </Text>
            ) : (
              <React.Fragment></React.Fragment>
            )}

            <View>
              <Entypo name="back-in-time" size={20} color="white" />
            </View>
          </Button>
        </Fab>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  Fab: {
    position: 'absolute',
    right: 0,
    bottom: 130,
  },
  Timer: {
    position: 'absolute',
    bottom: 150,
    left: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  location: {
    padding: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 600,
    // height: 100,
    width: '90%',
    backgroundColor: '#2E3344',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  LocationText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  LocationText2: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  name: {
    justifyContent: 'center',
    position: 'absolute',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 20,
    bottom: 35,
    width: '100%',
    height: 100,
    backgroundColor: 'blue',
    padding: 5,
  },
  nameText: {
    textAlign: 'center',
    width: 200,
    color: 'white',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
  },
});
