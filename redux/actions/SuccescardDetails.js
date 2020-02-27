import * as constatnts from '../constants';
import Axios from 'axios';
export const SuccessCardDetails = (Show, v) => {
  console.log(v);

  return dispatch => {
    dispatch({
      type: constatnts.SUCCESS_CARD_Details,
      payload: Show,
      Details: v,
    });
  };
};
export const DriverDelevered = orderId => {
  return dispatch => {
    config = {
      OrderId: orderId,
      StatusId: 70,
    };
    Axios.post('https://www.foodizza.com/api/ChangeOrderStatus', config)
      .then(res => {
        dispatch({
          type: constatnts.Driver_Delevered,
          payload: res,
        });
        alert('Confirm Delvered');
      })
      .catch(e => {
        alert('error');
      });
  };
};
