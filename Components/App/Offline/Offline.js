import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import OfflineHearder from './OfflineHeader';
import Offlinetimer from './DriverOfflineTIming';
export default function Offline() {
  return (
    <View>
      <OfflineHearder name="Go Offline" />
      <Offlinetimer />
    </View>
  );
}
