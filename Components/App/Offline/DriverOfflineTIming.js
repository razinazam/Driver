import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Materils from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../../redux/actions';
export default function DriverOfflineTIming() {
  const Id = useSelector(state => state.Login.useDetails.Id);
  const value = useSelector(state => state.DriverOnline.Switch);
  const dispatch = useDispatch();
  return (
    <View>
      <View>
        <View style={style.Offline}>
          <View style={style.b1}>
            <Materils name="account-off" size={30} color="blue" />
            <Text style={style.text}>Take me offline now</Text>
            <Switch
              value={value}
              onValueChange={val => dispatch(Actions.DriverOffline(Id, val))}
            />
          </View>
        </View>
        <View style={style.Automatic}>
          <View style={{padding: 10}}>
            <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
              <Text style={{fontSize: 15, padding: 10}}>AUTOMATIC OFFLINE</Text>
            </View>
          </View>
          <View style={style.Offline}>
            <View style={style.b1}>
              <Text style={style.text}>Take me offline After Queued order</Text>
              <Switch />
            </View>
          </View>
          <View style={style.Offline}>
            <View style={style.b1}>
              <Text style={style.text}>Take me offline At Specific Time</Text>
              <Switch />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  Offline: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    backgroundColor: 'white',
  },
  b1: {
    marginTop: 30,
    padding: 10,
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
  },
  Automatic: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
  },
});
