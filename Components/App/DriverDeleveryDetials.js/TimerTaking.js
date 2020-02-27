import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal, {ModalContent} from 'react-native-modals';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
export default function TimerTaking(props) {
  return (
    <View>
      <Modal
        visible={true}
        swipeDirection={['up', 'down']} // can be string or an array
        swipeThreshold={200} // default 100
        // onSwipeOut={event => {
        //   this.setState({visible: true});
        // }}
      >
        <View style={style.Timer}>
          <View style={style.Heading}>
            <Icon name="md-time" size={35} color="white" />
            <Text style={style.Text}>Time Over !</Text>
          </View>
          <View style={style.HText}>
            <Text style={style.BText}>
              Please select the estimated time for time extend{' '}
            </Text>
          </View>
          <View style={style.Btns}>
            <View style={style.Btnb}>
              <TouchableOpacity style={style.btn}>
                <Text style={style.BtnTExt}>5 min</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.btn}>
                <Text style={style.BtnTExt}>5 min</Text>
              </TouchableOpacity>
            </View>
            <View style={style.Btnb}>
              <TouchableOpacity style={style.btn}>
                <Text style={style.BtnTExt}>5 min</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.btn}>
                <Text style={style.BtnTExt}>5 min</Text>
              </TouchableOpacity>
            </View>
            <View style={style.Btnb}>
              <TouchableOpacity style={style.btn}>
                <Text style={style.BtnTExt}>5 min</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.btn}>
                <Text style={style.BtnTExt}>5 min</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const style = StyleSheet.create({
  Timer: {
    alignItems: 'center',
    height: 350,
    width: wp('90%'),
    backgroundColor: '#35394A',
  },
  Heading: {
    marginLeft: -10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: wp('100%'),
    backgroundColor: 'blue',
  },
  Text: {
    fontSize: 18,
    paddingLeft: 10,
    color: 'white',
  },
  HText: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '90%',
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  BText: {
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },
  Btns: {
    height: '100%',
    width: '100%',
  },
  Btnb: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 130,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
  BtnTExt: {
    fontWeight: 'bold',
    color: 'white',
  },
});
