import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MAterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import * as Actions from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
export default function ResturantCard() {
  const dispatch = useDispatch();
  const Data = useSelector(state => state.SuccessCard.data);
  return (
    <View>
      {Data &&
        Data.map((res, i) => {
          return (
            <React.Fragment key={i}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={style.CardB}>
                  <View style={style.CardFood}>
                    <View>
                      <TouchableOpacity style={{padding: 10, paddingLeft: 70}}>
                        <MAterial name="account" size={40} color="white" />
                        <View
                          style={{flexDirection: 'column', marginLeft: -40}}>
                          <Text style={style.Text}>
                            {' '}
                            {res.Customer.FirstName +
                              ' ' +
                              ' ' +
                              res.Customer.LastName}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <View style={style.Time}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            // paddingRight: 1,
                            // borderRightWidth: 1,
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 8,
                              fontFamily: 'RobotoMono-Light',
                            }}>
                            orderId
                          </Text>
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: 'bold',
                              fontFamily: 'RobotoMono-Bold',
                            }}>
                            {res.Order.Id}
                          </Text>
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 8,
                              fontFamily: 'RobotoMono-Light',
                            }}>
                            Order No.
                          </Text>
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: 'bold',
                              fontFamily: 'RobotoMono-Bold',
                            }}>
                            {res.Order.OrderNumber}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        marginLeft: -10,
                        justifyContent: 'flex-start',
                        paddingTop: 10,
                      }}>
                      {/* <Collapse style={{paddingTop: 10}}> */}
                      <View
                        style={{
                          paddingTop: 10,
                          flexDirection: 'row',
                          paddingRight: 10,
                        }}>
                        <View
                          style={{
                            height: 15,
                            width: 15,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100,
                          }}></View>
                        <Text
                          style={{
                            paddingLeft: 10,
                            color: 'white',
                            letterSpacing: 1,
                            paddingRight: 10,
                          }}>
                          Resturant Location
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: 'white',
                          paddingLeft: 20,
                          paddingRight: 30,
                          width: 200,
                          fontSize: 10,
                        }}>
                        {res.Restaurant.FullAddress}
                      </Text>
                      {/* </Collapse> */}
                      {/* <Collapse style={{paddingTop: 10}}>
                <CollapseHeader> */}
                      <View
                        style={{
                          paddingTop: 20,
                          flexDirection: 'row',
                          paddingRight: 10,
                        }}>
                        <View
                          style={{
                            height: 15,
                            width: 15,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100,
                          }}></View>
                        <Text
                          style={{
                            paddingLeft: 10,
                            color: 'white',
                            letterSpacing: 1,
                            paddingRight: 10,
                          }}>
                          Customer Location
                        </Text>
                      </View>
                      {/* </CollapseHeader> */}
                      {/* <CollapseBody> */}
                      <Text
                        style={{
                          color: 'white',
                          paddingLeft: 20,
                          paddingRight: 30,
                          width: 200,
                          fontSize: 10,
                        }}>
                        {res.Customer.AddressLine}
                      </Text>
                      {/* </CollapseBody>
              </Collapse> */}
                    </View>
                  </View>
                  <View style={style.CardD}>
                    <View>{/*  */}</View>
                  </View>
                  <View style={style.Bottom}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image
                        style={{height: 40, width: 40, borderRadius: 100}}
                        source={{
                          uri:
                            'https://www.foodizza.com/' + res.Restaurant.Logo,
                        }}
                      />
                      <Text style={{fontWeight: 'bold', color: 'white'}}>
                        {res.Restaurant.Name}
                      </Text>
                    </View>
                    <View style={{justifyContent: 'flex-start'}}>
                      <Text style={{color: 'grey'}}>Distance</Text>
                      <Text style={{fontWeight: 'bold', color: 'white'}}>
                        25 km
                      </Text>
                    </View>
                    <View style={{justifyContent: 'flex-start'}}>
                      <Text style={{color: 'grey'}}>Time</Text>
                      <Text style={{fontWeight: 'bold', color: 'white'}}>
                        25 min
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        dispatch(Actions.SuccessCardDetails(true, res))
                      }>
                      <View
                        style={{
                          height: 50,
                          width: 50,
                          backgroundColor: 'blue',
                          borderRadius: 100,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Ant name="right" size={30} color="white" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </React.Fragment>
          );
        })}
    </View>
  );
}
const style = StyleSheet.create({
  Bottom: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Time: {
    marginTop: -5,
    margin: 10,
    marginBottom: 30,
    marginLeft: 30,
    // marginTop: 10,
    padding: 5,
    height: 50,
    width: 130,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#35394A',
    justifyContent: 'space-between',
  },
  CardB: {
    position: 'absolute',
    bottom: 150,
    height: 250,
    width: '90%',
    borderWidth: 1,
    backgroundColor: 'green',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,

    elevation: 24,
  },
  CardFood: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CardD: {
    marginTop: -20,
    paddingLeft: 30,
    width: '100%',
    borderBottomWidth: 2,
    padding: 5,
    borderBottomColor: 'grey',
  },
  Text: {
    paddingRight: 20,
    fontSize: 20,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
});
