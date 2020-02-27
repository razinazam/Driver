import React, {useState} from 'react';
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
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
function Forgetpassword(props) {
  const [code, setcode] = useState('');
  return (
    <React.Fragment>
      <View style={style.main}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack('')}
          style={style.BackIcon}>
          <Icon name="chevron-thin-left" color="white" size={20} />
        </TouchableOpacity>
        <KeyboardAvoidingView behavior="padding">
          <View style={style.Login}>
            <Text style={style.LoginText}>Forgot</Text>
            <Text style={style.LoginText}>Password ?</Text>
            <Text style={style.LoginText2}>
              You'll shortly recieve a message with a code to set up a new new
              Password
            </Text>
          </View>

          <View style={{margin: 20}}>
            <View style={style.PInput}>
              <SmoothPinCodeInput
                cellStyle={{
                  borderBottomWidth: 2,
                  borderColor: 'gray',
                  backgroundColor: 'white',
                  color: 'black',
                }}
                cellStyleFocused={{
                  borderColor: 'black',
                }}
                cellSize={50}
                codeLength={4}
                value={code}
                onTextChange={code => setcode(code)}
              />
              {/* <TextInput autoCompleteType="email" placeholderTextColor="white" placeholder="New Password" style={style.Input} />

                   <TextInput placeholderTextColor="white"  placeholder="Confirm Password" style={style.Input} />  */}
            </View>
          </View>
          <View style={style.PBtn}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ResetPassword')}
              style={style.btn}>
              <Text style={style.btnTExt}>Send</Text>
            </TouchableOpacity>
          </View>
          <View style={style.NewAccPText}>
            <TouchableOpacity>
              <Text style={style.Text}>Resend confirmation code [1:02] </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </React.Fragment>
  );
}

export default Forgetpassword;

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
  LoginText2: {
    fontFamily: 'RobotoMono-Light',
    color: 'white',
    width: '80%',
    paddingTop: 10,
  },
  PInput: {
    justifyContent: 'center',
    alignItems: 'center',
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
    fontWeight: 'bold',
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
    fontFamily: 'RobotoMono-Light',
    fontWeight: 'bold',
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
  },
});
