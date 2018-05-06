import { connect } from 'react-redux';
import DetailRecruiment from './DetailRecruiment';
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
    Text, ListView,
    TextInput
} from 'react-native';
class DetailRecruimentContainer extends DetailRecruiment {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: [true, true, true],
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            recruiment: {

            },
            cvchose: -1,
            dataSourceCV: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            dataSource1: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            showDialogCV: false,
            cvte: {
                cvid: "",
                date: formatDate(new Date()),
                candidateid: this.props.user.userid,
                recruimentid: "",
                employerid: "",
                position: ""
            },
            stateposition : [false,false,false,false,false]
        }
        this.goBack = this.goBack.bind();
        this.setcollapsed = this.setcollapsed.bind(this);
        this.onShowDialogCV = this.onShowDialogCV.bind(this);
        this.onHideDialogCV = this.onHideDialogCV.bind(this);
        this.onCreateCVTE = this.onCreateCVTE.bind(this);
    };
    checkcvte()
    {
        if(this.state.cvchose<0)
        {
            ToastAndroid.show("Vui Lòng chọn CV muốn gửi",50);
            return true;
        }
        for(var i =0 ;i<this.state.stateposition.length;i++)
        {
            if(this.state.stateposition[i]===true)
            {
                return false;
            }
        }
        ToastAndroid.show("Vui Lòng chọn vị trí ứng tuyển",50);
        return true;
    }
    onCreateCVTE()
    {
        if(!this.checkcvte())
        {
            console.log(this.state.cvte)
            this.props.onfetchAddCVTE(this.state.cvte);
            this.onHideDialogCV()
        }
    }
    onShowDialogCV() {
        this.props.onfetchMyCV({ userid: this.props.user.userid })
        this.setState({
            showDialogCV: true
        })
    }
    onHideDialogCV() {
        this.setState({
            showDialogCV: false
        })
    }
    componentWillMount() {
        this.props.onFetchCheckUser({ recruimentid: this.props.recruiment.id, candidateid: this.props.user.userid });

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.recruiment !== this.props.recruiment) {

            var temp = Object.assign({}, nextProps.recruiment)
            temp.job.push({})
            console.log("CLONE", temp)
            this.setState(prevState => ({

                recruiment: temp,
                cvte:{
                    ...prevState.cvte,
                    employerid:nextProps.recruiment.company.userid,
                    recruimentid:nextProps.recruiment.id
                }

            }))
            
            
        }
        if (nextProps.stateAdding !== this.props.stateAdding && this.props.stateAdding===false) {

            this.props.onFetchCheckUser({ recruimentid: this.props.recruiment.id, candidateid: this.props.user.userid })
            
            
        }
    }

}
const mapStateToProps = (state) => {
    return {
        recruiment: selectors.getdetailRecruiment(state),
        user: selectors.getUserInfo(state),
        checkuser: selectors.getCheckUser(state),
        listUserCV: selectors.getListDataCV(state),
        stateAdding: selectors.getStateCVTEAdding(state)


    }
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
const mapDispatchToProps = (dispatch) => {
    return {

        onFetchCheckUser: (param) => {
            dispatch(actions.fetchCheckUserCVTE(param))
        },
        onfetchMyCV: (param) => {
            dispatch(actions.fetchListCV(param))
        },
        onfetchAddCVTE: (param)=>
        {
            dispatch(actions.fetchAddCVtoEmployer(param))
        }
        


    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailRecruimentContainer);