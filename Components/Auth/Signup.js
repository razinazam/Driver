import React from 'react';
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
import {useDispatch} from 'react-redux';
import * as Actions from '../../redux/actions';
import {useForm} from 'react-hook-form';
function SignUp(props) {
  let dispatch = useDispatch();
  const {
    register,
    setValue,
    getValues,
    reset,
    watch,
    errors,
    setError,
  } = useForm({
    mode: 'onBlur',
    defaultValues: state,
  });
  const state = {
    Yourname: '',
    PhoneNumber: '',
    EmailId: '',
    City: '',
    password: '',
  };
  const val = watch();
  // console.log('dsv', reset({}));

  return (
    <React.Fragment>
      <View style={style.main}>
        <KeyboardAvoidingView behavior="padding">
          <View style={style.Login}>
            <Text style={style.LoginText}>SignUp / Register</Text>
          </View>

          <View style={{margin: 20}}>
            <View style={style.PInput}>
              <TextInput
                placeholderTextColor="white"
                placeholder="Your name"
                ref={register({name: 'Yourname'}, {required: true})}
                onChangeText={text => setValue('Yourname', text, true)}
                style={style.Input}
                value={val.Yourname}
              />
              <View style={style.SignUpInputP}>
                <TextInput
                  placeholderTextColor="white"
                  placeholder="Phone Number"
                  ref={register({name: 'PhoneNumber'}, {required: true})}
                  onChangeText={text => setValue('PhoneNumber', text, true)}
                  style={style.Input1}
                  value={val.PhoneNumber}
                />
                <TextInput
                  autoCompleteType="email"
                  placeholderTextColor="white"
                  placeholder="Email ID"
                  ref={register({name: 'EmailId'}, {required: true})}
                  onChangeText={text => setValue('EmailId', text, true)}
                  style={style.Input2}
                  value={val.EmailId}
                />
              </View>
              <TextInput
                placeholderTextColor="white"
                placeholder="City / Country"
                ref={register({name: 'City'}, {required: true})}
                onChangeText={text => setValue('City', text, true)}
                style={style.Input}
                value={val.City}
              />
              <TextInput
                placeholderTextColor="white"
                placeholder="Password"
                ref={register({name: 'password'}, {required: true})}
                onChangeText={text => setValue('password', text, true)}
                style={style.Input}
                value={val.password}
              />
            </View>
          </View>
          <View style={style.NewAccFText}></View>
          <View style={style.PBtn}>
            <TouchableOpacity
              onPress={() => {
                dispatch(Actions.SignUp(getValues()));
                props.navigation.navigate('SignIn');
              }}
              style={style.btn}>
              <Text style={style.btnTExt}>SignIn</Text>
            </TouchableOpacity>
          </View>
          <View style={style.NewAccPText}>
            <TouchableOpacity>
              <Text style={style.Text}>Dont Have an account? Sign In </Text>
            </TouchableOpacity>
          </View>
          <View style={style.Line}></View>
          <View style={style.PBtn}>
            <TouchableOpacity style={style.btnFacebook}>
              <Text style={style.btnFacebooktext}>SignIn with facebook</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </React.Fragment>
  );
}

export default SignUp;

const style = StyleSheet.create({
  main: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#2E3344',
  },
  Login: {
    padding: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  LoginText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  PInput: {
    padding: 15,
    // height:100,
    width: '100%',
    backgroundColor: 'grey',
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
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btnTExt: {
    color: 'grey',
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
  SignUpInputP: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('85%'),
  },
  Input1: {
    borderBottomWidth: 2,
    width: wp('40%'),
    color: 'white',
    borderBottomColor: 'white',
  },
  Input2: {
    borderBottomWidth: 2,
    width: wp('40%'),
    color: 'white',
    borderBottomColor: 'white',
  },
  Line: {
    marginTop: 20,
    alignSelf: 'center',
    height: 1,
    width: '80%',
    backgroundColor: 'white',
  },
  btnFacebook: {
    borderRadius: 50,
    padding: 14,
    width: '70%',
    backgroundColor: '#4267B2',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btnFacebooktext: {
    color: 'white',
  },
});
