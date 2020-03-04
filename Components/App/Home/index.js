import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
} from 'react-native';
import Map from './Map';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PaymentModal from './PaymentModel';
import {withNavigation} from 'react-navigation';
import DriverOrderDetails from '../DriverDeleveryDetials.js';
import DriverPopuprecive from '../ResturantCard/ResturantCard';
import ResturantLocation from '../Resturant_Location_NAvigate/index';
import Successcard from '../CustomerSuccessCard/CustomerCard';
import SuccessCardDEtials from '../CustomerScccessCardDeatils';
import CustomerLocation from '../Customer_Location_screen';
function index(props) {
  const DriverPopup = useSelector(state => state.DriverRecivePopup.Show);
  const ResturantLocatio = useSelector(state => state.ResturantLocation.Show);
  const SuccessCard = useSelector(state => state.SuccessCard.Show);
  const Customer_Location = useSelector(state => state.CustomerLOcation.Show);
  return (
    <View>
      <Map />
      <PaymentModal />
      {DriverPopup === true ? <DriverPopuprecive /> : <React.Fragment />}
      <DriverOrderDetails />
      {ResturantLocatio === true ? <ResturantLocation /> : <React.Fragment />}
      {SuccessCard === true ? <Successcard /> : <React.Fragment />}
      <SuccessCardDEtials />
      {Customer_Location === true ? <CustomerLocation /> : <React.Fragment />}
    </View>
  );
}
export default withNavigation(index);
const style = StyleSheet.create({});
