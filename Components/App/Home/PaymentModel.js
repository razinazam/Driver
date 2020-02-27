import React from 'react';
import Modal, {SlideAnimation, ModalContent} from 'react-native-modals';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import * as Action from '../../../redux/actions';
import Slider from './PaymentSLiderContent';
export default function PaymentModel() {
  const ShowModal = useSelector(state => state.PaymentModal.Show);

  const DelverisData = useSelector(
    state => state.UpComignDeleveries.UpcomingDeleveries.Orders,
  );
  const DriverAcceptandRejectModal = useSelector(
    state => state.DriverAcceptandReject.Show,
  );
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <Modal
        // style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
        onSwipeOut={event => {
          dispatch(Action.paymentOpeModal(false));
        }}
        rounded={false}
        swipeDirection={['up', 'down']}
        visible={ShowModal}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }>
        {/* <TouchableOpacity style={style.Btn}>
          <Text>sdbkm</Text>
        </TouchableOpacity> */}
        <Slider
          dispatch={dispatch}
          Deleverisdata={DelverisData ? DelverisData : null}
          DriverAcceptandRejectModal={DriverAcceptandRejectModal}
        />
      </Modal>
    </View>
  );
}
const style = StyleSheet.create({
  Body: {
    backgroundColor: 'black',
    opacity: 0.5,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnB: {
    position: 'absolute',
    paddingTop: 390,
    width: '100%',
  },
  Btn: {
    marginTop: 350,
    zIndex: 1000,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
