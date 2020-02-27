import Axios from 'axios';
import * as Constants from '../../constants';
import {AsyncStorage, Alert} from 'react-native';
export const ForgetpassByEmail = obj => {
  //   console.log(obj);
  return dispatch => {
    Axios.get(
      `https://www.foodizza.com/api/DriverForgetPassword?email=${obj}`,
    ).then(res => {
      dispatch({
        type: Constants.Forget_password_BY_Email,
        payload: res.data,
      });
      console.log(res.data.ResultMessages);

      //   alert(res.data.ResultMessages.Message);
    });
  };
};
