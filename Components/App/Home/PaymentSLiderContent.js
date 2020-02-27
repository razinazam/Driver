import React, {useState} from 'react';
import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
//Slider
import SwiperFlatList from 'react-native-swiper-flatlist';
//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Tabs
import TodayTab from './Tabs/Today';
import Week from './Tabs/Weak';
import Month from './Tabs/Month';
import DriverAcceptandRejectModal from './DriverAcceptandReject';
import Custom from './Tabs/Custom';
import * as Actions from '../../../redux/actions';
function PaymentSlider(props) {
  const [ActiveTab, setActiveTab] = useState('Today');
  let Tabs = ['Today', 'Week', 'Month', 'Custom'];
  const [AccpetandReject, setAccpetandReject] = useState([]);
  const [Delevery, setDelevery] = useState([
    {
      BtnText: 'remaning mon 01',
      Text: 'Food is done',
      date: '19/20/19',
    },
    {
      BtnText: 'remaning mon 01',
      Text: 'Food is done',
      date: '19/20/19',
    },
    {
      BtnText: 'remaning mon 01',
      Text: 'Food is done',
      date: '19/20/19',
    },
  ]);

  return (
    <View
      style={{
        height: 400,
      }}>
      <SwiperFlatList
        //   autoplay
        //   autoplayLoop
        //   index={2}
        paginationStyle={{marginTop: 0}}
        paginationStyleItem={{width: 8, height: 8}}
        showPagination>
        <View style={[styles.child, {backgroundColor: '#2E3344'}]}>
          <ScrollView>
            <View style={styles.HeadingP}>
              <Text style={styles.HeadingText1}>Pending Payment</Text>
              <Text style={styles.HeadingText2}>$12</Text>
            </View>
            <View style={styles.Tabs}>
              {Tabs.map((res, i) => {
                return (
                  <React.Fragment key={i}>
                    <TouchableOpacity onPressIn={() => setActiveTab(res)}>
                      <Text
                        style={{
                          padding: 8,
                          color: ActiveTab === res ? 'blue' : 'white',
                          borderBottomColor:
                            ActiveTab === res ? 'blue' : 'black',
                          borderBottomWidth: ActiveTab === res ? 1 : 0.1,
                        }}>
                        {res}
                      </Text>
                    </TouchableOpacity>
                  </React.Fragment>
                );
              })}
            </View>
            {ActiveTab === 'Today' ? (
              <TodayTab />
            ) : ActiveTab === 'Week' ? (
              <Week />
            ) : ActiveTab === 'Month' ? (
              <Month />
            ) : ActiveTab === 'Custom' ? (
              <Custom />
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </ScrollView>
        </View>
        <View style={[styles.child, {backgroundColor: '#2E3344'}]}>
          <View style={styles.HeadingSlide2}>
            <Text style={styles.HeadingSlide2Text}>Upcoming Deliveries</Text>
          </View>
          <ScrollView>
            <View style={{padding: 10}}>
              {props.Deleverisdata &&
                props.Deleverisdata.map((v, i) => {
                  return (
                    <React.Fragment key={i}>
                      <View style={styles.Delevery}>
                        <TouchableOpacity
                          onPressIn={() => {
                            props.dispatch(Actions.DriverAcceptandReject(true));
                            setAccpetandReject([v]);
                            // props.dispatch(Actions.DriverRecivePopup(true, v));
                            // props.dispatch(Actions.paymentOpeModal(false));
                          }}
                          style={styles.Btn}>
                          <Text style={styles.BtnText}>01 min</Text>
                        </TouchableOpacity>
                        <Text style={styles.Slide2Text}>{v.Order.Id}</Text>
                        <TouchableOpacity style={{paddingRight: 10}}>
                          <MaterialCommunityIcons
                            name="motorbike"
                            size={35}
                            color="white"
                          />
                        </TouchableOpacity>
                      </View>
                    </React.Fragment>
                  );
                })}
              <DriverAcceptandRejectModal
                AcceptandReject={AccpetandReject}
                dispatch={props.dispatch}
                DriverAcceptandRejectModal={props.DriverAcceptandRejectModal}
              />
            </View>
          </ScrollView>
        </View>
      </SwiperFlatList>
      {/* <View style={styles.Test}>
      </View> */}
      {/* <TouchableOpacity style={styles.BottomBtn}>
        <Text>dsbjvnskjbn</Text>
      </TouchableOpacity> */}
    </View>
  );
}
export default PaymentSlider;

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  // Test: {
  //   position: 'absolute',
  //   top: 390,
  // },
  // BottomBtn: {
  //   width: '100%',
  //   backgroundColor: 'blue',
  //   marginTop: 100,
  // },
  child: {
    backgroundColor: 'black',
    height: height * 0.7,
    width,
    paddingBottom: 200,
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
  HeadingP: {
    backgroundColor: '#2E3344',
    padding: 5,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  HeadingText1: {
    padding: 10,
    fontSize: 16,
    width: '50%',
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    borderRightWidth: 1,
  },
  HeadingText2: {
    padding: 10,
    paddingRight: 30,
    fontSize: 16,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  Tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  HeadingSlide2: {
    backgroundColor: '#2E3344',
    padding: 5,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadingSlide2Text: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  Delevery: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: 'white',
    borderTopWidth: 1,
    paddingBottom: 30,
  },
  Btn: {
    backgroundColor: 'blue',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnText: {
    color: 'white',
  },
  Slide2Text: {
    paddingTop: 10,
    paddingLeft: 80,
    color: 'white',
    width: '50%',
  },
});
