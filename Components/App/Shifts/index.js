import React from 'react';
import {View, Text} from 'react-native';
import Calender from './Shift';
import Header from '../../Common/Header';
export default function index() {
  return (
    <React.Fragment>
      <Header name="Shift" />
      <Calender />
    </React.Fragment>
  );
}
