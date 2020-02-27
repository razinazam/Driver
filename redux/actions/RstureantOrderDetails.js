import * as constatnts from '../constants';
import Axios from 'axios';
export const ResturantORderDetails = (Show, v) => {
  return dispatch => {
    dispatch({
      type: constatnts.RESTURANT_ORDER_DETAILS_POPUP,
      payload: Show,
      ResturantDetails: v,
    });
  };
};
export const DriverOrderPickUp = orderId => {
  console.log('sav', orderId);
  return dispatch => {
    const config = {
      OrderId: orderId,
      StatusId: 50,
    };
    Axios.post('https://www.foodizza.com/api/ChangeOrderStatus', config)
      .then(res => {
        dispatch({
          type: constatnts.Driver_Picked,
          payload: res.data,
        });
        alert('Order picked', res.data);
      })
      .catch(e => {
        alert('error');
      });
  };
};
