/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable prettier/prettier */
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';
import {Geojson} from 'react-native-maps';
const myPlace = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [64.165329, 48.844287],
      },
    },
  ],
};
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
  constructor(props) {
    super(props);
    this.map = null;
    this.camera = null;
    this.state = {
      coordinates: coordinates,
      user: [-95.712891, 37.09024],
      permission: false,
    };
    this.updateUser = this.updateUser.bind(this);
  }
  updateUser = () => {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          user: [position.coords.longitude, position.coords.latitude],
        });
      },
      error => Alert.alert(error.message),
    );
  };
  componentDidMount() {
    MapboxGL.setAccessToken(
      'pk.eyJ1IjoicmF6ZW56YW0iLCJhIjoiY2s1cGJ3eW5lMWR4NDNkcncza2N0cHM4MyJ9.uorMYq3Hlz98vshnmUVN6g',
    );
    MapboxGL.setTelemetryEnabled(false);
    const permission = MapboxGL.requestAndroidLocationPermissions();
    this.setState({
      permission,
    });
    try {
      this.updateUser();
    } catch (e) {
      Alert.alert(e);
    }
  }
  renderAnnotation(counter) {
    const id = `pointAnnotation${counter}`;
    const coordinate = this.state.coordinates[counter];
    return (
      <MapboxGL.PointAnnotation
        key={id}
        id={id}
        onSelected={() =>
          this.camera.setCamera({
            centerCoordinate: coordinate,
            zoomLevel: 16,
            animationDuration: 2000,
          })
        }
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
    console.log(myPlace);
    return (
      <View style={styles.page}>
        <MapboxGL.MapView
          zoomLevel={5}
          ref={c => (this.map = c)}
          userTrackingMode={1}
          style={styles.map}
          centerCoordinate={this.state.user}>
          <MapboxGL.Camera
            animationDuration={2000}
            ref={c => (this.camera = c)}
            animationMode={'flyTo'}
            centerCoordinate={this.state.user}
            zoomLevel={10}
          />
          {this.renderAnnotations()}
          <MapboxGL.UserLocation
            onPress={() =>
              this.camera.setCamera({
                centerCoordinate: this.state.user,
                zoomLevel: 16,
                animationDuration: 2000,
              })
            }
            animated={true}
          />
        </MapboxGL.MapView>
      </View>
    );
  }
}
