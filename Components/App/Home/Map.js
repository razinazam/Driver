// import React, {useState, useEffect} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Mapview, {
//   PROVIDER_GOOGLE,
//   Marker,
//   PROVIDER_DEFAULT,
// } from 'react-native-maps';
// // import {Marker} from 'react-native-maps';
// import {useSelector, useDispatch} from 'react-redux';
// import * as Actions from '../../../redux/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Geolocation from '@react-native-community/geolocation';
// import Mapbox from '@react-native-mapbox-gl/maps';
// // import img from '../../../assets/bike.png';
// Mapbox.setAccessToken(
//   'pk.eyJ1IjoicmF6ZW56YW0iLCJhIjoiY2s1cGJ3eW5lMWR4NDNkcncza2N0cHM4MyJ9.uorMYq3Hlz98vshnmUVN6g',
// );
// const Map = () => {
//   // const [Show, setShow] = useState(true);
//   const [lonLat, setLonLat] = useState(null);
//   const dispatch = useDispatch();
//   const Id = useSelector(state => state.Login.useDetails.Id);
//   const ShowOnlinebtn = useSelector(state => state.DriverOnline.online);
//   async function watchPosition() {
//     await Geolocation.getCurrentPosition(
//       position => {
//         setLonLat({
//           lat: position.coords.latitude,
//           long: position.coords.longitude,
//         });
//       },
//       error => Alert.alert(error.message),
//       {enableHighAccuracy: true, timeout: 50000},
//     );
//   }
//   // console.log(resturantlocation[0].Restaurant);
//   useEffect(() => {
//     watchPosition();
//   }, []);
//   return (
//     <React.Fragment>
//       <Mapbox.MapView
//         // ref ={c => (this._map = c)}
//         zoomLevel={14}
//         centerCoordinate={[31.582045, 74.329376]}
//         showUserLocation={true}>
//         <Mapbox.Camera zoomLevel={16} animationMode={'flyTo'}

//         ></Mapbox.Camera>
//       </Mapbox.MapView>
//       {/* <Mapview
//         // followsUserLocation={true}
//         region={{
//           latitude: 31.582045,
//           longitude: 74.329376,
//           longitudeDelta: 74.329376,
//           latitudeDelta: 31.582045,
//         }}
//         provider={PROVIDER_GOOGLE}
//         zoomEnabled={true}
//         style={{height: hp('100%'), width: wp('100%')}}>
//         <Marker
//           coordinate={{
//             latitude: 31.582045,
//             longitude: 74.329376,
//           }}>
//           <Icon name="map-marker" size={30} color="red" />
//         </Marker>
//         {lonLat !== null ? (
//           <Marker
//             coordinate={{
//               latitude: lonLat.lat,
//               longitude: lonLat.long,
//             }}>
//             <Icon name="map-marker" size={30} color="red" />
//           </Marker>
//         ) : (
//           <React.Fragment />
//         )}
//       </Mapview> */}
//       {ShowOnlinebtn !== true ? (
//         <View style={style.overlay}>
//           <TouchableOpacity
//             onPress={() => {
//               // setShow(false);
//               dispatch(Actions.DriverOnline(Id));
//             }}
//             style={style.Onlinebtn}>
//             <Text style={style.btnText}>Online</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <React.Fragment />
//       )}
//     </React.Fragment>
//   );
// };

// export default Map;

// const style = StyleSheet.create({
//   overlay: {
//     alignSelf: 'center',
//     bottom: 120,
//     position: 'absolute',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   Onlinebtn: {
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,

//     elevation: 10,
//     backgroundColor: 'blue',
//     borderRadius: 1000,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//     width: 150,
//   },
//   btnText: {
//     fontFamily: 'Montserrat-Bold',
//     color: 'white',
//   },
// });
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoicmF6ZW56YW0iLCJhIjoiY2s1cGJ3eW5lMWR4NDNkcncza2N0cHM4MyJ9.uorMYq3Hlz98vshnmUVN6g',
);

const styles = StyleSheet.create({
  page: {
    height: hp('100%'),
    width: wp('100%'),
  },
  map: {
    flex: 1,
  },
});
const coordinates = [
  [74.312544, 31.552298],
  [74.326277, 31.519086],
];

export default class App extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }
  constructor(props) {
    super(props);

    this.state = {
      coordinates: coordinates,
    };
  }

  renderAnnotation(counter) {
    const id = `pointAnnotation${counter}`;
    const coordinate = this.state.coordinates[counter];

    return (
      <MapboxGL.PointAnnotation
        key={id}
        id={id}
        title="Test"
        coordinate={coordinate}>
        <Icon name="map-marker" size={30} color="red" />
      </MapboxGL.PointAnnotation>
    );
  }

  renderAnnotations() {
    const items = [];

    for (let i = 0; i < this.state.coordinates.length; i++) {
      items.push(this.renderAnnotation(i));
    }

    return items;
  }

  render() {
    return (
      <View style={styles.page}>
        <MapboxGL.MapView
          zoomLevel={11}
          showUserLocation={true}
          userTrackingMode={1}
          ref={c => (this._map = c)}
          style={styles.map}
          centerCoordinate={this.state.coordinates[0]}>
          {this.renderAnnotations()}
          <MapboxGL.UserLocation animated={true} />
        </MapboxGL.MapView>
      </View>
    );
  }
}
