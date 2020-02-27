import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {withNavigation} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';
import {useDispatch, useSelector} from 'react-redux';
import * as Action from '../../redux/actions';
function Header(props) {
  const dispatch = useDispatch();
  const Id = useSelector(state => state.Login.useDetails.Id);
  return (
    <View>
      <View style={style.HeaderB}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }>
          <Entypo name="menu" color="grey" size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(Action.paymentOpeModal(true));
            dispatch(Action.UpComingnDeleveris(Id));
          }}
          style={style.Headerbtn}>
          <Text style={style.Btntext}>{props.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('DriverChat')}>
          <Feather name="message-square" color="grey" size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default withNavigation(Header);
const style = StyleSheet.create({
  HeaderB: {
    paddingTop: 10,
    padding: 10,
    width: wp('100%'),
    backgroundColor: '#35394A',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Headerbtn: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 150,
    backgroundColor: 'blue',
  },
  Btntext: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
  },
});
