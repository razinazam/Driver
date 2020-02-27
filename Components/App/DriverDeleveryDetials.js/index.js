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
import CircularTimer from 'react-native-circular-timer';
import Modal, {ModalContent} from 'react-native-modals';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../../../redux/actions';
//Modas confirmOrder & TIme
import ConfirmModal from './ConfirmOrder';
import Time from './TimerTaking';
export default function index(props) {
  const [Connfirm, setConnfirm] = useState(false);
  const [ConfirmPickUp, setConfirmPickUp] = useState([]);
  const dispatch = useDispatch();
  const DetailsShow = useSelector(state => state.RsturantorderDetail.Show);

  const Details = useSelector(
    state => state.RsturantorderDetail.ResturantOrderDetails,
  );

  const ShowCOnfirmorder = Show => {
    setConnfirm(Show);
  };
  console.log(DetailsShow);

  return (
    <View>
      <View>
        {Details &&
          Details.map((v, k) => {
            console.log('map', v);
            return (
              <Modal
                onSwipeOut={event => {
                  dispatch(Actions.ResturantORderDetails(false, v));
                  dispatch(Actions.ResturantLOcation(true, v));
                }}
                swipeDirection={['up', 'down']}
                visible={DetailsShow}>
                <React.Fragment key={k}>
                  <View
                    style={{
                      alignItems: 'center',
                      height: 570,
                      width: wp('100%'),
                      backgroundColor: '#2E3344',
                    }}>
                    <View style={style.OrderDetailsH}>
                      <View style={style.Heading}>
                        <Image
                          style={{height: 60, width: 60, borderRadius: 100}}
                          source={{
                            uri:
                              'https://www.foodizza.com/' + v.Restaurant.Logo,
                          }}
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 20,
                          }}>
                          {v.Restaurant.Name}
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
                            <Text style={{color: 'white'}}> {v.Order.Id}</Text>
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
                              {v.Order.OrderNumber}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={style.OrderDetailsH2}>
                      <View style={style.Heading2}>
                        <Image
                          style={{height: 30, width: 30, borderRadius: 100}}
                          source={{
                            uri:
                              'https://www.foodizza.com/' +
                              v.Restaurant.ImageUrl,
                          }}
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 20,
                          }}>
                          {v.Customer.FirstName +
                            ' ' +
                            ' ' +
                            v.Customer.LastName}
                        </Text>
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
                        setConfirmPickUp([v]);
                      }}
                      style={style.btn}>
                      <Text style={style.btntext}>Confirm PickUp</Text>
                    </TouchableOpacity>
                  </View>
                </React.Fragment>
              </Modal>
            );
          })}
        <ConfirmModal
          ConfirmPickup={ConfirmPickUp}
          dispatch={dispatch}
          ConfirmOrder={Connfirm}
          close={ShowCOnfirmorder}
        />
        {/* Timer */}
        {/* <Time /> */}
        {/*  */}
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
