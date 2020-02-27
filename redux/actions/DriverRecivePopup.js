import * as constatnts from '../constants';
import Axios from 'axios';
export const DriverRecivePopup = (Show, UpComingData) => {
  return dispatch => {
    dispatch({
      type: constatnts.DRIVER_POP_UP_RECIVE,
      payload: Show,
      Upcoming: UpComingData,
    });
  };
};
export const DriverGoingPickUp = orderId => {
  return dispatch => {
    const config = {
      OrderId: orderId,
      StatusId: 45,
    };
    Axios.post('https://www.foodizza.com/api/ChangeOrderStatus', config)
      .then(res => {
        alert('Going PickUp');
        dispatch({
          type: constatnts.Driver_Going_PICK_UP,
          payload: res.data,
        });
      })
      .catch(e => {
        alert('error');
      });
  };
};
