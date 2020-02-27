import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from 'react-navigation';
function CustomDrawer(props) {
  return (
    <View>
      <View style={style.DrawerB}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}
          style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              paddingRight: 20,
            }}>
            x
          </Text>
        </TouchableOpacity>
        <View style={style.logo}>
          <Image
            style={style.LogoImg}
            resizeMode="center"
            resizeMethod="resize"
            source={require('../../../assets/Reality+tv+Spain.png')}
          />
        </View>
        <View style={style.ProfileB}>
          <View style={style.ProfileImgB}>
            <Image
              style={style.ProImg}
              resizeMethod="resize"
              resizeMode="center"
              source={require('../../../assets/Avatar.png')}
            />
          </View>
          <Text style={style.Text}>John Doe</Text>
          <Text style={style.Text}>JohnDoe@gmal.com</Text>
        </View>
        <View style={{padding: 15, height: 340}}>
          <ScrollView>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Shifts')}
              style={style.List}>
              <Antdesign name="cloud" size={30} color="white" />
              <Text style={style.ListText}>Shifts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.List}>
              <Antdesign name="home" size={30} color="white" />
              <Text style={style.ListText}>Stats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.List}>
              <Antdesign name="questioncircle" size={30} color="white" />
              <Text style={style.ListText}>Support</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Profile')}
              style={style.List}>
              <Antdesign name="setting" size={30} color="white" />
              <Text style={style.ListText}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.List}>
              <Material name="people-outline" size={30} color="white" />
              <Text style={style.ListText}>Batch</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Offline')}
              style={style.Offline}>
              <View style={style.Circle}></View>
              <Text style={style.OfflineText}>Offline</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
export default withNavigation(CustomDrawer);
const style = StyleSheet.create({
  Circle: {
    marginTop: 5,
    height: 10,
    width: 10,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  Offline: {
    marginTop: 20,
    paddingTop: 20,
    padding: 15,
    flexDirection: 'row',
    borderBottomColor: 'white',
  },
  OfflineText: {
    color: 'white',
    paddingLeft: 50,
  },
  List: {
    paddingTop: 20,
    padding: 15,
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  ListText: {
    color: 'white',
    padding: 5,
    paddingLeft: 50,
  },
  Text: {
    padding: 5,
    paddingLeft: 10,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  ProImg: {
    height: 100,
    width: 100,
  },
  ProfileImgB: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: 'grey',
  },
  ProfileB: {
    padding: 10,
    height: 200,
    width: '100%',
    backgroundColor: '#35394A',
  },
  DrawerB: {
    height: '100%',
    width: '100%',
    backgroundColor: '#2E3344',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoImg: {
    height: 100,
    width: 200,
  },
});
