import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import * as Actions from '../../redux/actions';
function ForgetpasswordByEmail(props) {
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const ResetByEmail = () => {
    if (email !== '' && email !== undefined) {
      dispatch(Actions.ForgetpassByEmail(email));
      props.navigation.navigate('ForgetPasswordPin');
    } else {
      alert('email is Empty');
    }
  };
  return (
    <React.Fragment>
      <View style={style.main}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack('')}
          style={style.BackIcon}>
          <Icon
            style={{paddingTop: 8}}
            name="chevron-thin-left"
            color="white"
            size={25}
          />
          <Text style={style.GObackText}>GO back</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView behavior="padding">
          <View style={style.Login}>
            <Text style={style.LoginText}>Forgot Password</Text>
          </View>

          <View style={{margin: 20}}>
            <View style={style.PInput}>
              <TextInput
                onChangeText={text => setemail(text)}
                autoCompleteType="email"
                placeholderTextColor="white"
                placeholder="Email Id"
                style={style.Input}
              />
            </View>
          </View>
          <View style={style.PBtn}>
            <TouchableOpacity
              onPress={() => {
                ResetByEmail();
              }}
              style={style.btn}>
              <Text style={style.btnTExt}>Continue</Text>
            </TouchableOpacity>
          </View>
          <View style={style.NewAccPText}>
            <TouchableOpacity>
              <Text style={style.Text}>Dont have an account ? Signin </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </React.Fragment>
  );
}

export default ForgetpasswordByEmail;

const style = StyleSheet.create({
  main: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#2E3344',
  },
  Login: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  LoginText: {
    fontSize: 30,
    color: 'white',
    // width:"3%",
    fontFamily: 'Montserrat-Bold',
  },
  PInput: {
    padding: 15,
    // height:100,
    width: '100%',
    // backgroundColor:"grey"
  },
  Input: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    color: 'white',
  },
  btn: {
    borderRadius: 50,
    padding: 14,
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
  PBtn: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection:"column",
    padding: 10,
  },
  NewAccPText: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: 'white',
  },
  FText: {
    color: 'white',
    fontSize: 10,
  },
  NewAccFText: {
    marginRight: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  BackIcon: {
    padding: 20,
    flexDirection: 'row',
  },
  GObackText: {
    paddingTop: 8,
    paddingLeft: 17,
    color: 'white',
    fontSize: 15,
  },
});
