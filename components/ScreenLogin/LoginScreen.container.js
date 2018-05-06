import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {
  
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity, ToastAndroid,
   
} from 'react-native';
class LoginScreenContainer extends LoginScreen {
    componentWillMount() {
        this.props.onfetchToken();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.loginsuccess === true && this.props.loginsuccess === false) {
            if (nextProps.user.type === 0)
               {
                   console.log("uv");
                    Actions.modal();
                    this.props.onResetLoginState();

               }
            else{ console.log("td");
                Actions.em_modal();
                this.props.onResetLoginState();
            }
        }
        if(nextProps.username !== this.props.username)
        {
            console.log("CHANGE PORPS")
            this.setState({
                password:nextProps.password,
                username:nextProps.username
            })
           
        }
    }
}
const mapStateToProps = (state) => {
    return {
        user: selectors.getUserInfo(state),
        loginsuccess: selectors.getLoginState(state),
        isLoading: selectors.getLoadingLogin(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchUser: (param) => {
            dispatch(actions.UserInfo(param))
        },
        onfetchToken: () => {
            dispatch(actions.UseTokenRequest())
        },
        onResetLoginState: () =>{
            dispatch(actions.reretLoginState())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer);