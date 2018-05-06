import { connect } from 'react-redux';
import InfoScreen from './InfoScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {
  

    ActivityIndicator,ListView,
    TouchableOpacity, ToastAndroid,
   
} from 'react-native';
class InfoScreenContainer extends InfoScreen {
    constructor(props) {
        super(props);
        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            page:{
                page1:1,
                page2:1
            }
        };
        this.gotoDetailNew = this.gotoDetailNew.bind(this);
    }
    componentWillMount() {
        this.props.onfetchAnalysis();
       this.props.onfetchAllNews(this.state.page);
      console.log("PROPs",this.props.list1)
    }
    componentWillReceiveProps(nextProps) {
        
    }
    gotoDetailNew(value)
    {
        console.log("VL",value)
        this.props.fetchdetailNews({id:value.id})
        setTimeout(() => { Actions.tab_detailinfo() }, 3000);
    }
}
const mapStateToProps = (state) => {
    return {
        list1: selectors.getlistNews1(state),
        list2: selectors.getlistNews2(state),
        dataanalysis: selectors.getdataAnalysis(state),
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchAnalysis: (param) => {
            dispatch(actions.fetchDataAnalysis(param))
        },
        onfetchDetailNews: (param) => {
            dispatch(actions.fetchDetailNews(param))
        },
        onfetchAllNews: (param) => {
            dispatch(actions.fetchAllNews(param))
        },
        fetchdetailNews: (params) => {
			dispatch(actions.fetchDetailNews(params))
		},
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoScreenContainer);