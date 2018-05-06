
import React, { Component } from 'react';
import {
    Animated,
    Platform,
    View,
    Text,
    StatusBar,
    Image, TouchableOpacity,
    StyleSheet, ListView, ScrollView
} from 'react-native';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Container, Icon, Button, Header, Body, Title, Left, Right, Content } from 'native-base';
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const { width } = Dimensions.get('window')
import  AppConstants  from '../../constants/application.constants';
import ParallaxView from 'react-native-parallax-view'
var workdata = require('../../data/data1.json')
const HEADER_MAX_HEIGHT = 40;

const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT;
export default class CVinPost extends Component {
    constructor(props) {
        super(props);
        this.state = {

          
        };
       
    }
    

    
    renderListCV() {

        return (
            <View style={{ paddingTop: 40, margin: 1 }}>
            { console.log("RE  ",this.props.listcvte)}
                {
                   
                    this.props.listcvte ?
                <ListView dataSource={this.state.dataSource.cloneWithRows(this.props.listcvte)}
                    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                    renderRow={(row) =>
                        <TouchableOpacity >

                            <View style={styles.container1}>
                                {console.log("ROW",row)}
                                <Image source={{ uri: AppConstants.URL+row.image }} style={styles.photo} resizeMode='stretch' />
                                <View style={styles.columcon}>

                                   {/* <Text style={styles.text1} numberOfLines={3}>{row.title}</Text>
                                    <Text style={styles.text2} numberOfLines={1}>{row.companyname} </Text>
                                    
                                    <View style={{ flexDirection: 'row', marginLeft: 25, marginRight: 5, }}>
                                        <Image style={{ resizeMode: 'stretch', height: 17, width: 17,marginTop:1,marginBottom:1 }} source={require('../../images/job_icon.png')}></Image>
                                        <Text style={{ paddingLeft: 5, marginRight: 5, fontSize: 12 ,width:width/2-50}} numberOfLines={1} ><Text style={{ marginRight: 5, fontSize: 12, fontWeight: 'bold' }}>:</Text> {row.job}</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 25, marginRight: 5, }}>
                                        <Image style={{ resizeMode: 'stretch', height: 17, width: 17,marginTop:1,marginBottom:1 }} source={require('../../images/salary_icon.png')}></Image>
                                        <Text style={{ paddingLeft: 5, marginRight: 5, fontSize: 12 }} numberOfLines={1}><Text style={{ marginRight: 5, fontSize: 12, fontWeight: 'bold',marginLeft:1 }} numberOfLines={1}>:</Text > {row.salary }{row.salary>0?'$':''} </Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 25, marginRight: 5,
                                     }}>
                                        <Image style={{ resizeMode: 'stretch', height: 17, width: 17,marginTop:1,marginBottom:1 }} source={require('../../images/location_icon.png')}></Image>
                                        <Text style={{ paddingLeft: 5, marginRight: 5, fontSize: 12 ,width:width/2-50 }} numberOfLines={1} ><Text style={{ marginRight: 5, fontSize: 12, fontWeight: 'bold' }}  >:</Text> {row.location }</Text>

                                    </View> */}
                                </View>

                            </View>

                        </TouchableOpacity>
                    }
                >
                </ListView>:
                null
                }
            </View>
        );
    }
   
   
    render() {
     





        return (

            
            <Container>
                
                {/*<Content style={{ backgroundColor: '#EDD4AC' }}>*/}

                <View style={{ flex: 1, backgroundColor: '#FDFEFE' }}>

                   

                        {this.renderListCV()}

                   
                    <View style={{ height: 50 }} />

                </View>

            </Container>

        )
    }
    componentDidMount() {
       console.log("USEEEEEEEEEEE",this.props.user)
        
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcb05',
    },
    image: {
        width,
        backgroundColor: 'transparent',

    },
    photo: {
        marginTop: 2,
        height: 75,
        width: 135,
        resizeMode:'stretch'
    },
    columcon: {
        flex: 1,
        marginLeft:10,
        marginRight:5,
       

    },
    container1: {
        // flex: 0.5,
        margin: 2, width: width / 2 - 5,
        borderRadius: 0,
        borderColor: "#2E4053",
        borderWidth: 0.5,
        height: 210,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'


    },
    text1: {
        marginLeft: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 4,
        height:47,
        width:width/2-20,
        fontWeight: 'bold',
        fontSize: 13,
        color: '#2E4053',

    }
    ,
    text2: {
        marginLeft: 15,
        fontStyle: 'italic',
        marginRight: 5,
        fontSize: 13,
        color: "#60819E"

        //  textAlign: 'right',
        //  position: 'absolute',
        // right: 0,
    }
    ,
    text3: {
        marginLeft: 15,

        marginRight: 5,
        fontSize: 12,
        //  textAlign: 'right',
        //  position: 'absolute',
        // right: 0,
    },
    text4: {
        marginLeft: 15,

        marginRight: 5,
        fontSize: 12,
        fontWeight: "bold",
        color: "#3D3D3D"
        //  textAlign: 'right',
        //  position: 'absolute',
        // right: 0,
    },
    slide: {
        height: 250,
        width: 500,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    wrapper: {
    },
    fill: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    header: {
        position: 'absolute',

        left: 0,
        right: 0,
        flexDirection: 'row',
        borderTopColor: "white",
        borderRightColor: "white",
        borderLeftColor: "white",

        backgroundColor: 'white',
        borderBottomColor: "#60819E",

        borderWidth: 0.5,
        // overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 38,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },

})

