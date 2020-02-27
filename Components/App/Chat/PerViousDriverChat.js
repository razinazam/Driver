import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
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
      <View>
        <View style={style.cahtHEader}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ant name="left" size={40} />
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                paddingRight: 120,
                fontSize: 20,
                fontWeight: 'bold',
                padding: 10,
              }}>
              DeliviGO Partner
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  cahtHEader: {
    padding: 10,
    height: 200,
    width: wp('100%'),
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
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
    marginTop: 30,
    height: 270,
    width: '100%',
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
