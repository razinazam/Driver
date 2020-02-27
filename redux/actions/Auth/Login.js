import Axios from 'axios';
import * as Constants from '../../constants';
import {AsyncStorage, Alert} from 'react-native';
export const Login = obj => {
  console.log(obj);

  return dispatch => {
    let config = {
      Password: obj.Password,
      Email: obj.Email,
    };
    return Axios.post('https://www.foodizza.com/api/DriverLogin', config, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.data.HasErrors === false) {
          if (AsyncStorage.getItem('Token')) {
            AsyncStorage.clear();
            AsyncStorage.setItem(
              'Token',
              JSON.stringify(response.data.AuthToken),
            );
            AsyncStorage.setItem('UserDetails', JSON.stringify(response.data));
          } else {
            AsyncStorage.setItem(
              'Token',
              JSON.stringify(response.data.AuthToken),
            );
            AsyncStorage.setItem('UserDetails', JSON.stringify(response.data));
          }
          dispatch({
            type: Constants.Driver_Login,
            payload: response.data,
          });
        } else {
          alert('Your Email Password in incorrect');
          return false;
        }
        return !response.data.HasErrors;
      })
      .catch(e => {
        console.log('LoginCatch', e);
      });
  };
};
export const tokenVerify = payload => {
  return {
    type: Constants.Driver_Login,
    payload,
  };
};
