import { connect } from 'react-redux';
import Employer_WorkScreen from './Employer_WorkScreen';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import {
	
	TouchableOpacity, ToastAndroid,
	Animated,
	Text,
	TextInput
} from 'react-native';
class Employer_WorkScreenContainer extends Employer_WorkScreen {

	componentWillMount() {
		this.props.fetchlistJob();
		this.props.onFetchDepartment();
		this.props.fetchlistProvince();
		this.props.fetchlistRecruiment();
		
	}
	componentWillReceiveProps(nextProps) {
        console.log("DDDD",nextProps.listrecruiment)
	}
	gotoDefault()
	{
		this.props.fetchlistRecruiment();
	}
}
const mapStateToProps = (state) => {
	return {
		listrecruiment: selectors.getlistRecruiment(state),
		listjob: selectors.getlistJob(state),
		listprovince: selectors.getlistProvince(state),
		

	}
};

const mapDispatchToProps = (dispatch) => {
	return {

		fetchlistJob: () => {
			dispatch(actions.ListJob())
		},
		fetchlistProvince: () => {
			dispatch(actions.listProvince())
		},
		onFetchDepartment: (param) => {
            dispatch(actions.fetchListDepartment(param))
        },
		fetchlistRecruiment: () => {
			dispatch(actions.listRecruiment())
		},	
		fetchdetailRecruiment: (params) => {
			dispatch(actions.fetchDetailRecruiment(params))
		},

	
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(Employer_WorkScreenContainer);