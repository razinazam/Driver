import React, {useEffect} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import Appc from './Navigation';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from './redux/actions';
const App = () => {
  const dispatch = useDispatch();
  const Id = useSelector(state => state.Login.useDetails.Id);
  useEffect(() => {
    AsyncStorage.getItem('UserDetails').then(res => {
      if (res) {
        dispatch(Actions.tokenVerify(JSON.parse(res)));
      }
    });
    // dispatch(Actions.UpComingnDeleveris(Id));
  }, []);
  return (
    <React.Fragment>
      {/* <Text>dsjvnjn</Text> */}
      <Appc />
    </React.Fragment>
  );
};

export default App;
