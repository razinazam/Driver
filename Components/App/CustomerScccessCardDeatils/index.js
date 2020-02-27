import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MAterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import CircularTimer from 'react-native-circular-timer';
import Feature from 'react-native-vector-icons/Feather';
import Modal, {ModalContent} from 'react-native-modals';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../../../redux/actions';
import ConfirmModal from './ConfirmDeleverd';
export default function indexs(props) {
  const dispatch = useDispatch();
  const DetailsShow = useSelector(state => state.SuccessCardDetails.Show);
  const Details = useSelector(state => state.SuccessCardDetails.Details);
  const [ConfirmPickUp, setConfirmPickUp] = useState([]);
  const [Connfirm, setConnfirm] = useState(false);
  const ShowCOnfirmorder = Show => {
    setConnfirm(Show);
  };
  return (
    <View>
      <View>
        {Details &&
          Details.map((res, k) => {
            return (
              <React.Fragment key={k}>
                <Modal
                  onSwipeOut={event => {
                    dispatch(Actions.SuccessCardDetails(false, res));
                    dispatch(Actions.SuccessCard(false, res));
                    dispatch(Actions.CustomerLocations(true, res));
                  }}
                  swipeDirection={['up', 'down']}
                  visible={DetailsShow}>
                  <View
                    style={{
                      alignItems: 'center',
                      width: wp('100%'),
                      backgroundColor: '#2E3344',
                    }}>
                    <View style={style.OrderDetailsH}>
                      <View style={style.Heading}>
                        <Image
                          style={{height: 60, width: 60, borderRadius: 100}}
                          source={{
                            uri:
                              'https://www.foodizza.com/' + res.Restaurant.Logo,
                          }}
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 20,
                          }}>
                          {res.Restaurant.Name}
                        </Text>
                      </View>
                      <View style={style.Heading}>
                        <CircularTimer
                          circleColor={'#5860ff'}
                          borderWidth={2}
                          Minute={25}
                          textStyle={{
                            color: 'white',
                            fontSize: 18,
                            lineHeight: 17,
                          }}
                          secondText={{
                            fontSize: 10,
                            color: 'white',
                            lineHeight: 10,
                          }}
                          radius={30}
                          showSecond={false}
                          seconds={60}
                          borderColor={
                            60 < 120
                              ? '#cb3837'
                              : 10 * 60 < 300
                              ? '#FFCD3A'
                              : '#00C642'
                          }
                        />
                        <View style={style.OrderNoBox}>
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{fontSize: 10, color: 'white'}}>
                              Order Id
                            </Text>
                            <Text style={{color: 'white'}}>
                              {' '}
                              {res.Order.Id}
                            </Text>
                          </View>
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{fontSize: 10, color: 'white'}}>
                              Order No.
                            </Text>
                            <Text style={{color: 'white'}}>
                              {res.Order.OrderNumber}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={style.OrderDetailsH2}>
                      <View style={style.Heading2}>
                        <MAterial name="account" size={55} color="white" />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 20,
                          }}>
                          {res.Customer.FirstName +
                            ' ' +
                            ' ' +
                            res.Customer.LastName}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            paddingLeft: 30,
                            fontSize: 17,
                            color: 'white',
                            fontFamily: 'Montserrat-Bold',
                          }}>
                          For instruction
                        </Text>
                        <View style={{marginLeft: 20, marginTop: 5}}>
                          <TouchableOpacity
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: 6,
                              width: 140,
                              backgroundColor: 'blue',
                              borderRadius: 100,
                            }}>
                            <Icon name="ios-call" size={20} color="white" />
                            <Text style={{paddingLeft: 5, color: 'white'}}>
                              {res.Customer.Mobile}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              marginTop: 10,
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: 6,
                              width: 140,
                              backgroundColor: 'blue',
                              borderRadius: 100,
                            }}>
                            <Feature
                              name="message-circle"
                              size={20}
                              color="white"
                            />
                            <Text style={{paddingLeft: 5, color: 'white'}}>
                              Message now
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={style.Collapse}>
                      <View>
                        <Text style={{color: 'white', textAlign: 'center'}}>
                          Order Details
                        </Text>
                        <View
                          style={{
                            marginTop: 10,
                            width: '100%',
                            flexDirection: 'row',
                          }}>
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              backgroundColor: 'blue',
                              borderRadius: 100,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{color: 'white'}}>1</Text>
                          </View>
                          <View style={{flexDirection: 'row', padding: 5}}>
                            <Text
                              style={{
                                letterSpacing: 3,
                                fontSize: 15,
                                color: 'white',
                              }}>
                              Framhouse........................
                            </Text>
                            <MAterial name="check" size={20} color="white" />
                          </View>
                        </View>
                        <View style={{paddingLeft: 30, padding: 5}}>
                          <Text style={style.CollapseText}>Thin Crust</Text>
                          <Text style={style.CollapseText}>Spicy</Text>
                          <Text style={style.CollapseText}>Paul Crisps</Text>
                        </View>
                        <View
                          style={{
                            marginTop: 10,
                            width: '100%',
                            flexDirection: 'row',
                          }}>
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              backgroundColor: 'blue',
                              borderRadius: 100,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{color: 'white'}}>1</Text>
                          </View>
                          <View style={{flexDirection: 'row', padding: 5}}>
                            <Text
                              style={{
                                letterSpacing: 3,
                                fontSize: 15,
                                color: 'white',
                              }}>
                              Framhouse........................
                            </Text>
                            <MAterial name="check" size={20} color="white" />
                          </View>
                        </View>
                        <View
                          style={{
                            marginTop: 10,
                            width: '100%',
                            flexDirection: 'row',
                          }}>
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              backgroundColor: 'blue',
                              borderRadius: 100,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{color: 'white'}}>1</Text>
                          </View>
                          <View style={{flexDirection: 'row', padding: 5}}>
                            <Text
                              style={{
                                letterSpacing: 3,
                                fontSize: 15,
                                color: 'white',
                              }}>
                              Framhouse........................
                            </Text>
                            <MAterial name="check" size={20} color="white" />
                          </View>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPressIn={() => {
                        ShowCOnfirmorder(true);
                        setConfirmPickUp([res]);
                      }}
                      style={style.btn}>
                      <Text style={style.btntext}>ORDER DELIVERED</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </React.Fragment>
            );
          })}
        {/* Timer */}
        {/* <Time /> */}
        {/*  */}
        <ConfirmModal
          ConfirmPickup={ConfirmPickUp}
          dispatch={dispatch}
          ConfirmOrder={Connfirm}
          close={ShowCOnfirmorder}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  btn: {
    marginTop: 15,
    padding: 10,
    backgroundColor: 'blue',
    width: 180,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btntext: {
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
  },
  Collapse: {
    marginTop: 30,
    height: 220,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#35394A',
  },
  OrderDetailsH: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#2E3344',
    justifyContent: 'space-around',
  },
  Heading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading2: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  OrderNoBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    height: 50,
    width: 130,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  OrderDetailsH2: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#2E3344',
    justifyContent: 'flex-start',
  },
  CollapseText: {
    color: 'lightgrey',
    fontFamily: 'RobotoMono-Light',
    fontSize: 10,
  },
});
