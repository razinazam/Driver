import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
export default function Today() {
  return (
    <View>
      <ScrollView>
        <View style={style.TabB}>
          <Text style={style.Tabtext}>From</Text>
          <Text style={style.Tabtext}>19/20/21</Text>
        </View>
        <View style={style.TabB}>
          <Text style={style.Tabtext}>From</Text>
          <Text style={style.Tabtext}>19/20/21</Text>
        </View>
        <View style={style.TabB}>
          <Text style={style.Tabtext}>From</Text>
          <Text style={style.Tabtext}>19/20/21</Text>
        </View>
        <View style={style.TabB}>
          <Text style={style.Tabtext}>From</Text>
          <Text style={style.Tabtext}>19/20/21</Text>
        </View>
        <View style={style.TabB}>
          <Text style={style.Tabtext}>From</Text>
          <Text style={style.Tabtext}>19/20/21</Text>
        </View>
        <View style={style.TabB}>
          <Text style={style.Tabtext}>From</Text>
          <Text style={style.Tabtext}>19/20/21</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  TabB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    padding: 13,
  },
  Tabtext: {
    color: 'white',
    fontFamily: 'RobotoMono-Light',
  },
});
