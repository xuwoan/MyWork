import { connect } from 'react-redux';
import MoreScreen from './MoreScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {
	StyleSheet,
	View,
	Image,
	Easing,
	KeyboardAvoidingView,
	ActivityIndicator,
	TouchableOpacity, ToastAndroid,
	Animated,
	Text,
	TextInput
} from 'react-native';
class MoreScreenContainer extends MoreScreen {
    
   
}
const mapStateToProps = (state) => {
    return {
      
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       
   
    onLogout:()=>{
        dispatch(actions.Logout())
    }}
};
export default connect(mapStateToProps, mapDispatchToProps)(MoreScreenContainer);