import React from 'react';
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withNavigation} from 'react-navigation';
import {useDispatch} from 'react-redux';
import * as Actions from '../../redux/actions';
function Main(props) {
  const dispatch = useDispatch();
  AsyncStorage.getItem('Token').then(res => {
    if (res !== null) {
      props.navigation.navigate('Home');
      dispatch(Actions.Login());
    }
  });
  return (
    <React.Fragment>
      <View style={style.main}>
        <View style={style.Logo}>
          <Image
            style={style.LogoIMG}
            resizeMethod="resize"
            resizeMode="center"
            source={require('../../assets/Reality+tv+Spain.png')}
          />
        </View>
        <View style={style.PText}>
          <Text style={style.Text}>Welcome to DeliviGo</Text>
        </View>
        <View style={style.PBtn}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SignIn')}
            style={style.btnOne}>
            <Text style={style.btnTExt}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SignUp')}
            style={style.btnTwo}>
            <Text style={style.btnTwoTExt}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
}

export default withNavigation(Main);

const style = StyleSheet.create({
  main: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#2E3344',
  },
  Logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  LogoIMG: {
    height: 100,
    width: 200,
  },
  PText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  Text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: 'white',
  },
  PBtn: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection:"column",
    padding: 10,
  },
  btnOne: {
    borderRadius: 50,
    padding: 10,
    width: '70%',
    backgroundColor: '#575dec',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btnTExt: {
    color: 'white',
    fontFamily: 'RobotoMono-Light',
  },
  btnTwo: {
    marginTop: 40,
    borderRadius: 50,
    padding: 10,
    width: '70%',
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btnTwoTExt: {
    color: '#575dec',
    fontFamily: 'RobotoMono-Light',
  },
});
