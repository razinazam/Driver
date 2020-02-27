import * as constatnts from '../constants';
import Axios from 'axios';
export const DriverAcceptandReject = Show => {
  return dispatch => {
    dispatch({
      type: constatnts.Driver_Accept_and_Reject_modal,
      payload: Show,
    });
  };
};
export const DriverReject = orderId => {
  return dispatch => {
    const config = {
      OrderId: orderId,
      StatusId: 22,
    };
    Axios.post('https://www.foodizza.com/api/ChangeOrderStatus', config)
      .then(res => {
        dispatch({
          type: constatnts.DRIVER_REJECT,
          payload: res.data,
        });
        alert('You Order is reject', res);
      })
      .catch(e => {
        alert('error');
      });
  };
};

export const DriverAccept = orderId => {
  return dispatch => {
    const config = {
      OrderId: orderId,
      StatusId: 21,
    };
    Axios.post('https://www.foodizza.com/api/ChangeOrderStatus', config)
      .then(res => {
        dispatch({
          type: constatnts.DRIVER_REJECT,
          payload: res.data,
        });
        alert('You Order is Accept', res);
      })
      .catch(e => {
        alert('error');
      });
  };
};
