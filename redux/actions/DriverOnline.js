import * as Constants from '../constants';
import Axios from 'axios';
export const DriverOnline = (ID, Val) => {
  return dispatch => {
    Axios.get(`https://www.foodizza.com/api/GoOnline?driverId=${ID}`).then(
      res => {
        dispatch({
          type: Constants.DRIVER_ONLINE,
          paylaod: res.data,
        });
        alert(res.data.ResultMessages[0].Message);
      },
    );
  };
};
export const DriverOffline = (ID, Val) => {
  return dispatch => {
    Axios.get(`https://www.foodizza.com/api/GoOnline?driverId=${ID}`).then(
      res => {
        dispatch({
          type: Constants.DRIVER_OFFLINE,
          Value: Val,
        });
        alert(res.data.ResultMessages[0].Message);
      },
    );
  };
};
