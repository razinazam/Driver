import {combineReducers} from 'redux';

//import Modal Reducer
import DriverRecivePopup from './DriverRecivePopup';
import PaymentModal from './PaymentModal';
import RsturantorderDetail from './ResturantOrderdetails';
import ResturantLocation from './ResturantLocation';
import SuccessCard from './SuccesCard';
import SuccessCardDetails from './SUccessCardDetails';
import CustomerLOcation from './CustomerLocation';
//Auth Reducer
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import ResetPassByEmail from './Auth/ForgetPassByEmail';
//payment slider data Up coming evets
import UpComignDeleveries from './PaymentSliderContent/UpomingDeleveries';
//Driver Online & offline
import DriverOnline from './DriverOnline';
import DriverAcceptandReject from './DriverAcceptandReject';
const Root_reducer = combineReducers({
  PaymentModal,
  DriverRecivePopup,
  RsturantorderDetail,
  ResturantLocation,
  CustomerLOcation,
  SuccessCard,
  SuccessCardDetails,
  Login,
  SignUp,
  UpComignDeleveries,
  ResetPassByEmail,
  DriverOnline,
  DriverAcceptandReject,
});
export default Root_reducer;
