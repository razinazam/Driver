import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import * as Actions from '../..//redux/actions';
function SignIn(props) {
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
    defaultValues: {},
  });
  const val = watch();
  const Login = async () => {
    if (
      getValues().Email !== '' &&
      getValues().Email !== undefined &&
      getValues().Password !== '' &&
      getValues().Password !== undefined
    ) {
      let val = await dispatch(Actions.Login(getValues()));
      console.log(val);

      if (val === true) {
        props.navigation.navigate('Home');
        dispatch(Actions.Login(getValues()));
      }
    } else {
      alert('Empty Email or Password!');
    }
  };
  return (
    <React.Fragment>
      <View style={style.main}>
        <KeyboardAvoidingView behavior="padding">
          <View style={style.Login}>
            <Text style={style.LoginText}>Login In</Text>
          </View>

          <View style={{margin: 20}}>
            <View style={style.PInput}>
              <TextInput
                autoCompleteType="email"
                placeholderTextColor="white"
                Email
                placeholder="Your Email or Phone"
                ref={register({name: 'Email'}, {required: true})}
                onChangeText={text => setValue('Email', text, true)}
                value={val.Email}
                style={style.Input}
              />

              <TextInput
                placeholderTextColor="white"
                placeholder="Password"
                ref={register({name: 'Password'}, {required: true})}
                onChangeText={text => setValue('Password', text, true)}
                value={val.Password}
                style={style.Input}
              />
            </View>
          </View>
          <View style={style.NewAccFText}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ForgetPasswordByEmail')
              }>
              <Text style={style.FText}>Forget Password ?</Text>
            </TouchableOpacity>
          </View>
          <View style={style.PBtn}>
            <TouchableOpacity
              onPress={() => {
                Login();
              }}
              style={style.btn}>
              <Text style={style.btnTExt}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={style.NewAccPText}>
            <TouchableOpacity>
              <Text style={style.Text}>Dont Have an account? Sign Up </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </React.Fragment>
  );
}

export default SignIn;

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
});
