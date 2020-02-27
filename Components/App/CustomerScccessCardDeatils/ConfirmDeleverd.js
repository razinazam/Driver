import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal, {ModalContent} from 'react-native-modals';
import Ant from 'react-native-vector-icons/AntDesign';
import * as Actions from '../../../redux/actions';

export default function ConfirmOrder(props) {
  return (
    <View>
      <Modal
        visible={props.ConfirmOrder}
        swipeDirection={['left', 'right']} // can be string or an array
        swipeThreshold={200} // default 100
        modalStyle={{overflow: 'visible'}}
        onSwipeOut={event => {
          props.close(false);
        }}>
        {props.ConfirmPickup &&
          props.ConfirmPickup.map((res, k) => {
            return (
              <React.Fragment key={k}>
                <View style={style.ConfirmB}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={style.Circle}>
                      <Ant name="check" size={40} color="white" />
                    </View>
                  </View>
                  <View style={{marginTop: 50}}>
                    <Text style={style.Text1}>Confirm Delivery</Text>
                    <Text style={style.Text2}>
                      Are you sure the order is Delevered?
                    </Text>
                  </View>
                  <View style={style.BtnsB}>
                    <TouchableOpacity
                      onPressIn={() => props.close(false)}
                      style={{
                        padding: 10,
                        borderRightWidth: 1,
                        borderRightColor: 'grey',
                      }}>
                      <Text style={style.Btn}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPressIn={() => {
                        props.close(false);
                        props.dispatch(Actions.SuccessCardDetails(false, res));
                        props.dispatch(Actions.DriverDelevered(res.Order.Id));
                      }}
                      style={{padding: 10}}>
                      <Text style={style.Btn}>Confirm</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </React.Fragment>
            );
          })}
      </Modal>
    </View>
  );
}
const style = StyleSheet.create({
  BtnsB: {
    paddingLeft: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    marginTop: 20,
    height: 80,
    width: '100%',
    alignItems: 'center',
  },
  Btn: {
    paddingRight: 40,
    fontFamily: 'RobotoMono-Light',
    fontSize: 15,
    color: 'white',
  },
  Circle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: 80,
    width: 80,
    top: -50,
    zIndex: 1000,
    backgroundColor: 'green',
    borderRadius: 100,
  },
  Text1: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    textAlign: 'center',
  },
  Text2: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    color: 'grey',
  },
  ConfirmB: {
    overflow: 'visible',
    height: 200,
    width: 350,
    backgroundColor: '#2E3344',
  },
});
