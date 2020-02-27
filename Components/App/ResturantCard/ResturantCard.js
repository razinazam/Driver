import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MAterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import * as Actions from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
export default function ResturantCard() {
  const dispatch = useDispatch();
  const PopUpDetals = useSelector(
    state => state.DriverRecivePopup.PopUpDetails,
  );
  console.log('popup', PopUpDetals);

  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {PopUpDetals &&
          PopUpDetals.map((res, i) => {
            console.log(res.Order);
            return (
              <React.Fragment key={i}>
                <View style={style.CardB}>
                  <View style={style.CardFood}>
                    <TouchableOpacity style={{padding: 10}}>
                      <Image
                        style={{height: 60, width: 60, borderRadius: 100}}
                        source={{
                          uri:
                            'https://www.foodizza.com/' + res.Restaurant.Logo,
                        }}
                      />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', padding: 10}}>
                      <View
                        style={{
                          marginTop: 10,
                          height: 13,
                          width: 13,
                          backgroundColor: 'green',
                          borderRadius: 100,
                        }}></View>
                      <View style={{padding: 5}}>
                        <Text
                          style={{
                            color: '#ffff',
                            fontWeight: 'bold',
                            paddingLeft: 10,
                          }}>
                          Resturant Location
                        </Text>
                        <Text
                          style={{color: 'grey', paddingLeft: 10, width: 150}}>
                          {res.Restaurant.FullAddress}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={style.CardD}>
                    <Text style={style.Text}>{res.Restaurant.Name}</Text>
                    <View>
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
                  </View>
                  <View style={style.Bottom}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image
                        style={{height: 30, width: 30, borderRadius: 100}}
                        source={{
                          uri:
                            'https://www.foodizza.com/' +
                            res.Restaurant.ImageUrl,
                        }}
                      />
                      <Text style={{fontWeight: 'bold', color: 'white'}}>
                        {res.Customer.FirstName +
                          ' ' +
                          ' ' +
                          res.Customer.LastName}
                      </Text>
                    </View>
                    <View style={{justifyContent: 'flex-start'}}>
                      <Text style={{color: 'grey'}}>Time</Text>
                      <Text style={{fontWeight: 'bold', color: 'white'}}>
                        {res.Restaurant.Time}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(Actions.ResturantORderDetails(true, res));
                        dispatch(Actions.DriverRecivePopup(false));
                        dispatch(Actions.DriverGoingPickUp(res.Order.Id));
                      }}>
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
              </React.Fragment>
            );
          })}
      </View>
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
    width: '90%',
    backgroundColor: '#2E3344',
    borderRadius: 10,
    paddingBottom: 30,
  },
  CardFood: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  CardD: {
    marginTop: -40,
    paddingLeft: 10,
    width: '100%',
    borderBottomWidth: 2,
    padding: 5,
    borderBottomColor: 'grey',
  },
  Text: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
});
