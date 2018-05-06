import { connect } from 'react-redux';
import CVinPost from './CVinPost';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {

    TouchableOpacity, ToastAndroid, ListView, Alert

} from 'react-native';
class CVinPostContainer extends CVinPost {
    constructor(props) {
        super(props)
        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            
        };
      



    }
   
    gotoUserDetailRecruiment(data) {
        Actions.screen_detailpost({ idpost: data.id })
    }
    componentWillMount() {
        
    }
    componentWillReceiveProps(nextProps) {
       

    }
    gotoAskDetele(data) {
        Alert.alert(
            'Thông báo',
            'Bạn muốn xóa bài viết này',
            [


                { text: 'OK', onPress: () => { this.props.onfetchListCVTE({ id: data.id }) } },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }


}
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};
function formatDate(date) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + '-' + monthIndex + '-' + year;
}
const mapStateToProps = (state) => {
    return {

        listcvte: selectors.getListDataCVTE(state),
        user: selectors.getUserInfo(state)
       

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchListCVTE: (param) => {
            dispatch(actions.fetchListCVtoEmployer(param))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CVinPostContainer);