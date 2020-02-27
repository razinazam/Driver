import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Mapview, {
  PROVIDER_GOOGLE,
  MapViewAnimated,
  Marker,
} from 'react-native-maps';
// import {Marker} from 'react-native-maps';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../../../redux/actions';
import img from '../../../assets/bike.png';
const Map = () => {
  const [Show, setShow] = useState(true);
  const dispatch = useDispatch();
  const Id = useSelector(state => state.Login.useDetails.Id);
  const ShowOnlinebtn = useSelector(state => state.DriverOnline.online);
  const resturantlocation = useSelector(
    state => state.RsturantorderDetail.ResturantOrderDetails,
  );

  console.log(ShowOnlinebtn);
  // console.log(resturantlocation[0].Restaurant);
  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <Mapview
        provider={PROVIDER_GOOGLE}
        zoomEnabled={true}
        // mapType={Platform.OS == 'android' ? 'none' : 'standard'}
        style={{height: hp('100%'), width: wp('100%')}}>
        <Marker
          coordinate={{
            latitude: 20,
            // resturantlocation !== undefined
            //   ? resturantlocation[0].Restaurant.Latitude
            //   : 20,
            longitude: 20,
            // resturantlocation !== undefined
            //   ? resturantlocation[0].Restaurant.Latitude
            //   : 20,
          }}>
          <Text>123</Text>
        </Marker>
      </Mapview>
      {ShowOnlinebtn !== true ? (
        <View style={style.overlay}>
          <TouchableOpacity
            onPress={() => {
              setShow(false);
              dispatch(Actions.DriverOnline(Id));
            }}
            style={style.Onlinebtn}>
            <Text style={style.btnText}>Online</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Map;

const style = StyleSheet.create({
  overlay: {
    alignSelf: 'center',
    bottom: 120,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Onlinebtn: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    backgroundColor: 'blue',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 150,
  },
  btnText: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
  },
});
