/*
@providesModule Const
*/
import {
	Platform
} from 'react-native';


const DEBUG_MODE = false;

const API_ROOT = 'http://api.muavevietlott.com/';
// const API_ROOT = 'http://api.muavevietlott.com/';



let ballColor = {}

const URL = "http://xuwoan.tk:3000"
	


var isModalOpen = false;
const router ={
    Home: 'APP_HOME',
}
const ActionsTypes = {

}



const AppConstants = {
	// cheat variable, not a constant
	isLoadingModalOpen: false,

	isInRootScreen: false,
	
	URL: URL,
	
	
};



module.exports = AppConstants;
